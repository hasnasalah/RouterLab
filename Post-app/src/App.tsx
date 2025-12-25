import {Routes,Route} from "react-router-dom";
import NavBar from "./component/NavBar";
import AdminPage from "./pages/admin";
import { ProtectedRoute } from "./component/ProtectedRoute";
import BlogPage from "./pages/blog";
import LoginPage from "./pages/login";
import PostDetailPage from "./pages/post";
import './App.css';

function App() {


 return (
    <>
<NavBar/>
    <Routes>
      <Route path="/" element={<BlogPage/>}/> 
      <Route path="/posts" element={<BlogPage />} />
      <Route path="/admin" element={<ProtectedRoute > <AdminPage/></ProtectedRoute>}/> 
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/posts/:slug" element={<PostDetailPage/>}/>
    </Routes>
    </>
  )
}

export default App
