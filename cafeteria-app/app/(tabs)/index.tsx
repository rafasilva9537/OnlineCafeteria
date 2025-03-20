import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        marginTop: 30
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
        }}
      >Homepage</Text>
    </View>
  );
}