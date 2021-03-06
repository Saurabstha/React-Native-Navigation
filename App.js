import { ActivityIndicator, View } from 'react-native';
import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './components/Context';
import BookmarkScreen from './screens/BookmarkScreen';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import SettingScreen from './screens/SettingScreen';
import SupportScreen from './screens/SupportScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App = () => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);


	// const[isLoading, setIsLoading] = React.useState(true);
	// const[userToken, setUserToken] = React.useState(true);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null
	};

	const CustomDefaultTheme = {
	    ...NavigationDefaultTheme,
	    ...PaperDefaultTheme,
	    colors: {
	      ...NavigationDefaultTheme.colors,
	      ...PaperDefaultTheme.colors,
	      background: '#ffffff',
	      text: '#333333'
	    }
	  }
  
  	const CustomDarkTheme = {
	    ...NavigationDarkTheme,
	    ...PaperDarkTheme,
	    colors: {
	      ...NavigationDarkTheme.colors,
	      ...PaperDarkTheme.colors,
	      background: '#333333',
	      text: '#ffffff'
	    }
	  }

	  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

	const loginReducer = (prevState, action) => {
		switch(action.type) {
			case 'RETRIVE_TOKEN':
				return {
					...prevState,
					userToken: action.token,
					isLoading:false
				};
			case 'LOGIN':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false
				};
			case 'LOGOUT':
				return {
					...prevState,
					userName: null,
					userToken: null,
					isLoading: false
				};
			case 'REGISTER':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false
				};
		}
	};

	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


	const authContext = React.useMemo(() => ({
		signIn: async (founduser) => {
			// setUserToken('adad');
			// setIsLoading(false);
			const userToken = String(founduser[0].userToken);
			const userName = founduser[0].username;
			try {
				await AsyncStorage.setItem('userToken', userToken)
			} catch(e) {
				console.log(e);
			}
			dispatch({ type: 'LOGIN', id: userName, token: userToken});
		},
		signOut: async () => {
			try {
				await AsyncStorage.removeItem('userToken');
			} catch(e) {
				console.log(e);
			}
			dispatch({ type: 'LOGOUT' });

			// setUserToken(null);
			// setIsLoading(false);
		},
		signUp: () => {
			// setUserToken('adad');
			// setIsLoading(false);
		},
		toggleTheme: () => {
      		setIsDarkTheme( isDarkTheme => !isDarkTheme );
    	}
	}), []);

	useEffect(() => {
		setTimeout(async () => {
			// setIsLoading(false);
			let userToken;
			userToken = null;
			try {
				userToken = await AsyncStorage.getItem('userToken')
			} catch(e) {
				console.log(e);
			}
			dispatch({type: 'RETRIVE_TOKEN', token: userToken});
		}, 1000)
	}, []);

	if(loginState.isLoading) {
		return(
			<View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<PaperProvider theme={theme}>
		<AuthContext.Provider value={authContext}>
		<NavigationContainer theme={theme}>
			{loginState.userToken !== null ? (
				<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
				<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
				<Drawer.Screen name="Support" component={SupportScreen} />
				<Drawer.Screen name="Setting" component={SettingScreen} />
				<Drawer.Screen name="Bookmark" component={BookmarkScreen} />
			</Drawer.Navigator>
			)
			:
			<RootStackScreen />
		}
		</NavigationContainer>
		</AuthContext.Provider>
		</PaperProvider>  
	);
}

export default App;