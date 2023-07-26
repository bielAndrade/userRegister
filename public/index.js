document.addEventListener('DOMContentLoaded', () => {
    showUsers();
})

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const birthInput = document.getElementById("birth-input");

const render = async () => {
    // getUsers();
}

const showUsers = async () => {
    try {
        const data = await fetch("http://localhost:3030/api/all");
        const obj = await data.json();
        console.log(obj);

        let usersElements = '';

        obj.forEach(user => {
            let userElement = `<div class="users-obj" id=${user.id}>
                <span class="name-list">${user.name}</span>
                <span class="mail-list">${user.email}</span>
                <span class="phone-list">${user.phone}</span>
             </div>`

             usersElements += userElement;
        });

        document.querySelector('.users-list').innerHTML = usersElements;

    } catch (error) {
        console.log(error)
    }
}


const saveUser = async () => {
    try {

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const birthDay = birthInput.value;

        const user = {
            name,
            email,
            phone,
            birthDay
        }

        const options = {method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(user)
        }

        const data = await fetch("http://localhost:3030/api/new", options);
        const obj = await data.json();
        console.log(obj);
        
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("saveButton").addEventListener('click', saveUser);