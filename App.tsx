import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './src/navigator';
import { MainNavigator } from './src/navigator/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context';

const Stack = createStackNavigator();


export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='AuthNavigator'
                    screenOptions={{
                        headerShown:false,
                        // headerTitleAlign:'center',
                        headerStyle:{
                            elevation:0,
                        },
                        cardStyle:{
                            backgroundColor:'white',
                        }
                    }}
                >
                    <Stack.Screen name="AuthNavigator"  component={ AuthNavigator } />
                    <Stack.Screen name="MainNavigator"  component={ MainNavigator } />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}

