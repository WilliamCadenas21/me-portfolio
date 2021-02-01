import "./App.css";

import Introduction from "./components/introduction";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Timeline from "./components/timeline";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
}

export default App;
