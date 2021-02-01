import "./App.css";
import About from "./components/about";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main"></div>
      </div>
    </div>
  );
}

export default App;
