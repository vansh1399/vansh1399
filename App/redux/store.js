import { thunk } from "redux-thunk"
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const configurestore = () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return { store, persistor }
}