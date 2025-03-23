import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";
import { HomeSvg, ProfileSvg, StarSvg } from "@/constants/icons";
import { SvgProps } from "react-native-svg";

type TabIconProps = {
    focused: boolean, 
    title: string, 
    SvgIcon: React.FC<SvgProps> // used to show 'imported svg' dynamically 
}

const TabIcon = ({ focused, title, SvgIcon }: TabIconProps) => {
    if(focused){
        return (
            <View style={[styles.tabIcon, styles.focusedTabIcon]}>
                <SvgIcon />
                <Text>{title}</Text>
            </View>
        )
    }
 
    return (
        <View style={styles.tabIcon}>
            <SvgIcon />
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
                    backgroundColor: colors.background,
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{ 
                    title: "Home",
                    headerShown: false, 
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Home" SvgIcon={HomeSvg}/>
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorites",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Favorites" SvgIcon={StarSvg} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} title="Profile" SvgIcon={ProfileSvg}/>
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
        minHeight: 12,
        borderRadius: 50,
        top: "20%",
        padding: 1
    },
    focusedTabIcon: {
        backgroundColor: colors.accent,
    },
});

export default _Layout;