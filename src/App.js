import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#EEE2DC" }}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/media" component={About} />
          <Route exact path="/links" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
