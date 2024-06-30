// import React, {useEffect, useState} from 'react';
// import {View, Text} from 'react-native';
// import IntentModule from './intent-module';

// const ShareBridge = () => {
//   const [sharedText, setSharedText] = useState(null);

//   useEffect(() => {
//     const fetchSharedText = async () => {
//       try {
//         const result = await IntentModule.getSharedText();
//         if (result) {
//           setSharedText(result.sharedText);
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     fetchSharedText();
//   }, []);

//   return (
//     <View>
//       <Text>
//         {sharedText ? `Shared Text: ${sharedText}` : 'No shared text'}
//       </Text>
//     </View>
//   );
// };

// export default ShareBridge;
