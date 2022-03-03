/** @format */

import { Provider } from "react-redux";
import Board from "./BoardComponent/index";
import { store } from "./Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}

export default App;
