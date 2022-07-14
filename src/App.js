import './App.css';

// Global Style
import GlobalStyle from "./components/GlobalStyle";

import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
        <GlobalStyle />
      <AboutUs />

    </div>
  );
}

export default App;
