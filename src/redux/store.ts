import {createStore,combineReducers,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import cartItems from "./reducers/cartItem"

import { composeWithDevTools } from "redux-devtools-extension"


const reducers= combineReducers({
    cartItems: cartItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store