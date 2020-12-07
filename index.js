import {AppRegistry} from 'react-native';
import MainPage from './source/ui/MainPage'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainPage);
