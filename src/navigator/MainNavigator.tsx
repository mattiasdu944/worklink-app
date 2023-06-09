import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompanyScreen, ContactsScreen, HomeScreen, JobsScreen, ProfileScreen } from '../screens';

import { COLORS } from '../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HeaderLeft, HeaderRigth } from '../components';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {

    const { user } = useContext( AuthContext );
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:'white',
            }}
            screenOptions={({ route }) => ({
                // headerShown:false,
                headerLeft: () => (
                    <HeaderLeft/>
                ),
                headerRight: () => (
                    <HeaderRigth/>
                ),
                headerTitleStyle:{display:'none'},
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle:{
                    borderTopColor:'#fff',
                    borderWidth:0,
                    elevation:0,
                    borderRadius: 10
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
            <Tab.Screen options={{ title:'Contactos' }} name="ContactsScreen" component={ ContactsScreen }/>
            <Tab.Screen options={{ title:'Empleos' }} name="JobsScreen" component={ JobsScreen } />
            <Tab.Screen options={{ title:'Perfil' }} name="ProfileScreen" component={ 
                user?.role == 'student'
                ?(
                    ProfileScreen 
                ) 
                :(
                    CompanyScreen
                )
            } />
        </Tab.Navigator>
    );
}