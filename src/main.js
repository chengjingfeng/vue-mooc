import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from './store/index.js'

// element-ui
import {
  Icon,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Checkbox,
  MessageBox,
  Pagination,
  Dialog
} from 'element-ui'
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;

// register custom base component
import Mooc from './register.js'
Vue.use(Mooc)

import 'assets/stylus/index.styl'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
