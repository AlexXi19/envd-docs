import DefaultTheme from 'vitepress/theme'
import CustomTitle from '../components/CustomTitle.vue'
import "./custom.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomTitle', CustomTitle);
  },
}
