export let currUser = {
  username: "test",
  email: "test@example.com",
  password: "123",
  telephone: "23234",
};

export let showStatus = false;

export function signInUser(username, password) {
  // if the typed in username doesn't work
  let searchedUserJSON = localStorage.getItem(username);
  if (searchedUserJSON == null) {
    return -1;
  }

  // if the typed in password doesn't work
  let tempUser = JSON.parse(searchedUserJSON);
  if (password !== tempUser.password) {
    return -1;
  }

  currUser = tempUser;
  showStatus = true;
  return 1;
}

export function updateUser(username, email, phone) {
  if (username !== currUser.username && localStorage.getItem(username) != null) {
    return -1;
  }

  if (username === currUser.username) {
    currUser.email = email;
    currUser.telephone = phone;

    localStorage.setItem(currUser.username, JSON.stringify(currUser));
    return 1;
  } else {
    console.log("in2");
    let tempPass = currUser.password;

    localStorage.removeItem(currUser.username);
    return signUpUser(username, tempPass, username, phone);
  }
}

export function signUpUser(username, password, email, phone) {
  if (localStorage.getItem(username) != null) {
    return -1;
  }

  let user = {
    username: username,
    email: email,
    password: password,
    telephone: phone,
  };

  currUser = user;
  localStorage.setItem(username, JSON.stringify(user));
  return 1;
}
