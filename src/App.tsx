import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Page404 } from "./pages/Page404"
import { Header } from "./components/Header"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/header" element={<Header />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  )
}

export default App
