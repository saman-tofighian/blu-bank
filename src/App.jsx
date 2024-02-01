import React from "react";
import Header from "./Components/Header/Header";
import Motto from "./Components/Motto/Motto";
import About from "./Components/About/About";
import Identification from "./Components/Identification/Identification";
import TransferMoney from "./Components/TransferMoney/TransferMoney";
import BluLine from "./Components/BluLine/BluLine";
import FQ from "./Components/F&Q/F&Q";
import Footer from "./Components/Footer/Footer";
import Customers from "./Components/Customers/Customers";
import GoToTop from "./Components/GoToTop/GoToTop";
import Cards from "./Components/Cards/Cards";
function App() {
  return (
    <>
      <Header />
      <Motto />
      <About />
      <Cards />
      <BluLine />
      <Identification />
      <TransferMoney />
      <FQ />
      <Customers />
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
