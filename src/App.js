import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './layout/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <Header></Header>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
