import React, { useState, useEffect } from 'react';
import {
  PanResponder,
  Animated,
  View,
  PanResponderInstance,
} from 'react-native';
import { WheelContainer, IconContainer } from './styles';
import { Wheel } from '../Wheel';
// @ts-ignore
import AnimatedMath from 'react-native-animated-math';
import { getFixedValuesFromTotalRotation } from '../../consts/getFixedValuesFromTotalRotation';

interface CurrencyIcon {
  icon: () => JSX.Element;
  index: number;
}


const RADIUS = 150;
const NORMALIZE_RATIO = 100;

const getRotationAdjust = (rotationStep: number, iconIndex: number) => {
  return new Animated.Value(rotationStep * iconIndex);
};

const getXFromScroll = (
  scroll: Animated.Value,
  rotationAdjust: Animated.Value,
) => {
  // normalize scroll
  const normalizedScroll = Animated.divide(
    scroll,
    new Animated.Value(NORMALIZE_RATIO),
  );
  const rotationAdjustedScroll = Animated.add(normalizedScroll, rotationAdjust);
  const x = Animated.multiply(
    AnimatedMath.cosinus(rotationAdjustedScroll),
    new Animated.Value(RADIUS),
  );
  // @ts-ignore
  if (Number.isNaN(x.__getValue())) {
    return 0;
  }
  return x;
};

const getYFromScroll = (
  scroll: Animated.Value,
  rotationAdjust: Animated.Value,
) => {
  // Normalize scroll
  const normalizedScroll = Animated.divide(
    scroll,
    new Animated.Value(NORMALIZE_RATIO),
  );
  const rotationAdjustedScroll = Animated.add(normalizedScroll, rotationAdjust);
  const y = Animated.multiply(
    AnimatedMath.sinus(rotationAdjustedScroll),
    new Animated.Value(RADIUS),
  );
  // @ts-ignore
  if (Number.isNaN(y.__getValue())) {
    return 0;
  }
  return y;
};

export const CurrencySpinner  = (props) => {
  const [handleScroll, setHandleScroll] = useState();
  const [currencyIcons, setCurrencyIcons] = useState([]);
  const [scrollAmount, setScrollAmount] = useState( new Animated.Value);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [panResponderEnabled, setPanResponderEnabled] = useState(true);
  const [numberOfIcons, setNumberOfIcons] = useState(0);

  getRotationStep = () => {
    if (
      props.currencyIcons.length === 0 ||
      props.currencyIcons.length === -0
    ) {
      return 0;
    }
    return (Math.PI * 2) / props.currencyIcons.length;
  };

  panResponder: PanResponderInstance;
  disabledPanResponder: PanResponderInstance;

    panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        // On gesture start, setOffsetAmount so that animation doesn't reset.
        // @ts-ignore
        scrollAmount.setOffset(scrollAmount.__getValue());
        scrollAmount.setValue(0);
      },
      onPanResponderMove: Animated.event([
        null,
        { dy: scrollAmount },
      ]),
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        // Get number of rotations from gesture state (value given in radians)
        const totalRotation = gestureState.dy / NORMALIZE_RATIO;
        // Calculate nearest fixed value from total rotation. Also returns number of steps taken.
        const fixedValues = getFixedValuesFromTotalRotation(
          totalRotation,
          props.currencyIcons.length,
        );
        let newSelectedIndex =
          (selectedIndex + fixedValues.steps) %
         props.currencyIcons.length;

        newSelectedIndex = Math.round(newSelectedIndex);
        if (newSelectedIndex < 0) {
          newSelectedIndex += props.currencyIcons.length;
        }
       props.handleScroll(newSelectedIndex);
        /*
         * Disable panResponder while animating to fixed position
         */
        setPanResponderEnabled(false);
        Animated.timing(props.scrollAmount, {
          toValue: fixedValues.rotation * 100,
          duration: 200,
        }).start(() => {
          setPanResponderEnabled(true);
          // @ts-ignore
         props.scrollAmount.setOffset(
            props.scrollAmount.__getValue(),
          );
          props.scrollAmount.setValue(0);
        });
      },
    });


  getPanHandler = () => {
    return panResponderEnabled
      ? panResponder.panHandlers
      : null;
  };


    return (
      <View style={{ flex: 1 }} {...getPanHandler()}>
        <WheelContainer>
          <Wheel />
        </WheelContainer>
        {/* 
          All icon's initial position is set to the center of the wheel.
        */}
        {props.currencyIcons.map(icon => (
          <Animated.View
            key={icon.index}
            style={{
              transform: [
                {
                  translateX: getXFromScroll(
                    props.scrollAmount,
                    getRotationAdjust(getRotationStep(), -icon.index),
                  ),
                },
                {
                  translateY: getYFromScroll(
                    props.scrollAmount,
                    getRotationAdjust(getRotationStep(), -icon.index),
                  ),
                },
              ],
            }}
          >
            <IconContainer top={118} left={-62}>
              {icon.icon()}
            </IconContainer>
          </Animated.View>
        ))}
      </View>
    );
}
