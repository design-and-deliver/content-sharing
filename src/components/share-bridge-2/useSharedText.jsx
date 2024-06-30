import { useEffect, useState } from 'react';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const useSharedText = () => {
  const [sharedText, setSharedText] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      (files) => {
        if (files.length > 0) {
          setSharedText(files[0].text);
        }
      },
      (error) => {
        setError(error.message);
        console.error('Error fetching shared text:', error);
      },
      'ShareMedia' // Share extension group name (needed for iOS)
    );

    return () => {
      ReceiveSharingIntent.clearReceivedFiles();
    };
  }, []);

  return { sharedText, error };
};

export default useSharedText;
