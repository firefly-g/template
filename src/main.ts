import { createApp ,defineAsyncComponent} from 'vue'
import { store } from '@/pinia/index'
import App from './App.vue'
import router from '@/router/index'
import '@/style/main.scss'
import '@/style/transition.scss';
import 'virtual:svg-icons-register'
import * as ElementPlusIcons from '@element-plus/icons-vue'
import '@/utils/routerInterdict'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/mock/index'
Nprogress.configure({ showSpinner: false, ease: 'ease', speed: 500 })
Nprogress.start()

const SvgIcon = defineAsyncComponent(() => import('./components/SvgIcon/index.vue'))
const app = createApp(App)
// 全局挂载和注册 element-plus 的所有 icon
for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.component(`ele-${key}`, component)
}
app.use(store)
app.use(router)

app.mount('#app')

app.component('SvgIcon', SvgIcon)


