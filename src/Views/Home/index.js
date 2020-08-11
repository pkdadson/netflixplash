import React, { useState, useEffect } from "react";
import { Requests } from "Services/photoService";
import Row from "./Components/Rows";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import "Assets/scss/pages/home.scss";
import { Http } from "Utils";

export default () => {
  const [collections, setCollections] = useState([]);
  // const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await Http.get(Requests.fetchCollection).then((response) => {
        setCollections(response.reverse());
      });
      // await Http.get(Requests.fetchFeatured).then((response) => {
      //   setFeatures(response.reverse());
      // });
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <Nav />
      <Banner fetchUrl={Requests.fetchRandom} />
      <Row title="NETFLIXPLASH ORIGINALS" fetchUrl={Requests.fetchPhotos} />
      {collections?.map((collection, key) => (
        <Row
          key={key}
          title={collection?.title}
          fetchUrl={collection?.links?.photos}
        />
      ))}
      {/* {features?.map((feature, key) => (
        <Row
          key={key}
          title={feature?.title}
          fetchUrl={feature?.links?.photos}
        />
      ))} */}
    </div>
  );
};
