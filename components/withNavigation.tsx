import React from 'react';

export const withNavigation = (Component: any) => {
  class HOC extends React.Component {
    static navigationOptions = () => {
      return {
        headerLeft: null,
        headerStyle: { borderBottomWidth: 0 },
        headerTransparent: true,
        header: null,
      };
    };

    render(): React.ReactNode {
      return <Component {...this.props} />;
    }
  }
  return HOC;
};
