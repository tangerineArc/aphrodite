import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/auth-context.jsx";

import { signUp } from "../utils/authenticators.js";

export default function SignUp() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const data = await signUp({
        username: event.target.username.value,
        password: event.target.password.value,
      });

      setUser(data.user);
      navigate("/profile");
    } catch (error) {
      console.log("Failed to sign up");
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
