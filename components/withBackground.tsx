import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet } from 'react-native';

export enum BackgroundColor {
  Orange,
  Black,
}

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
});

function getColors(color: BackgroundColor) {
  switch (color) {
    case BackgroundColor.Black:
      return {
        fromColor: '#383838',
        toColor: '#585858',
      };
    case BackgroundColor.Orange:
      return {
        fromColor: '#fcbb24',
        toColor: '#f7931a',
      };
  }
}
export const withBackground = (Component: any, color: BackgroundColor) => {
  class HOC extends React.Component {
    static navigationOptions = () => {
      return {
        headerLeft: null,
        headerStyle: { borderBottomWidth: 0 },
        headerTransparent: true,
      };
    };

    render(): React.ReactNode {
      const colors = getColors(color);
      return (
        <LinearGradient
          colors={[colors.fromColor, colors.toColor]}
          start={[1, 0]}
          end={[0, 1]}
          style={styles.linearGradient}
        >
          <Component {...this.props} />
        </LinearGradient>
      );
    }
  }
  return HOC;
};
