import { data } from '../../../../http-server/src/data'

const { home, notFound } = data

export const mockAppState = {
  context: {},
  api: {},
  ui: {
    home,
    notFound,
  },
}
