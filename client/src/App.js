import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header";
import  { useContext, useEffect, useState } from 'react';
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import store from './store/UserStore';

function App() {

  const {store} = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  })
  return (
    <div>
      <Header />
    </div>
  );
}

export default observer(App);
