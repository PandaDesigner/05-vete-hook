import React from 'react'
import ReactDOM from 'react-dom/client'
import { Memorize } from './components/06-memos'

//import { Layout } from './components/05-useLayaoutEffect'
//import { FocusScreen } from './components/04-useRef'
//import { MultipleCustomHook } from './components/03-example/'
/* import {SimpelFrom} from './components/02-useEffect/SimpelFrom' */
//import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook'
//import { SimpelFromCustomHook } from './components/02-useEffect/SimpelFromCustomHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Memorize/>
  
  //</React.StrictMode>
)
