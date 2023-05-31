import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/components/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 60
  }
})