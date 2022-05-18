import { Routes, Route } from "react-router-dom"
import Footer from "./components/footer";
import Home from "./pages/home";
import "./css/style.css"
import Header from "./components/header";

function App() {
  return (
    <div className="App">
        < Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/argent-bank-app" element={<Home />}/>
            {/* <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/sport-see/user/:id" element={<Dashboard />} />
            <Route path="/*" element={<Error />}/>
            <Route path="sport-see/*" element={<Error />}/>
            <Route path="/user/*" element={<Error />}/>
            <Route path="/sport-see/user/*" element={<Error />}/> */}
          </Routes>
          < Footer />

      </div>
  );
}

export default App;
