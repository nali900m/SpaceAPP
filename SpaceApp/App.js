import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Compagnies from './CustomPages/Compagnies';
import Accueil from './CustomPages/Accueil';
import Fusées from './CustomPages/Fusées';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil}
           options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Compagnies" component={Compagnies} 
        
        />
        <Tab.Screen name="Fusées" component={Fusées} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
