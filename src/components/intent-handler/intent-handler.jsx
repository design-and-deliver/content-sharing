import React, { useEffect } from 'react';
import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

const { IntentModule } = NativeModules;

const IntentHandler = ({ onNewIntent }) => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(IntentModule);
    const subscription = eventEmitter.addListener('onNewIntent', (intent) => {
      if (onNewIntent) {
        onNewIntent(intent);
      }
    });

    // Handle the initial intent if the app was launched with an intent
    if (Platform.OS === 'android' && IntentModule.getInitialIntent) {
      IntentModule.getInitialIntent().then((intent) => {
        if (intent && onNewIntent) {
          onNewIntent(intent);
        }
      });
    }

    return () => {
      subscription.remove();
    };
  }, [onNewIntent]);

  return null;
};

export default IntentHandler;
