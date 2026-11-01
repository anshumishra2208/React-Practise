import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx';

export const UserContext = createContext(null);
let username = "anshu"
createRoot(document.getElementById('root')).render(

  // <UserContext value={username}>
  //   <App />
  // </UserContext>

  <ThemeProvider>
    <App/>
  </ThemeProvider>
  

)
