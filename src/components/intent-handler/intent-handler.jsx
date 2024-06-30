import React, { useEffect } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { DeviceEventManagerModule } = NativeModules;

const IntentHandler = ({ onNewIntent }) => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(DeviceEventManagerModule);
    const subscription = eventEmitter.addListener('onNewIntent', (intent) => {
      if (onNewIntent) {
        onNewIntent(intent);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [onNewIntent]);

  return null;
};

export default IntentHandler;
