import { createContext } from 'react'

export interface IContext {
  name: string
  updateState: (state: object) => void
}

const AppContext = createContext<IContext>({
  name: 'string',
  updateState: () => null
})

export default AppContext
