import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile186145Navigator from '../features/UserProfile186145/navigator';
import Settings186144Navigator from '../features/Settings186144/navigator';
import Settings186142Navigator from '../features/Settings186142/navigator';
import SignIn2186140Navigator from '../features/SignIn2186140/navigator';
import BlankScreen0186138Navigator from '../features/BlankScreen0186138/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile186145: { screen: UserProfile186145Navigator },
Settings186144: { screen: Settings186144Navigator },
Settings186142: { screen: Settings186142Navigator },
SignIn2186140: { screen: SignIn2186140Navigator },
BlankScreen0186138: { screen: BlankScreen0186138Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
