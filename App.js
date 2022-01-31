import *  as React from 'react';
import HomeScreen from './screens/Home.js'
import RecommendationScreen from './screens/Recommendation'
import PopularScreen from './screens/Popular'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator }  from 'react-navigation-tabs'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default class App extends React.Component {
  render(){
    return (
      
        <SafeAreaProvider >
        <AppContainer />
        </SafeAreaProvider> 
      
    );
  }
}

const AppTopNavigation = createBottomTabNavigator({
  RecommendedMovies: {
    screen : RecommendationScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },
  PopularMovies: {
    screen : PopularScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#fff" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  }
})

const AppStackNav = createStackNavigator({
  Home: {
    screen : HomeScreen,
    navigationOptions: {headerShown: false}
  },
  AppTopnav : {
    screen: AppTopNavigation,    
  }
},
{
  initialRouteName : "Home"
}
)

const AppContainer = createAppContainer(AppTopNavigation)