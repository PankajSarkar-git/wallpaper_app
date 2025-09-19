
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import HomePage from "../screens/home";
import AboutPage from "../screens/about";
import Profile from "../screens/profile";
import Address from "../screens/address";

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={Profile} />
      <ProfileStack.Screen name="Address" component={Address} />
    </ProfileStack.Navigator>
  );
}

export default function CustomBottomTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 6,
          position: "absolute",
          height: 65,
          paddingBottom: 8,
          overflow: "hidden",
        },
        tabBarActiveTintColor: theme.colors.onPrimary || "#fff",
        tabBarInactiveTintColor: "#ddd",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
