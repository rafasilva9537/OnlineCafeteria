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
    <Link href={`/foods/${id}`} asChild>
      <TouchableOpacity style={{ width: "100%" }}>
        <Image source={ {uri: image} } style={styles.foodImage}/>
        <Text style={styles.foodTitle}>{name}</Text>
      </TouchableOpacity>
    </Link>
  );
}

export default function Index() {
  return (
    <View style={styles.homepageContainer}>
      <FlatList style={styles.foodList}
        ListHeaderComponent={<Text style={styles.homeTitle}>Lanchonete Online</Text>}
        data= {foods}
        renderItem={({item}) => <FoodBox {... item}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerStyle={styles.foodContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homepageContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: colors.background
  },
  homeTitle: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  foodList: {
    width: "100%",
  },
  foodContainer: {
    width: "60%",
    alignSelf: "center",
    gap: 10,
  },
  foodTitle: {
    fontSize: 17,
  },
  foodImage: {
    width: "100%" ,
    height: 100
  }
});