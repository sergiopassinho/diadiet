import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// export default function App() {
//   return (
//     <View>
//         <HomeScreen />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Receita" />
        <Stack.Screen name="Detalhes" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
