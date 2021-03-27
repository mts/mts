import { Provider } from 'react-redux'
import { CoursesTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <CoursesTemplate />
    </Provider>
  )
}
