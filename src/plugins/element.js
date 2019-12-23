import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Alert } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
Vue.use(Alert)
Vue.prototype.$message = Message
Vue.prototype.$alert = Alert
