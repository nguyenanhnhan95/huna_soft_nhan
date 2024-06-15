import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../src/pages/home/Home"
import OAuth2RedirectHandle from "./components/oauth2/OAuth2RedirectHandler";
import { Suspense, lazy} from "react";
import BackdropLoading from "./utils/BackdropLoading";
import store from "./store/store";
import { actionReducerStore, reducerSliceKey } from "./constants/reducerSlice";
import { userSlice } from "./slice/user";
import { getAllCategoryMenus } from "./slice/product/productCategoty";
import { loginForm } from "./slice/login/login";
import menuContentMainSlice from "./slice/main/menuContentMain";
import overPlayMenuMainSlice from "./slice/main/overPlayMenu";
import { actionAdminSlice } from "./slice/main/actionAdmin";
import LoadingWrapper from "./components/wrapper/LoadingWrapper";
const Home = lazy(() => import('./pages/home/Home').then((module) => {
  store.injectReducer(actionReducerStore.clear, '', '')
  store.injectReducer(actionReducerStore.add, reducerSliceKey.productCategoryMenus, getAllCategoryMenus.reducer)
  store.injectReducer(actionReducerStore.add, reducerSliceKey.user, userSlice.reducer)
  return module;
}))
const Login = lazy(() => import('./pages/login/Login').then((module) => {
  store.injectReducer(actionReducerStore.clear, '', '')
  store.injectReducer(actionReducerStore.add, reducerSliceKey.loginForm, loginForm.reducer)
  return module;
}))
const Admin = lazy(() => import('./pages/admin/Admin').then((module) => {
  store.injectReducer(actionReducerStore.clear, '')
  store.injectReducer(actionReducerStore.add, reducerSliceKey.menuContentMain, menuContentMainSlice.reducer)
  store.injectReducer(actionReducerStore.add, reducerSliceKey.overPlayMenuMain, overPlayMenuMainSlice.reducer)
  store.injectReducer(actionReducerStore.add, reducerSliceKey.actionAdmin, actionAdminSlice.reducer)
  return module;
}))
function App() {
  return (
    <LoadingWrapper>
      <BrowserRouter>
        <Suspense fallback={<BackdropLoading />} >
          <Routes>
            <Route path={`/home`} element={<Home />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandle />} />
            <Route path={'/admin/*'} element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LoadingWrapper>
  );
}

export default App;
