// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomePage from '../screens/home';
// import AboutPage from '../screens/about';
// import HomeStack from "./main-routes";
// const Drawer = createDrawerNavigator();
// const Router = () => {
//   return (
//       <Drawer.Navigator initialRouteName='HomeStack'>
//           <Drawer.Screen name="HomeStack" component={HomeStack} />
//           <Drawer.Screen name="About" component={AboutPage} />
//       </Drawer.Navigator>
//   );
// };
// export default Router;




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider as PaperProvider } from 'react-native-paper';

import HomePage from '../screens/home';
import AboutPage from '../screens/about';
import HomeStack from './main-routes';
import CustomDrawer from '../components/CustomDrawer';
import CustomHeader from '../components/CustomHeader';

export type RootDrawerParamList = {
  HomeStack: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Router: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeStack"
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            // headerShown: false, // we’ll use CustomHeader instead
            header: (props) => <CustomHeader {...props} />,
            drawerActiveTintColor: '#6200ee',
            drawerInactiveTintColor: '#555',
            drawerLabelStyle: { fontSize: 16, marginLeft: -10 },
          }}
        >
          <Drawer.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              title: 'Home',
              drawerIcon: ({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={AboutPage}
            options={{
              title: 'About',
              drawerIcon: ({ color, size }) => (
                <Icon name="information-outline" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
