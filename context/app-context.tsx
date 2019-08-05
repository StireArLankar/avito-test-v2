import { createContext } from 'react'

export interface IContext {
  products: string[]
  updateState: (state: object) => void
}

const AppContext = createContext<IContext>({
  products: [],
  updateState: () => null
})

export default AppContext
