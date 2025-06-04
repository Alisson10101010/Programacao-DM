import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen';
import ProdutoScreen from './src/screens/ProdutoScreen';
import CrudCelularesScreen from './src/screens/CrudCelularesScreen';
import FormCelularScreen from './src/screens/FormCelularScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LojaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={HomeScreen} />
      <Stack.Screen name="Produtos" component={ListaProdutosScreen} />
      <Stack.Screen name="Produto" component={ProdutoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Loja" component={LojaStack} />
          <Tab.Screen name="Celulares" component={CrudCelularesScreen} />
          <Tab.Screen
            name="FormCelular"
            component={FormCelularScreen}
            options={{ tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
