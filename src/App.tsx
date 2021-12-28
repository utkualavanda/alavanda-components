import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Select, Input, Modal } from "../src/pages";

function App() {
  return (
    <Router>
      <aside>
        <ul>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
        </ul>
      </aside>
      <div className="page-content">
        <Routes>
          <Route path="/input" element={<Input />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
          <Route path="*" element={<Navigate to="/input" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
