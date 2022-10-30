import { App } from 'vue'
import JlcLayoutFilterPageList from './layouts/filter-page-list'
import JlcFilter from './components/filter'
import JlcTable from './components/table'
import JlcPage from './components/page'
import JlcProTable from './components/pro-table'

export { 
  JlcLayoutFilterPageList, 
  JlcFilter, 
  JlcTable, 
  JlcPage, 
  JlcProTable 
}

const components = [
  JlcLayoutFilterPageList, 
  JlcFilter, 
  JlcTable, 
  JlcPage, 
  JlcProTable 
]

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}
