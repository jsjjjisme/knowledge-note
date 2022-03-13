import { createApp } from "vue"
import App from './App.vue'

//TODO: 提取按需引用ant组件
import {Button} from "ant-design-vue"

const app = createApp(App)
app.use(Button)
app.mount('#app')
