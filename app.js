const heading = React.createElement("h1",{id:"heading"},"hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent = React.createElement("div",{
    id:"child"
},[
    React.createElement("div", {id:"h1"}, "I am h1"), React.createElement("div", {id:"h2"}, "I am h2")
]);
root.render(parent);

