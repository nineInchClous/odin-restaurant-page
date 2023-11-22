//#region Imports
import './style/styles.scss';
import {loadHeader, loadFooter} from './js/commonPageLoader';
import loadHomePage from './js/homePageLoader';

//#endregion

content = document.getElementById('content');
content.appendChild(loadHeader());
content.appendChild(loadHomePage());
content.appendChild(loadFooter());