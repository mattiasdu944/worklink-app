import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './src/navigator';
import { MainNavigator } from './src/navigator/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/auth/AuthProvider';
import { VacantProvider } from './src/context/vacants/VacantProvider';

const Stack = createStackNavigator();


export default function App() {
    return (
        <AuthProvider>
            <VacantProvider>
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
                    </Stack.Navigator>
                </NavigationContainer>
            </VacantProvider>
        </AuthProvider>
    );
}

