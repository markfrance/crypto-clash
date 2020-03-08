import * as React from 'react';
import { BarCodeScanner, Permissions } from 'expo';
import { NavigationComponent } from 'react-navigation';
import { Text, View, Animated } from 'react-native';
import { BezierCurve } from '../../components/BezierCurve/BezierCurve';

interface Props {
  navigation: NavigationComponent;
}

export default class WalletQRCodeScanner extends React.Component<Props> {
  static navigationOptions = () => {
    return {
      headerTransparent: true,
      headerStyle: { borderBottomWidth: 0 },
    };
  };

  state = {
    hasCameraPermission: true,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ data }: { data: string }) => {
    return;
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <>
        <View style={{ zIndex: 1 }}>
          <BezierCurve scrollAmount={new Animated.Value(0)} />
        </View>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </>
    );
  }
}
