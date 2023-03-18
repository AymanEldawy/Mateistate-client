import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/Forms/CreateAccount/CreateAccount";
import TestEntry from "./Components/Forms/TestEntry/TestEntry";
import Accounts from "./Components/Tables/Accounts/Accounts";
import Chart from "./Pages/Chart/Chart";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
// import Routes from "./Routes";
function App() {
  return (
    // h-[95vh] overflow-y-auto overflow-x-hidden
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testentry" element={<TestEntry />} />
        <Route path="/list/:name" element={<List />} />
        <Route path="/chart/:name" element={<Chart />} />
        {/* <Route path="/tools/:name" element={<Tools />} /> */}
      </Routes>
      {/* <Routes /> */}
    </div>
  );
}

export default App;
