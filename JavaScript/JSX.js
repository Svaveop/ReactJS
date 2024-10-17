//No JSX
ReactDOM.render(React.createElement('input', {
    placeholder: "Help text",
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse Over"),
}), document.getElementById("app"))

//With JSX
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")
const elements = <input placeholder = "Help text" onClick = {inputClick} onMouseEnter = {mouseOver} />
const app = document.getElementById("app")
ReactDOM.render(elements, app)
