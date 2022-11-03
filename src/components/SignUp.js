import "./Styles.css";

export default function SignUp() {
  return (
   import "./Styles.css";

export default function SignUp() {
  return (
    <body>
    <div class="form-wrapper-signup">
      <form class="needs-validation">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput2"
            placeholder="username"
            required
          />
          <label for="floatingInput2">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label for="floatingInput">Email Address</label>
        </div>
        <div class="form-floating">
          <input
            id="floatingPassword"
            type="password"
            class="form-control"
            placeholder="Password"
            name="passInput"
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating input-field">
          <input
            id="floatingPassword2"
            type="password"
            class="form-control"
            placeholder="Password"
            name="passInputConfirm"
          />
          <label for="floatingPassword2">Confirm Password</label>
        </div>
        <div class="form-floating input-field">
          <input
            type="tel"
            class="form-control"
            id="floatingTel"
            placeholder="Phone Number"
            required
          />
          <label for="floatingTel">Telephone</label>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </body>
  );
}
