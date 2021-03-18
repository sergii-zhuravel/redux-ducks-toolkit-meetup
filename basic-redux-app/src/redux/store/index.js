import {createStore} from "redux";
import {reducer} from "../reducers/todos";


export const store = createStore(reducer)