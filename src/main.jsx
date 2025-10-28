import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useLocation } from 'react-router-dom';
import App from './App.jsx'


const navEntries = performance.getEntriesByType("navigation");
if (
  window.location.pathname === "/history" &&
  navEntries.length > 0 &&
  navEntries[0].type === "reload"
) {
  window.location.replace("/");
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
