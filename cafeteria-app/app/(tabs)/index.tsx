import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import foods from "@/mock_data/foods"
import { colors } from "@/constants/colors";

interface Food {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
}

const FoodBox = ({id, name, image, price}: Food) =>{ 
  return (
    <Link style={styles.foodBoxContainer} href={`/foods/${id}`} asChild>
      <TouchableOpacity>
        <Image source={ {uri: image} } style={styles.foodImage}/>
        <Text style={styles.foodTitle}>{name}</Text>
      </TouchableOpacity>
    </Link>
  );
}

export default function Index() {
  return (
    <View style={styles.homepageContainer}>
      <FlatList
        ListHeaderComponent={<Text style={styles.homeTitle}>Lanchonete Online</Text>}
        data= {foods}
        renderItem={({item}) => <FoodBox {... item}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.foodList}
        columnWrapperStyle={styles.foodRowContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homepageContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: colors.background,
  },
  homeTitle: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  foodList: {
    width: "100%",
  },
  foodRowContainer: {
    width: "100%",
    gap: 10,
    justifyContent: "center",
    paddingBottom: 15
  },
  foodBoxContainer: {
    width: "45%",
  },
  foodTitle: {
    fontSize: 16,
  },
  foodImage: {
    width: "100%",
    height: 100,
    borderRadius: 5
  }
});