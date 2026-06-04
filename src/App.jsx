import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import TaskFour from "./TaskFour";
import TaskSix from "./TaskSix";
import TaskSeven from "./TaskSeven";
import TaskThirteen from "./TaskThirteen";
import TaskFourteen from "./TaskFourteen";
import TaskFifteen from "./TaskFifteen";

function App() {
  return (
      <div>
        <nav className="navbar">
          <Link to="/task4">Task4</Link>


          <Link to="/task6">Task6</Link>

          <Link to="/task7">Task7</Link>

          <Link to="/task13">Task13</Link>

          <Link to="/task14">Task14</Link>

          <Link to="/task15">Task15</Link>
        </nav>

        <Routes>
          <Route
            path="/task4"
            element={<TaskFour />}
          />

        

          <Route
            path="/task6"
            element={<TaskSix />}
          />

          <Route
            path="/task7"
            element={<TaskSeven />}
          />

          <Route
            path="/task13"
            element={<TaskThirteen />}
          />

          <Route
            path="/task14"
            element={<TaskFourteen />}
          />

          <Route
            path="/task15"
            element={<TaskFifteen />}
          />
        </Routes>
      </div>
  
  );
}

export default App;