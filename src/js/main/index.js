import * as css from "../../css/style.css";
import * as scss from "../../css/default.scss";

window.addEventListener("load",()=>{
    const div=document.createElement("div");
    div.className=css.foo;
    div.textContent="_______foo";
    const child=document.createElement("div");
    child.className=scss.bar;
    child.textContent="bar";
    div.appendChild(child);
    document.body.appendChild(div);
});