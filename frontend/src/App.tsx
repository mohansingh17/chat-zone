import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch("http://localhost:4000");
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.log(err, "ERROR");
      }
    };
    checkBackend();
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>Response from backend: {message}</p>
    </div>
  );
}

export default App;
