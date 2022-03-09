import React from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo'

import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
);

export default App;
