import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

const CustomHeader: React.FC<DrawerHeaderProps> = ({ navigation, options }) => {
  const theme = useTheme();
  const title = options.title ?? "My App";

  return (
    <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.primary }]}>
      {/* Left: menu toggle */}
      <Appbar.Action
        icon="menu"
        color="#fff"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />

      {/* Title */}
      <Appbar.Content
        title={title}
        titleStyle={styles.title}
      />

      {/* Right: Example action */}
      <Appbar.Action
        icon="bell-outline"
        color="#fff"
        onPress={() => console.log("Notifications")}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default CustomHeader;
