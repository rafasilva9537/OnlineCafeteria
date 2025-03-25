import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import foods from "@/mock_data/foods";
import { useLocalSearchParams } from "expo-router";
import Food from "@/interfaces/food";
import { colors } from "@/constants/colors";

// TODO: mudar local da página de compra, pois será implementado carrinho de compras, com múltiplos items

interface FoodContainerProps {
    food: Food,
}

const FoodContainer = ({food}: FoodContainerProps) => {
    return (
        <View style={styles.container}>
            <Text>Resumo da Compra</Text>
            <View style={styles.itemsContainer}>
                <Text>Items: </Text>
                <View>
                    <Image source={ {uri: food.image} } style={styles.foodImage}/>
                </View>
            </View>
            <View style={styles.singleInfoContainer}>
                <Text>Quantidade:</Text>
                <Text>1</Text>
            </View>
            <View style={styles.singleInfoContainer}>
                <Text>Valor total</Text>
                <Text>R$ {food.price.toFixed(2).replace(".", ",")}</Text>
            </View>
        </View>
    );
}

const Pursache = () => {
    const { id } = useLocalSearchParams();
    const food: Food = foods.filter(item => item.id.toString() === id)[0];

    return (
        <View>
            <FoodContainer food={food}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    itemsContainer: {
        width: "70%",
        borderWidth: 2,
        justifyContent: "space-between",
        marginBottom: 30,
    },
    foodImage: {
        width: 60,
        height: 60
    },
    singleInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        borderWidth: 2
    }
});

export default Pursache;