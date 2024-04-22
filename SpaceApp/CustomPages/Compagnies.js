import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostCompany from '../CustomComponents/CompanyLists';

export default function Compagnies() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PostCompany />
    </View>
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
