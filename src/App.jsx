import Header from "./components/Header";
// import Body from "./components/Body";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div className="app">
    <Header/>
    {/* <h1>search from app.js</h1> */}
    {/* <Body/> */}
    <Outlet/>
  </div>
  )
}

export default App
