import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Home, Select, Input, Button, Modal } from "../src/pages";

function App() {
  return (
    <Router>
      <aside>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
        </ul>
      </aside>
      <div className="page-content">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/input" element={<Input />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
