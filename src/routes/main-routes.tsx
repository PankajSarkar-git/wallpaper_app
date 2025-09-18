
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/home';
import AboutPage from '../screens/about';
import Profile from '../screens/profile';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home"  component={HomePage} />
      <Stack.Screen name="About" component={AboutPage} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStack;