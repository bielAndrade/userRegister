const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const birthInput = document.getElementById("birth-input");


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

        console.log(JSON.stringify(birthDay));

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