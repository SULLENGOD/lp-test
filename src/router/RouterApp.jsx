import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DetailPage from "../pages/DetailPage"


const RouterApp = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:id" element={<DetailPage />}/>
    </Routes>
  )
}

export default RouterApp