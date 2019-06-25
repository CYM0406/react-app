import { combineReducers } from "redux";
import list from "./home"
import xiangxi from "./xiangxi"
import gequ from "./gequ"
import geci from "./geci"
import searchsong from "./searchsong"
import find from "./find"
export const reducers = combineReducers({
    list,
    xiangxi,
    gequ,
    geci,
    searchsong,
    find
})