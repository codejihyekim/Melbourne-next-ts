import { combineReducers, Reducer, AnyAction } from "redux";
import { RootStateInterface } from "../../interfaces/RootState";
import counter from "./counter";

const rootReducer: Reducer<RootStateInterface, AnyAction> = 
combineReducers<RootStateInterface>({
	counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;