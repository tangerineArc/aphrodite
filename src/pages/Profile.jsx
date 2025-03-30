import { useAuth } from "../contexts/auth-context.jsx";

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
