import * as React from 'react';

import BookmarkScreen from './screens/BookmarkScreen';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from './screens/SettingScreen';
import SupportScreen from './screens/SupportScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
				<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
				<Drawer.Screen name="Support" component={SupportScreen} />
				<Drawer.Screen name="Setting" component={SettingScreen} />
				<Drawer.Screen name="Bookmark" component={BookmarkScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;