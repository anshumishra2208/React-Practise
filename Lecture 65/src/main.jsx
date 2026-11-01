import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from './Context/ThemeContext.jsx';
// import { ContextProvider } from './Context/UserContext.jsx';
import { CartContext } from './Context/Cart.jsx';

// export const UserContext = createContext(null);
// let username = "anshu"
createRoot(document.getElementById('root')).render(

  // <UserContext value={username}>
  //   <App />
  // </UserContext>

  // <ThemeProvider>
  //   <App/>
  // </ThemeProvider>


// {/* <ContextProvider>
//   <App/>
// </ContextProvider> */}

<CartContext>
  <App/>
</CartContext>
)
