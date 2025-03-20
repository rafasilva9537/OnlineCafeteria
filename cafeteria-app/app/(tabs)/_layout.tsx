import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { Tabs } from "expo-router";

const TabIcon = ({ focused, title, icon }: any) => {
    if(focused){
        return (
            <View style={[styles.tabIcon, styles.focusedTabIcon]}>
                <Image source={icon}/>
                <Text>{title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.tabIcon}>
            <Image source={icon}/>
            <Text>{title}</Text>
        </View>
    )
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{ 
                    title: "Home",
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Home" icon={require("@/assets/icons/home.svg")}/>
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorites",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Favorites" icon={require("@/assets/icons/home.svg")}/>
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Profile" icon={require("@/assets/icons/home.svg")}/>
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        gap: 0,
        alignItems: "center",
        minWidth: 125,
        borderRadius: 50,
    },
    focusedTabIcon: {
        backgroundColor: "rgb(0, 255, 155)",
    }
});

export default _Layout;