import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PropertyPage from './components/PropertyPage.jsx';
import CreateProperty from './components/CreateProperty.jsx';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/property/:id",
    element:<PropertyPage />

  },
  {
    path:"/create_property",
    element:<CreateProperty />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
  <App />
  </RouterProvider>

)