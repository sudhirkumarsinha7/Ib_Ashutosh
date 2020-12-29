/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './source/component/login';
import {name as appName} from './app.json';
import LogIn from './source/component/login';

AppRegistry.registerComponent(appName, () => LogIn);
