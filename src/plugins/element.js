import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Alert,
  Card,
  Container,
  Header,
  Aside,
  Main
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.component(Message)
Vue.use(Alert)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.prototype.$message = Message
Vue.prototype.$alert = Alert
