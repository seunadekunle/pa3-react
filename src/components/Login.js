import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState();

  return (
    <div className="Login">
      <form>
        <input type = "text" value={username} onChange={e => setUsername(e.target.value)} />
      </form>
    <footer class="text-center text-lg-start bg-light text-muted">
      <div class="text-center p-4">
        © 2022 Copyright: Seun Adekunle | Jalen Marshall
      </div>
    </footer>
    </div>
  );
}
