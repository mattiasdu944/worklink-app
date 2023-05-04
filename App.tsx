import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './src/navigator';

export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    );
}

