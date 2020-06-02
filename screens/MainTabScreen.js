import * as React from 'react';

import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>

);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen}
            options={{
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />


    </HomeStack.Navigator>
);


const DetailStackScreen = ({ navigation }) => (
    <DetailStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DetailStack.Screen name="Details" component={DetailScreen}
            options={{
                title: 'Details',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor='#1f65ff'
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
        />
    </DetailStack.Navigator>
);