import { Container} from 'react-bootstrap'
import { Routes,Route,Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu'
import Products from './components/menu/home/products'
import {AuthProvider} from './cp/AuthContext';


function App() {
  return ( 
    <AuthProvider>
   <Container>
    <Menu/>
    
    <Outlet/>
    {/**---------------------------Routes-------------- */}
    <Routes>
      <Route path='/' element={<Products/>} /> 
    </Routes>
    </Container>
    </AuthProvider>
  );
}

export default App;
