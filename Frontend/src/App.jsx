import MainPage from "./Components/MainPage"
import SignaturePage from "./Components/SignaturePage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
     <Route path="/sign" element={<SignaturePage/>}/>
     </Routes>
    </Router>
    </> 
  )
}

export default App
