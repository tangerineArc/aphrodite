import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/auth-context.jsx";

import { signIn } from "../utils/authenticators.js";

export default function SignIn() {
  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await signIn({ username: event.target.username.value, password: event.target.password.value });

      setUser(data.user);
      navigate("/profile");
    } catch (error) {
      console.log("Failed to sign in");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
