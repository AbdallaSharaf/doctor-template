import { createRoot } from 'react-dom/client'
import {HashRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </HashRouter>
  </>,
)
