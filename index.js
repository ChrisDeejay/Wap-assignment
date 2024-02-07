
  // Define the valid email and password
let validEmail = "akankwatsachristopher@gmail.com";
let validPassword = "22/u/722719@2024";

function validateCredentials(email, password) {
    
    // Check if the provided email and password are valid
    if (email === validEmail && password === validPassword) {

    // correct input message
     console.log(`User email is ${email}, login successfully🤝🤝✔✔`);

    } else {
 // wrong input error message
 console.log("❌❌❗❗Incorrect user inputs❗❗❌❌");
    }
}
validateCredentials('akankwatsachristopher@gmail.com', '22/u/722719@2024');
