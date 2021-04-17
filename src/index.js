import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import PostsComponent from "./Component/PostsComponent";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="app-header">Testing Redux Thunks with Axios</h1>
        <PostsComponent />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
