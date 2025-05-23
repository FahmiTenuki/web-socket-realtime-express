import{Route, Routes} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Register" element={<Register/>} />
    </Routes>
  )
}

export default Router
