import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from "./Signin";
import Welcome from "./Welcome";
import Viewbooks from "./Viewbooks";
import Addbook from "./Addbook";
import Viewbook from "./Viewbook";
import Updatebook from "./Updatebook";
import Addteammember from "./Addteammember";
import Viewteammembers from "./Viewteammembers";
import Viewteammember from "./Viewteammember";
import Updateteammember from "./Updateteammember";
import Vieworders from "./Vieworders";
import Addorder from "./Addorder";
import Updateorder from "./Updateorder";
import Viewcards from "./Viewcards";
import Viewcart from "./Viewcart";
import Pagenotfound from "./Pagenotfound";
import Sidebar1 from "./Sidebar1";
import Adminsignup from "./Adminsignup";
import Usersignup from "./Usersignup";

function App() {

  const userInfo = JSON.parse(localStorage.getItem('userinfo'));
  const signedIn = JSON.parse(localStorage.getItem('signedin'));

  return (
    <div>
      
      <Navbar2/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar1/><Welcome/></>}/>
          <Route path="/adminsignup" element={<><Navbar1/><Adminsignup/></>}/>
          <Route path="/usersignup" element={<><Navbar1/><Usersignup/></>}/>
          <Route path="/signin" element={!signedIn?<><Navbar1/><Signin/></>:userInfo.role==='admin'?<Navigate to = '/viewbooks'/>:null}/>
          
          <Route path="/viewbooks" element={<><Navbar1/><Sidebar1/><Viewbooks/></>}/>
          <Route path="/addbook" element={<><Navbar1/><Sidebar1/><Addbook/></>}/>
          <Route path="/updatebook/:id" element={<><Navbar1/><Sidebar1/><Updatebook/></>}/>
          <Route path="/viewbook/:id" element={<><Navbar1/><Sidebar1/><Viewbook/></>}/>

          <Route path="/viewteammembers" element={<><Navbar1/><Sidebar1/><Viewteammembers/></>}/>
          <Route path="/addteammember" element={<><Navbar1/><Sidebar1/><Addteammember/></>}/>
          <Route path="/viewteammember/:id" element={<><Navbar1/><Sidebar1/><Viewteammember/></>}/>
          <Route path="/updateteammember/:id" element={<><Navbar1/><Sidebar1/><Updateteammember/></>}/>
        
          <Route path="/vieworders" element={<><Navbar1/><Sidebar1/><Vieworders/></>}/>
          <Route path="/placeorder" element={<><Navbar1/><Sidebar1/><Addorder/></>}/>
          <Route path="/updateorder/:id" element={<><Navbar1/><Sidebar1/><Updateorder/></>}/>
          
          <Route path="/viewcards" element={<><Navbar1/><Viewcards/></>}/>
          <Route path="/cart" element={<><Navbar1/><Viewcart/></>}/>
          
          <Route path="*" element={<><Navbar1/><Pagenotfound/></>}/>
          
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
