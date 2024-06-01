import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../slice/product";
import { userSlice } from "../slice/user";
import { loginForm } from "../slice/login";
import { getAllCategoryMenus } from "../slice/productCategoty";
import overPlayMenuMainSlice from "../slice/main/overPlayMenu";
import menuContentMainSlice from "../slice/main/menuContentMain";
import logger from 'redux-logger'
import { thunk } from "redux-thunk";
const staticReducers = {
    // product: productSlice.reducer,
    loginForm:loginForm.reducer,
    user: userSlice.reducer,
    productCategoryMenus: getAllCategoryMenus.reducer,
    overPlayMenuMain: overPlayMenuMainSlice.reducer,
    menuContentMain: menuContentMainSlice.reducer,
}
// const createReducer = (asyncReducers) => combineReducers({
//     ...staticReducers,
//     ...asyncReducers
// });
export function createReducerManager(initialReducers) {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers }

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers)

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove = []

    return {
        getReducerMap: () => reducers,

        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state, action) => {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (let key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action)
        },

        // Adds a new reducer with the specified key
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers)
        },

        // Removes a reducer with the specified key
        remove: key => {
            if (!key || !reducers[key]) {
                return
            }

            // Remove it from the reducer mapping
            delete reducers[key]

            // Add the key to the list of keys to clean up
            keysToRemove.push(key)

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers)
        }
    }
}
console.log(createReducerManager(staticReducers).getReducerMap())
// export const store = configureStore({
//     reducer: {
//         product: productSlice.reducer,
//         user: userSlice.reducer,
//         loginForm: loginForm.reducer,
//         productCategoryMenus: getAllCategoryMenus.reducer,
//         overPlayMenuMain: overPlayMenuMainSlice.reducer,
//         menuContentMain: menuContentMainSlice.reducer,
//     },
//     middleware: () => new Tuple(...[thunk])
// })

export const store = configureStore({
    reducer: createReducer({}),
    middleware: () => new Tuple(...[thunk])
})

store.asyncReducers = {};

store.injectReducer = (key, asyncReducer) => {
    console.log(key)
    store.asyncReducers[key] = asyncReducer;
    // store.replaceReducer(createReducer(store.asyncReducers));
    store.replaceReducer(createReducerManager(store.asyncReducers).getReducerMap());
};
export default store;