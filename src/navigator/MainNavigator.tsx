import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ContactsScreen, HomeScreen, JobsScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={ HomeScreen } />
            <Tab.Screen name="ContactsScreen" component={ ContactsScreen } />
            <Tab.Screen name="JobsScreen" component={ JobsScreen } />
            <Tab.Screen name="ProfileScreen" component={ ProfileScreen } />
        </Tab.Navigator>
    );
}