import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const FoodDetails = () => {
    const id = useLocalSearchParams();

    return (
        <View>
            <Text>Here is food</Text>
        </View>
    );
}

export default FoodDetails;