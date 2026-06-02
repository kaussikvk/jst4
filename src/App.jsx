import { Routes, Route } from "react-router-dom";
import TaskThirteen from "./TaskThirteen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskThirteen />} />
    </Routes>
  );
}

export default App;
