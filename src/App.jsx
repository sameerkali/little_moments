import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Review from "./components/Review";
import Feature_cards from "./components/Feature_cards";
import Detail from "./pages/Details";
import NY from "./pages/NY";
import Moldives from "./pages/Moldives";
import Kashmir from "./pages/Kashmir";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/review" element={<Review />} />
          <Route path="/feature" element={<Feature_cards />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/ny" element={<NY />} />
          <Route path="/moldives" element={<Moldives />} />
          <Route path="/kashmir" element={<Kashmir />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
