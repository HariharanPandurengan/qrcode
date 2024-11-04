import './App.css'
import UrlGen from './components/UrlGen'
import UrlUnmask from './components/UrlUnmask'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UrlGen></UrlGen>}></Route>
        <Route path="/unMask/:maskedUrl" element={<UrlUnmask></UrlUnmask>}></Route>
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App
