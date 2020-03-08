import * as React from 'react';
import { withApollo } from 'react-apollo';
import { BarCodeScanner, Permissions } from 'expo';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { isValidCode } from '../graphql/queries/isValidCode';
import { NavigationComponent } from 'react-navigation';
import ScannerIcon from './ScannerIcon';
import { CameraTopBezierCurve } from './CameraTopBezierCurve';
import { ScannerLabel } from './ScannerLabel';
import { CancelButton } from './CancelButton';

interface Props {
  client: any;
  navigation: NavigationComponent;
}

class QRCodeScanner extends React.Component<Props> {
  static navigationOptions = () => {
    return {
      headerTransparent: true,
      headerStyle: { borderBottomWidth: 0 },
      headerLeft: null,
    };
  };

  state = {
    hasCameraPermission: true,
    isSubmitting: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async doQuery(code: string) {
    const response = await this.props.client.query({
      query: isValidCode,
      variables: {
        code,
      },
    });
    this.setState({ isSubmitting: false });
    this.props.navigation.navigate('SelectCurrency', {
      transactionAmount:
        response.data.isValidCode.transaction.transactionAmount,
      currency: response.data.isValidCode.transaction.currency,
    });
  }

  handleBarCodeScanned = ({ data }: { data: string }) => {
    this.setState({ isSubmitting: true });
    this.doQuery(data);
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return this.state.isSubmitting ? (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: '#FF9E27',
        }}
      >
        <ActivityIndicator size="large" color="#f8f8f8" />
        <Text style={{ color: '#f8f8f8', margin: 10, fontFamily: 'Medel' }}>
          Verifying Credit...
        </Text>
      </View>
    ) : (
      <>
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
        <ScannerIcon />
        <CameraTopBezierCurve />
        <ScannerLabel />
        <View
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <CancelButton />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default withApollo(QRCodeScanner);
