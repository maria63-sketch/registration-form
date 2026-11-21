import { Route, Routes } from "react-router";
import Form from "./pages/Form";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>} />
      </Routes>
    </div>
  )
}
