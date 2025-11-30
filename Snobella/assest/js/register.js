document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let form = document.querySelector("form");

    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    form.addEventListener("submit", Register);

    function Register(e) {
        e.preventDefault()
        let exitUser = users.some(
            (user) => user.username == username.value || user.email == email.value
        );
        let id=uuidv4();
        if (!exitUser) {
            let newUser = {
                id,
                name: name.value,
                username: username.value,
                email: email.value,
                password: password.value,
                islogined: false,
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users))
            SweetToast("User register successfuly!")
            setTimeout(() => {
                window.location.href="login.html"
                
            }, 3000);
        }else{
            SweetToast("User already exists!")

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