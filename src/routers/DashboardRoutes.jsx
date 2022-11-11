import { Route, Routes } from "react-router-dom"
import { TodosScreen } from "../pages/TodosScreen"
import { NavBar } from "../ui/NavBar"
import Buenisimo from "../pages/Buenisimo"
import Bueno from "../pages/Bueno"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/Buenisimo" element={<Buenisimo/>} />
          <Route path="/Bueno" element={<Bueno/>} />
          <Route path="/" element={<TodosScreen/>} />
        </Routes>
    </>
  )
}
