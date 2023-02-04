import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Projects/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
