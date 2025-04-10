import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

function Login() {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        alert(`Welcome, ${res.user.displayName}`);
        // Save user info to localStorage or context later
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login to HoloHire</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
