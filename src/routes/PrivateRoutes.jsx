import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

function PrivateRoutes() {
  const { signed } = useContext(AuthContext)
  return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes