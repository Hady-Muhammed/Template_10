import React from "react";
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Analytics from './components/Analytics.jsx'
import Newsletter from "./components/Newsletter.jsx";
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Analytics/>
      <Newsletter/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
