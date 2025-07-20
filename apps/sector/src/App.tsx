import React from "react";
import { StyleSheet, View } from "react-native";
import { Canvas, Circle } from "@shopify/react-native-skia";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Circle cx={128} cy={128} r={60} color="cyan" />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  canvas: {
    flex: 1,
  },
});
