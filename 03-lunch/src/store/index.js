import { createStore } from 'vuex'
import cafes from './modules/cafes'

export default createStore({

  modules: {
    cafes,
  }
})
