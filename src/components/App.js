import Home from './pages/Home'; 
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Layout from './pages/Layout'; 
import ResLogin from './pages/Auth/ResLog';
import Resetmailpassword from "./pages/Auth/Resetmailpassword" ;
import Dashboard from './pages/Auth/Dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reslogin" element={<ResLogin />} />
          <Route path="reset" element={<Resetmailpassword />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Error 404 </h1>} />


      </Routes>
    </BrowserRouter>

    </>
  )

}

export default App;
