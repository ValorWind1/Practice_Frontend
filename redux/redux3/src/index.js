import React from "react"
import ReactDom from "react-dom"
import MyApp from "./MyApp"

import {createStore} from "redux"
import reducer from "./store/reducer/reducer"
import {Provider} from "react-redux"

const store = createStore(reducer)


ReactDom.render(<Provider store={store}><MyApp /></Provider>, document.getElementById("root"))