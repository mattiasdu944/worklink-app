import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainNavigator } from './MainNavigator';
import { JobScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MainNavigator"  component={ MainNavigator } />
            <Drawer.Screen name="JobScreen"  component={ JobScreen } />
        </Drawer.Navigator>
    );
}