import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import AllGames from './components/AllGames/AllGames';
import Platforms from './components/Platforms/Platforms';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';


function App() {
  const [userData, setUserData] = useState(null)
  function saveUserData() {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  
  }, [])
  
  let logout=()=>{
    localStorage.removeItem('token');
    setUserData(null);
    return <Navigate to='/login' />
  }
  function ProtectedRoute(props) {
    // if (localStorage.getItem("token")) {
      return props.children
      
    // } else {
    //   return <Navigate to="/login"/>
      
    // }
    
  }
  
  let routes = createBrowserRouter([
    {path:'/', element:<MainLayout userData={userData} logout={logout}/>  ,children: [
      {index:true, element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path:'/login', element: <Login saveUserData={saveUserData}/>},
      {path:'/register', element: <Register/>},
      {path:'/home', element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path:'/profile', element: <ProtectedRoute><Profile userData={userData}/></ProtectedRoute>},
      {path:'/details/:id', element: <ProtectedRoute><Details/></ProtectedRoute>},
      {path:'/all', element: <ProtectedRoute><AllGames/></ProtectedRoute>},    
      {path:'/platforms/:platform', element: <ProtectedRoute><Platforms/></ProtectedRoute>},
      {path:'/sort-by/:sort', element: <ProtectedRoute><Sort/></ProtectedRoute>},
      {path:'/categories/:category', element: <ProtectedRoute><Categories/></ProtectedRoute>},
      {path:'*', element: <NotFound/>},                
                
    ]}
  ])

  return(
    <RouterProvider router={routes}></RouterProvider>
  )   
}

export default App;
