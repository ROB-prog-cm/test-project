import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderPage from "../HeaderPage";
import DetailsPage from "../DetailsPage";


function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HeaderPage/>}/>
          <Route exact path=":detailsPageId" element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;