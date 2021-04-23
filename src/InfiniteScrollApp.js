import React, { useState, useEffect } from "react";
import ImageGrid from "./components/ImageGrid/";
import Loading from "./components/Loading/";
import Button from "./components/Button";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
// const unsplashEndpoint = `https://api.unsplash.com/photos/random?count=15&orientation=portrait&client_id=${unsplashApiKey}`;
const unsplashEndpoint = `http://127.0.0.1:8080/unsplash.json`;

function InfiniteScrollApp() {
  const [imageObjects, setImageObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.offsetHeight
    ) {
      console.log("req triggered");
      fetchImages();
    }
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
              {isLoading && (
                <div className={"loading-new-images-container"}>
                  <div className="loading-new-images">
                    Loading New Images ...
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
}

// used for pagination
// eslint-disable-next-line
const PaginationBar = ({
  handlePrevPageCall,
  currentPage,
  handleNextPageCall,
}) => (
  <div className="btn-container">
    <Button onClick={handlePrevPageCall}>Previous Page</Button>
    <div className={"current-page"}>Page {currentPage}</div>
    <Button onClick={handleNextPageCall}>Next Page</Button>
  </div>
);

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

export default InfiniteScrollApp;
