const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userForm = document.getElementById("userForm");
const getUserBtn = document.getElementById("getUsers");
const userList = document.getElementById("userList");

userForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const data = await fetch("http://localhost:3000/users", {
        method: "post",  
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: nameValue, email: emailValue}),
    })
    const dataJson = await data.json()
    console.log(dataJson)
    nameInput.value = "";
    emailInput.value = "";
})

getUserBtn.addEventListener("click", async() => {
    
    const data = await fetch("http://localhost:3000/users")
    const dataJson = await data.json();
    console.log(dataJson.users)
    dataJson.users.forEach(user => {
        const newRow = document.createElement("li");
        let user_name = user.name;
        let user_Email = user.email;
        newRow.innerText = user_name + " - " + user_Email;
        userList.appendChild(newRow);
    });
})