// Implementation of Infinite Scroll using DOM Scroll Event Listeners

import React, { useState, useEffect, useRef } from "react";
import ImageGrid from "./components/ImageGrid/";
import Loading from "./components/Loading/";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=15&orientation=portrait&client_id=${unsplashApiKey}`;
// const unsplashEndpoint = `http://127.0.0.1:8080/unsplash.json`;

function InfiniteScrollIntersectionObserverApp() {
  const [imageObjects, setImageObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [error, setError] = useState(null);
  const [targetElement, setTargetElement] = useState(null);
  const prevY = useRef(0); // storing the last intersection y position

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;

    if (prevY.current > y) {
      fetchImages();
    }

    prevY.current = y;
  };

  const observer = useRef(new IntersectionObserver(handleObserver, options));

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (targetElement) {
      observer.current.observe(targetElement);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetElement]);

  const fetchImages = () => {
    setIsLoading(true);
    fetch(unsplashEndpoint)
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setImageObjects((imageObjects) => [...imageObjects, ...data]);
        setIsFirstLoad(false);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(
          "Loading image from Unsplash failed. This is likely due to exceeding free API limit. Please clone the repo and try locally using your own API keys or come back in 60 minutes."
        );
        setError(e);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <u>Unsplash React</u>
        </div>
      </header>
      <div className="container">
        <>
          {error ? (
            <ErrorMessage />
          ) : (
            <>
              {isFirstLoad ? (
                <Loading />
              ) : (
                <>
                  {imageObjects.length ? (
                    <>
                      <ImageGrid imageObjects={imageObjects} />
                    </>
                  ) : null}
                </>
              )}

              <div
                className={"loading-new-images-container"}
                style={isLoading ? { display: "none" } : null}
                ref={setTargetElement}
              >
                <div className="loading-new-images">Loading New Images ...</div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

const ErrorMessage = () => (
  <div className={"error"}>
    <div className="error-title">API Error</div>
    Looks like there's an error fetching images from the Unsplash API. This is
    likely due to exceeding their free API limit. <br />
    Please{" "}
    <a href={"https://github.com/rajrajhans/react-infinite-scroll-demo"}>
      clone the repo
    </a>{" "}
    and try locally using your own API keys or come back in 60 minutes.
  </div>
);

export default InfiniteScrollIntersectionObserverApp;
