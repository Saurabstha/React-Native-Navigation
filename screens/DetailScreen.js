import * as React from 'react';
import { View,
Text,
Button
  } from 'react-native';

function DetailScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title="Go to detail screen"
    	onPress={() => navigation.push("Details")}
     />
     <Button title="Go to home screen"
    	onPress={() => navigation.navigate("Home")}
     />
     <Button title="Go back"
    	onPress={() => navigation.goBack()}
     />
     <Button title="pop 1 xoti"
    	onPress={() => navigation.pop()}
     />
     <Button title="1st page"
    	onPress={() => navigation.popToTop()}
     />
    </View>
  );
}

export default DetailScreen;