export const users = [
 {
    username:"test",
    email: "test@example.com",
    password: "123",
    telephone: "23234"
 }
];

export function signInUser(username, password) {
    console.log(password)
    let searchedUser = users.find(user => user.username === username && user.password === password);

    if (searchedUser === undefined) {
        return -1;
    }

    currUser = searchedUser;
    return 1;
}

export function update(username, email, phone) {
    let searchedUser = users.find(user => user.username === username);
    searchedUser.email = email
    searchedUser.telephone = phone

    currUser = searchedUser;
}

export function signUpUser(username, password, email, phone){
    let user = {
        username: username,
        email: email,
        password: password,
        telephone: phone
    }

    users.unshift(user);
    console.log(users);
    currUser = user;
}

export let currUser = users[0]