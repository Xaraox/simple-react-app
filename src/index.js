// import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom/client"
import Counter from "./components/Counter"
import './index.css'

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <h1> Hello this is a simple react App. </h1>
    <p> Here's a simple counter test me </p>
    <Counter/> 
  </>
)