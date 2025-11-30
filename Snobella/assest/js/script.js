document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"));


    let userBtn = document.querySelector(".profile2");
    let loginBtn = document.querySelector(".login");
    let registerBtn = document.querySelector(".register");
    let logoutBtn = document.querySelector(".logout");

    let isLoginUser = users.find((user) => user.isLogined == true);


    function UpdateStatus() {
        if (isLoginUser && isLoginUser.isLogined) {
            userBtn.textContent = isLoginUser.username;
            registerBtn.classList.add("d-none")
            loginBtn.classList.add("d-none")
            logoutBtn.classList.remove("d-none")
        } else {
            userBtn.textContent = "Profile";
            registerBtn.classList.remove("d-none")
            loginBtn.classList.remove("d-none")
            logoutBtn.classList.add("d-none")
        }
    }






    function Logout() {
        if (isLoginUser) {
            isLoginUser.isLogined = false;
            localStorage.setItem("users", JSON.stringify(users));
            UpdateStatus();
        }
    }
    logoutBtn.addEventListener("click", Logout)
    UpdateStatus();

})