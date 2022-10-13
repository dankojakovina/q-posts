import Vue from 'vue';
import vueService from '@/services/vueService';
import theme from '@/theme';

const configuration = Vue.observable({
	version: '',
	selectedLanguage: 'en',
	navigationBarColor: '#00CAE3',
	isPageLoading: false,
	isDarkMode: false
});

function changeLanguage(lang) {
	configuration.selectedLanguage = lang;
	vueService.i18n.locale = lang;
	localStorage.setItem('lang', configuration.selectedLanguage);
}

function changeMode() {
	configuration.isDarkMode = !configuration.isDarkMode;
	theme.changeTheme(configuration.isDarkMode);
	localStorage.setItem('isDarkMode', configuration.isDarkMode);
}

function init() {
	const version = localStorage.getItem('version');
	const selectedLanguage = localStorage.getItem('lang');
	const isDarkMode = localStorage.getItem('isDarkMode');
	configuration.version = version ? JSON.parse(version) : '1.0.0';
	configuration.isDarkMode = isDarkMode ? JSON.parse(isDarkMode) : false;
	selectedLanguage ? changeLanguage(selectedLanguage) : changeLanguage('en');	
	theme.changeTheme(configuration.isDarkMode);
}



export default { configuration, changeLanguage, changeMode, init };
