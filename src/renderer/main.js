import Vue from 'vue'

import App from './App'
import router from './router'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false


// -- LOAD APP INFO ---

const fs = require("fs");
const path = require('path');

// Read package.json file and parse it
const packageFile = path.join(__dirname, '/../../', 'package.json');
const packageFileJSON = JSON.parse(fs.readFileSync(packageFile, "utf8"));

// Read package.json file and parse it
const settingsFile = path.join(__dirname, '/../../', 'settings.json');
const settingsFileJSON = JSON.parse(fs.readFileSync(settingsFile, "utf8"));

// Load language
const selectedLang = settingsFileJSON.lang;
const langFile = path.join(__dirname, '/../locales/', selectedLang+'.json');
const langFileJSON = JSON.parse(fs.readFileSync(langFile, "utf8"));

// Store info into const variable
const globalStore =   {
    packageInfo: packageFileJSON,
    settings: settingsFileJSON,
    langText: langFileJSON
  }

// Make it global (acces it by $globals)
Vue.prototype.$globals = globalStore;


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
