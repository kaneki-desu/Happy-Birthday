
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import {  DisplayProvider, SwitchProvider } from './hooks/ContextApi/states'
import Dashboard from './pages/dashboard'
function App() {
  
  return (
    <>
    <DisplayProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Homepage/>} />
              <Route path={"/Dashboard"} element={<Dashboard/>} />
            </Routes>
          </BrowserRouter>
    </DisplayProvider>
      </>
  )
}

export default App
