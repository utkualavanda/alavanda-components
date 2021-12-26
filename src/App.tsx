import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { Select, Input } from "../src/pages";

function App() {
  return (
    <Router>
      <aside>
        <ul>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
        </ul>
      </aside>
      <div className="page-content">
        <Routes>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/input" element={<Input />}></Route>
          <Route path="*" element={<Navigate to="/select" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
