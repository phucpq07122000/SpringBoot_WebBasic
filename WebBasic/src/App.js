import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main_Home from './Page/Main_Home';
import ListUser from './Page/LIstUser';
import Register from './Components/Register_Login/Register';
import Login from './Components/Register_Login/Login';
import Profile from './Components/Profile/Profile';
import axios from "axios";
import useFetchDataProducts from './API/porduct';
import Layout from './Components/Layout';






function App() {


  const client = axios.create({
    baseURL: "http://localhost:8080/"
  });

  const {data, loading} = useFetchDataProducts(``)


  return (
    <>

      <BrowserRouter>
        {/* <Navbar /> */}


        <Routes>

          <Route path='/' element={<Layout />}>
            <Route exact path="/" element={<Main_Home />} />
            <Route path="/main_Home" element={<Main_Home />} />
            <Route path="/listUser" element={<ListUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:userID" element={<Profile />} />



          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
