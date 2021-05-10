import React from "react"
import ReactDom from "react-dom"
import MyApp from "./MyApp"

import reducer from "./reducer"
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"

const store = createStore(reducer,applyMiddleware(thunk))

ReactDom.render(<Provider store={store}><MyApp /></Provider>, document.getElementById("root"))