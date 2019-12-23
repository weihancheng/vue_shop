import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Alert, Card } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.component(Message)
Vue.use(Alert)
Vue.use(Card)
Vue.prototype.$message = Message
Vue.prototype.$alert = Alert
