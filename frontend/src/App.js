import { Provider, useDispatch, useSelector } from "react-redux";
import Board from "./BoardComponent/index";
import { store } from "./Redux/store";
import SingleCard from "./Components/Card/SingleCard";
import AllRoutes from "./Routes/AllRoutes"


function App() {
  
  return (
    <div>
        {/* <Board /> */}
        <AllRoutes />
    </div>
  );
}

export default App;
