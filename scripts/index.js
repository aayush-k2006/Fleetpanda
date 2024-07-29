import { toogleNavLinks } from "./toggle.js";
import { toggleLogout } from "./toggle.js";
toogleNavLinks();

const logOutBtn = document.querySelector(".logout");
logOutBtn.addEventListener("click", toggleLogout);
