import { Route, Routes } from 'react-router-dom';
import Home from './NetFlix/Home' 
import GetStarted from './NetFlix/GetStarted';
import SignIn from './NetFlix/SignIn';  
import SuccessSignUp from './NetFlix/SuccessSignUp';
import Successlogin from './NetFlix/Successlogin';

function App(){
  return (
    <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/password" element={<GetStarted />} />
            <Route path="/signup" element={<SuccessSignUp />} />
            <Route path="/login" element= {<Successlogin /> } />
           </Routes>
    
    </div>  
  )   
}

export default App;