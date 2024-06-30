// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import useSharedText from './useSharedText';

// const ShareBridge2 = () => {
//   const {sharedText, error} = useSharedText();

//   return (
//     <View style={styles.container}>
//       {error ? (
//         <Text style={styles.errorText}>Error: {error}</Text>
//       ) : (
//         <Text style={styles.sharedText}>
//           {sharedText ? `Shared Text: ${sharedText}` : 'No shared text'}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   sharedText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//   },
// });

// export default ShareBridge2;
