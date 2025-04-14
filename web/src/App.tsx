import { useEffect, useState } from "react";
import "./App.css";
import { getHello } from "./openapi";

function App() {
  const [helloMessage, setHelloMessage] = useState<string>("");
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  useEffect(() => {
    getHello()
      .then((res) => {
        if (res.response.status == 200 && res.data) {
          setHelloMessage(res.data.message);
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
      <h1 id="portal-title">ARC portal</h1>

      <main aria-label="ARC portal main content">
        {!isAuthed && (
          <div>
            <a href="/oauth2/start" className="button">
              Login
            </a>
          </div>
        )}
        <div className="card">
          <p>
            GET /hello → <strong>{helloMessage}</strong>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
