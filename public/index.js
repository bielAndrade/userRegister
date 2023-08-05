document.addEventListener('DOMContentLoaded', () => {
    showUsers();
})

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const birthInput = document.getElementById("birth-input");

let currentId = '';


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
                <div class="interactive-btns">
                    <span id=${user.id}><ion-icon onclick="deleteUser(${user.id})" class="delete-btn" name="trash-outline"></ion-icon></span>
                    <span id=${user.id}><ion-icon onclick="userToEdit(${user.id})" class="edit-btn" name="create-outline"></ion-icon></span> 
                </div>
             </div>`
             usersElements += userElement;
        });

        document.querySelector('.users-list').innerHTML = usersElements;

        emailInput.value = '';
        phoneInput.value = '';
        nameInput.value = '';
        birthInput.value = '';


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

        showUsers();
        
    } catch (error) {
        console.log(error);
    }
}


const deleteUser = async (id) => {
    try {
        const myId = id;

        const options = {
            method:"DELETE",
            headers: new Headers({'content-type': 'application/json'})
        }

        const data = await fetch(`http://localhost:3030/api/delete/${myId}`, options);
        showUsers();

    } catch (error) {
        console.log(error);
    }
}


const userToEdit = async (id) => {
    try {      
        const myId = id;

        const data = await fetch(`http://localhost:3030/api/user/${myId}`);
        const obj = await data.json();
            
        nameInput.value = obj.name;
        emailInput.value = obj.email;
        phoneInput.value = obj.phone;
        birthInput.value = obj.birthDay;

        currentId = myId;

    } catch (error) {
        console.log(error);
    }
}


const editUser = async () => {
    try {
        const myId = currentId;

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

        const options = {method:"PATCH",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(user)
        }

        const data = await fetch(`http://localhost:3030/api/edit/${myId}`, options);
        
        showUsers();
        
    } catch (error) {
        console.log(error);
    }
}

document.querySelector(".edit-button").addEventListener('click', editUser);
document.querySelector(".save-button").addEventListener('click', saveUser);
