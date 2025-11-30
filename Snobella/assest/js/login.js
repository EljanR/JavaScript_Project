    document.addEventListener("DOMContentLoaded", () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let form = document.querySelector("form");
        let username = document.querySelector("#username");
        let password = document.querySelector("#password");

        form.addEventListener("submit", Login);

        function Login(e) {
            e.preventDefault();

            let existUser = users.find(
                (user) =>
                (user.username == username.value && user.password == password.value)
            );

            if (existUser) {
                existUser.isLogined = true;
                localStorage.setItem("users", JSON.stringify(users));
                SweetToast("Login successfully!");

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 3000);
            } else {
                SweetToast("Username or password wrong!");
            }
        }
    });

    function SweetToast(text){
        Toastify({
            text:`${text}`,
            duration: 3000,
            close:true,
            position:"right",
            style:{
                background:"linear-gradient(to right,#00b09b,#6A9E1BFF)"
            },


        }).showToast();

    }