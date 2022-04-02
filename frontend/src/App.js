import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/store";
import SingleCard from "./Components/Card/SingleCard";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      <AllRoutes />
    </div>
  );
}

export default App;
