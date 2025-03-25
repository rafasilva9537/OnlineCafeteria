import { colors } from "@/constants/colors";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const client = { 
    firsName: "Marcos", 
    lastName: "Nunes",
    email: "marcos@email.com",
    phone: "61999999999",
    photo: require("@/media/images/bird.jpeg"),
}

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image source={client.photo} style={styles.profilePhoto} />
            <View style={styles.profileInfo}>
                <Text>Nome: {client.firsName} {client.lastName}</Text>
                <Text>Email: {client.email}</Text>
                <Text>Celular: {client.phone}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: colors
    },
    profilePhoto: {
        width: 250,
        height: 250,
        borderRadius: 200
    },
    profileInfo: {

    }
});

export default Profile;