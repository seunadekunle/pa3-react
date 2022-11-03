import "./Styles.css";
import { currUser } from "../state.js";

function Account() {
  return (
   <body>
        <form>
                <div class="form-wrapper">
                    <label for="floatingUser">Username</label>
                    <input
                      type="Username"
                      class="form-control"
                      id="floatingUser"
                      placeholder="Username: RockStar28"
                    />
                  </div>

                <div class="form-wrapper">
                    <label for="floatingEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="floatingEmail"
                      placeholder="Email: SupremeDreams@uky.edu"
                    />
                  </div>

                  <div class="form-wrapper">
                    <label for="floatingPhone">Phone</label>
                    <input
                      type="phone number"
                      class="form-control"
                      id="floatingPhone"
                      placeholder="Phone Number: 1974901704"
                    />
                  </div>
                  <button type="submit" class="form-wrapper">Update</button>
        </form>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
    </body>
  );
}

export default Account;
