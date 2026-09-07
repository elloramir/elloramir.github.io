import React from "react";
import ReactDOM from "react-dom";
import Profile from "./profile.jsx";
import Navigator from "./navigator.jsx";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Profile />
                <Navigator />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
