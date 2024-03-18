import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Registration from "./pages/Registration/Registration";
import Shop from "./pages/Shop/Shop";
import Team from "./pages/Team/Team";
import Info from "./pages/Info/Info";
import Agenda from "./pages/Agenda/Agenda";
import History from "./pages/History/History";
import Partners from "./pages/Partners/Partners";

function App() {


  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TRIX24" element={<HomePage />} />
          <Route path="/trix24" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/team" element={<Team />} />
          <Route path="/info" element={<Info />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/history" element={<History />} />
          <Route path="/partners" element={<Partners />} />
      </Routes>
  );
}

export default App;
