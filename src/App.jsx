import { Route, Routes } from "react-router-dom";
import Content from "./body.jsx";
import Head from "./head.jsx";
import Extra from "./extra.jsx";
import Footer from "./footer.jsx";
import Wind from "./About.jsx";
import Call from "./Contact.jsx";
import Canvax from "./assets/canvax.png";

function App() {
  return (
    <div className="bg-black ">
      <Head />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/" element={<Canvax />} />
        <Route path="/about" element={<Wind />} />
        <Route path="/contact" element={<Call />} />
        <Route path="/infrastructure" element={<Extra />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
