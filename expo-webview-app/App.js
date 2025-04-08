import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const WEBVIEW_URL = Platform.select({
    ios: 'http://localhost:3000',
    android: 'http://192.168.29.157:3000', 
  });

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: WEBVIEW_URL }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
