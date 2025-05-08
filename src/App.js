import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Button} from '@chakra-ui/react'
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import VideoCategoryPage from "./components/VideoCategoryPage";


function App() {
  return (
   
    <Router>
      <Header/>
             <Routes>
               <Route path="/"element={<Home/>} />
               <Route path="/videos"element={<Videos/>} />
               <Route path="/Upload"element={<Upload/>} />
               <Route path="/login"element={<Login/>} />
               <Route path="/signup"element={<SignUp/>} />
               <Route path="/videos/category=free" element={<VideoCategoryPage/>} />
               <Route/>
             </Routes>
             <Footer/>

  </Router>
   
   
  );
}

export default App;
