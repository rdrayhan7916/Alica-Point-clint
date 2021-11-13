import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Admin from './Pages/Admin/Admin/Admin';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import More from './Pages/More/More';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/more'>
              <More></More>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <AdminRoute path='/admin'>
              <Admin></Admin>
            </AdminRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
