import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen 
      name="(tabs)"
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="foods/[id]"
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="foods/[id]/pursache"
      options={{ headerShown: false }}
    />
  </Stack>
}