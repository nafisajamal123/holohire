import { useEffect, useState } from "react";
import Login from "./Login";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5002")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <Login />
    </div>
  );
}

export default App;
