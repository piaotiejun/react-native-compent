import { AppRegistry } from 'react-native';

import HelloWorldApp from './Main/HelloWorld';
import MyActivityIndicator from './Main/MyActivityIndicator';
import GaodeMapTest from './Main/GaodeMapTest';
import GaodeMapTest1 from './Main/GaodeExample/index';
import ImagePickerTest from './Main/ImagePickerTest';
import ToastTest from './Main/ToastTest';
import SplashScreenTest from './Main/SplashScreenTest';
import tcombTest from './Main/tcombTest';
import FormTest from './Main/FormTest/app';
import TextInputLayoutDemo from './Main/TextInputTest/TextinputlayoutTest';
import TextInputEffectsExample from './Main/TextInputTest/TextInputEffectsExample';
import styleTest from './Main/styleTest/index';

import SplashScreen from 'react-native-splash-screen';


AppRegistry.registerComponent(
	'reactNativeCompent', 
	() => {
		SplashScreen.hide();
		return styleTest;
	}
);
