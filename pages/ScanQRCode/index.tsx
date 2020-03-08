import React, { useEffect, useState } from 'react';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner, BarCodeScannedCallback } from 'expo-barcode-scanner';
import ScannerIcon  from '../../components/ScannerIcon';
import { CameraTopBezierCurve } from '../../components/CameraHeader';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CancelButton } from '../../components/CancelButton';
import { NavigationComponent } from 'react-navigation';
import { withNavigation } from '../../components/withNavigation';
import { useNavigation } from 'react-navigation-hooks';
import { ChevronOutlineLeft } from '../../components/CancelButton';

interface Props {
  navigation: NavigationComponent<any, any>;
}

export const ScanQRCode = withNavigation(() => {
  const [hasCameraPermission, setHasCameraPermission] = useState(true);

  const { navigate } = useNavigation();

  useEffect(() => {
    const checkCameraPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    };

    checkCameraPermissions();
  });

  const handleBarCodeScanned: BarCodeScannedCallback = e => {
    console.log(e.data);
    navigate('SendEthereum', { address: e.data.split(':')[1] });
  };

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
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
      <View
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigate('SendEthereum')}>
           <CancelButton />
        </TouchableOpacity>
      </View>
    </>
  );
});
