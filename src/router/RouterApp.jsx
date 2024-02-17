import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import DetailPage from "../pages/DetailPage"
import DynamicForm from '../components/DinamycForm'


const RouterApp = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:id" element={<DetailPage />}/>
        <Route path="/form" element={<DynamicForm />}/>
    </Routes>
  )
}

export default RouterApp