import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, Button } from "react-native";
import Food from "@/interfaces/food";
import foods from "@/mock_data/foods";
import { colors } from "@/constants/colors";

const FoodDetails = (props: { food: Food }) => {
    const food = props.food;
    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: food.image}} style={styles.foodImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{ food.title }</Text>
                <Text >R$ {food.price.toFixed(2).replace(".", ",")}</Text>
                <Text>{ food.description }</Text>
            </View>
        </ScrollView>
    );
}

const FoodPage = () => {
    const { id } = useLocalSearchParams();
    const foodData: Food = foods.filter((item) => item.id.toString() === id)[0];

    return (
        <>
        <FoodDetails food={foodData}/>
        <View>
            <Button title="Adicionar ao Carrinho" color={ colors.accent } />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    infoContainer: {
        padding: 10
    },
    foodImage: {
        width: "100%",
        height: 200,
        resizeMode:"stretch"
    }
});

export default FoodPage;