import { createStackNavigator } from '@react-navigation/stack';
import CustomBottomTabs from './CustomBottomTabs';
import ChatScreen from '../screens/chat';
import SettingsScreen from '../screens/settings';
import DetailsScreen from '../screens/details';
import NotificationsScreen from '../screens/notifications';
import HelpScreen from '../screens/help';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={CustomBottomTabs} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
