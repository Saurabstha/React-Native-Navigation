import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import {
Button,
Text,
View,
StyleSheet,
StatusBar
} from 'react-native';

const HomeScreen =({navigation}) => {

	const { colors } = useTheme();

	const theme = useTheme()

  return (
    <View style={styles.container}>
    <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
	<Text style={{color: colors.text}}>Home Screen</Text>
  	<Button title="Go to detail screen"
    	onPress={() => navigation.navigate("Details")}
     />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});


