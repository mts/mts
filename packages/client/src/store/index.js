import { createStore } from 'redux'
import { Store } from '../bootstrap/store'
import { getDefaultState } from './state/default'
import { getAppReducer } from './reducer'

class AppStore extends Store {
  static appStore

  constructor() {
    super()

    this.setAppDefaultState()
    this.setAppStore()
    this.setHotModuleReloading()
  }

  setAppDefaultState() {
    this.appState = getDefaultState()
  }

  setAppStore() {
    this.appReducer = getAppReducer()
    this.appStore = this.appStore || createStore(this.appReducer, this.appState, this.enhancer)
  }

  /* istanbul ignore next */
  setHotModuleReloading() {
    if (module.hot) {
      module.hot.accept(['./reducer'], () => {
        const nextAppReducer = this.appReducer.default
        this.appStore.replaceReducer(nextAppReducer)
      })
    }
  }
}

export { AppStore }
export const { appStore } = new AppStore()
