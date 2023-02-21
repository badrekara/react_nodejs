import { Container} from 'react-bootstrap'
import { Routes,Route,Outlet } from 'react-router-dom';
import Menu from './components/menu/Menu'
import Products from './components/menu/home/products'

function App() {
  return ( <Container>
    <Menu/>
    
    <Outlet/>
    {/**---------------------------Routes-------------- */}
    <Routes>
      <Route path='/' element={<Products/>} /> 
    </Routes>
    </Container>
    
  );
}

export default App;
