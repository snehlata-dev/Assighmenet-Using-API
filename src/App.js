import { Provider } from "react-redux";
import "./App.css";
import Posts from "./Components/Posts";
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
