import * as React from 'react';
import { Animated } from 'react-native';

interface Props {
  style: any;
}

export class FadeInView extends React.Component<Props> {
  state = {
    fadeAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  render() {
    const { fadeAnimation } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnimation,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
