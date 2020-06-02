import * as React from 'react';

import MainTabScreen from './screens/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



function App() {
	return (
		<NavigationContainer>

			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={MainTabScreen} />
				{/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
			</Drawer.Navigator>


		</NavigationContainer>
	);
}

export default App;