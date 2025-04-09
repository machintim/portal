import { useEffect, useState } from "react";
import "./App.css";
import { getMe } from "./openapi";

function App() {
  const [helloMessage, setHelloMessage] = useState<string>("");
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  useEffect(() => {
    getMe()
      .then((res) => {
        if (res.response.status == 200 && res.data) {
          setHelloMessage(
            `Username: ${res.data.username}. Roles: ${res.data.roles.join(",")}`,
          );
          setIsAuthed(true);
        } else {
          console.log("error:", res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>ARC portal</h1>
      {!isAuthed && (
        <div>
          <button>
            <a href="/oauth2/start">Login</a>
          </button>
        </div>
      )}
      <div className="card">
        <p>
          GET /hello → <strong>{helloMessage}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
