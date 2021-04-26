import React from "react";
import ReactDom from "react-dom"
import MyApp from "./MyApp"

import {Provider} from "react-redux"
import reducer from "./reducer"
import {createStore , applyMiddleware} from "redux"
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk))

ReactDom.render(<Provider store = {store}> <MyApp></MyApp></Provider> , document.getElementById("root"))