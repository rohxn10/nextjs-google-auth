import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const WEBVIEW_URL = Platform.select({
    ios: 'http://localhost:3000',
    android: 'http://192.168.0.101:3000', // ⬅️ replace with your actual IP if you're on Android
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
