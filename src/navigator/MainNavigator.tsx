import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactsScreen, HomeScreen, JobsScreen, ProfileScreen } from '../screens';

import { COLORS } from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:'white',
            }}
            screenOptions={({ route }) => ({
                headerShown:false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle:{
                    borderTopColor:'#fff',
                    borderWidth:0,
                    elevation:0
                },
                tabBarLabelStyle:{
                    fontSize:12
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;
                    switch( route.name ){
                        case 'HomeScreen':
                            iconName = 'home-outline'
                        break;
                        case 'ContactsScreen':
                            iconName = 'people-outline'
                        break;
                        case 'JobsScreen':
                            iconName = 'file-tray-full-outline'
                        break;
                        case 'ProfileScreen':
                            iconName = 'person-outline'
                        break;
                    }
                    return <Ionicons
                        name={iconName}
                        color={color}
                        size={size* .8}
                    />
                },
            })}
        >
            <Tab.Screen options={{ title:'Inicio' }} name="HomeScreen" component={ HomeScreen } />
            <Tab.Screen options={{ title:'Contactos' }} name="ContactsScreen" component={ ContactsScreen } />
            <Tab.Screen options={{ title:'Empleos' }} name="JobsScreen" component={ JobsScreen } />
            <Tab.Screen options={{ title:'Perfil' }} name="ProfileScreen" component={ ProfileScreen } />
        </Tab.Navigator>
    );
}