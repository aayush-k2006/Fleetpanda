export function toogleNavLinks() {
  const logoutNav = document.querySelector(".logout");
  const hideLogout = document.querySelector(".login-signup");

  if (localStorage.getItem("loginToken")) {
    logoutNav.style.display = "block";
    hideLogout.style.display = "none";
  } else {
    hideLogout.style.display = "block";
    logoutNav.style.display = "none";
  }
}

export function toggleLogout() {
  if (window.confirm("Do you really want to leave?")) {
    localStorage.clear();
    location.href = '/app/login.html'
  }
}
