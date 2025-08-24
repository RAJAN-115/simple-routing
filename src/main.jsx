import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ErrorPage from './Errorpage';

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/', // Main route
    element: <App />, // Layout component
    errorElement: <ErrorPage />, // 404 page
    children: [
      // Child routes
      {
        index: true, // Default route for "/"
        element: <Home />, // Home component
      },
      {
        path: 'about', // "/about" route
        element: <About />, // About component
      },
      {
        path: 'contact', // "/contact" route
        element: <Contact />, // Contact component
      },
    ],
  },
]);

// App render करते हैं
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
