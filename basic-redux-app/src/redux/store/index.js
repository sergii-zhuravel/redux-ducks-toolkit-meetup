import { createStore } from "redux";
import reducer from "../ducks/todo";

export const store = createStore(reducer);
