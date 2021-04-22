import React, { useState, useEffect } from "react";
import ImageGrid from "./components/ImageGrid/";
import Loading from "./components/Loading/";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
// const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=15&orientation=portrait&client_id=${unsplashApiKey}`;

// for testing locally (I used http-server to serve sample_api_response.json)
const unsplashEndpoint = `http://127.0.0.1:8080/unsplash.json`;

function App() {
  const [imageObjects, setImageObjects] = useState(null);

  useEffect(() => {
    fetch(unsplashEndpoint)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setImageObjects(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <u>Unsplash React</u>
        </div>
      </header>
      <div className="container">
        {imageObjects ? (
          <>
            <ImageGrid imageObjects={imageObjects} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
