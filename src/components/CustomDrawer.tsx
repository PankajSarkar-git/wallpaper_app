import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Avatar, Text, useTheme, Divider } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <View style={styles.avatarWrapper}>
          <Avatar.Image
            size={80}
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          />
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      <Divider style={{ marginHorizontal: 10 }} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 MyApp</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 35,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarWrapper: {
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 50,
    padding: 2,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 5,
  },
  email: {
    color: "#f0f0f0",
    fontSize: 13,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  footer: {
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#999",
    fontSize: 12,
  },
});

export default CustomDrawer;
