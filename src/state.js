export const users = [
 {
    username:"test",
    email: "test@example.com",
    password: "123",
    telephone: "23234"
 }
];

function signInUser(username, password) {
    let searchedUser = users.find(user => user.username === username && user.password === password);
    currUser = searchedUser;
}

function update(username, email, phone) {
    let searchedUser = users.find(user => user.username);
    searchedUser.email = email
    searchedUser.telephone = phone

    currUser = searchedUser;
}

function signUpUser(username, password, email, phone){
    let user = {
        username: username,
        email: email,
        password: password,
        telephone: phone
    }

    users.unshift(user);
    currUser = user;
}

export let currUser = users[0]