import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import foods from "@/mock_data/foods";
import { useLocalSearchParams } from "expo-router";
import Food from "@/interfaces/food";
import { colors } from "@/constants/colors";

// TODO: mudar local da página de compra, pois será implementado carrinho de compras, com múltiplos items

const PursacheText = ({children}: any) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

interface FoodContainerProps {
    food: Food,
}

const FoodContainer = ({food}: FoodContainerProps) => {
    return (
        <View style={styles.container}>
            <PursacheText>Resumo da Compra</PursacheText>
            <View style={styles.itemsContainer}>
                <PursacheText>Items: </PursacheText>
                <View style={{flexDirection: "row", gap: 5}}>
                    <Image source={ {uri: food.image} } style={styles.foodImage}/>
                    <View>
                        <PursacheText>{food.title}</PursacheText>
                        <PursacheText>R$ {food.price}</PursacheText>
                    </View>
                </View>
            </View>
            <View style={styles.singleInfoContainer}>
                <PursacheText>Quantidade Total:</PursacheText>
                <PursacheText>1</PursacheText>
            </View>
            <View style={styles.singleInfoContainer}>
                <PursacheText style={styles.text}>Valor total:</PursacheText>
                <PursacheText>R$ {food.price.toFixed(2).replace(".", ",")}</PursacheText>
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
        width: "90%",
        borderWidth: 1,
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10
    },
    foodImage: {
        width: 60,
        height: 60
    },
    singleInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        borderWidth: 1,
    },
    text: {
        fontSize: 20
    }
});

export default Pursache;