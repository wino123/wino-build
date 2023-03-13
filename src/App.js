import React, { useEffect, useState } from "react";
import "./App.css";
import { WinoHeader } from "./components/header/header";
import { WinoFooter } from "./components/footer/footer";
import { WinoBanner } from "./components/play-zone/banner";
function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoader(true), 1000);
  }, []);
  return (
    <div className="App">
      {!loader && (
        <div id="js-preloader" class="js-preloader">
          <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      <WinoHeader />
      <WinoBanner />
      <WinoFooter />
    </div>
  );
}

export default App;
