import { useEffect } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
      document.title = "Pokemon";
  }, []);
  
  return (
      <>
          <Pokemon />
          <Footer />
      </>
  );
}

export default App;
