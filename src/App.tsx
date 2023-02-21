import React from 'react';
import './scss/App.scss';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FullProduct from "./pages/FullProduct";
import UserPanel from "./pages/UserPanel";

function App() {
  return (
   <Routes>
     <Route path='/' element={<MainLayout/>}>
       <Route path={''} element={<Home/>} ></Route>
       <Route path={'product/:id'} element={<FullProduct/>}></Route>
       <Route path={'user-panel/wishlist'} element={<UserPanel activePage={'wishlist'}/>}></Route>
         {/*добавить в список желаний переход сразу на нужную вкладку*/}
     </Route>
   </Routes>


  );
}

export default App;
