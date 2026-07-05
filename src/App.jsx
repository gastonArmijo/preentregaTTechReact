import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {CartView} from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';
import { Login } from "./components/Login/Login";


function App() {
  

  return (
    <>
    
      
        <Routes>
          {/*   rutas publicas */}
          <Route element={<PublicLayout/>}>
            <Route path= '/' element={<ItemListContainer />}/>
            <Route path= '/product/:id' element={<ItemDetailContainer /> }/>
            <Route path= '/carrito' element={<CartView /> }/>
            {/*filtra categorias */}
            <Route path= '/category/:category' element={<ItemListContainer/> }/>
            
          </Route>

          <Route path= '/admin/login' element={<Login /> }/>

          {/*admin */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>

            }
          >
            <Route index element={<Navigate to={"Dashboard"} /> }/>
            <Route path="Dashboard" element={<Dashboard /> }/>
            <Route path= 'products/new' element={<ProductFormContainer /> }/>
            <Route path= 'products/success/:id' element={<ProductSuccess /> }/>

          </Route>

          
        </Routes>
      
      
    </>
  )
}

export default App
