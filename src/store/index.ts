import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export interface IWallet {
  _id: string
  balance: number
  transaction: IBalance[]
}

export interface IBalance {
  description: string
  category: string
  amount: string
  date?: Date | string
}

const initialState: IWallet = {
  _id: '',
  balance: 0,
  transaction: [],
}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
)

// export const createWallet = async (wallet: IWallet): Promise<void> => {
//   try {
//     await AsyncStorage.setItem('@wallet', JSON.stringify(wallet))
//   } catch (e) {
//     console.log(e)
//   }
// }

// export const storeData = async (item: IBalance): Promise<void> => {
//   try {
//     console.log(item)
//     await AsyncStorage.setItem('@balance', JSON.stringify([item]))
//   } catch (e) {
//     console.log(e)
//   }
// }

// export const readData = async (): Promise<IWallet> => {
//   const balances = await AsyncStorage.getItem('@balance')
//   return balances ? JSON.parse(balances) : {}
// }
