import React from "react";
import ReactDOM from "react-dom/client";

const number = 1000;

const Title = ()=>
    (<div>
    <h1 className="head" tabIndex="5"> Namaste React from title</h1>
    </div>);
   //normal functional component with
 const HeadingComponent = ()=>
    (<div id="container">
    {Title()}
    <h1 className="heading"> Namaste React functional component</h1>
    </div>);
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)//for single component

