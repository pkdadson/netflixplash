import React, { useState, useEffect } from "react";
import { Http } from "Utils";
import { Container, Row, Col } from "react-bootstrap";
import "Assets/scss/pages/banner.scss";
import ImageModal from "Components/imageModal";

export default ({ fetchUrl }) => {
  const [photo, setPhoto] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await Http.get(fetchUrl).then((response) => {
        setPhoto(response);
      });
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log(photo.urls?.full);

  return (
    <header
      className="banner jumbotron jumbotron-fluid pb-0"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${photo.urls?.full}")`,
        backgroundPosition: "center center",
      }}
    >
      <Container fluid>
        <Row className="m-0">
          <Col xs lg="7" className="banner__contents">
            <div
              className="banner__title display-4"
              style={{ color: `${photo?.color} || white` }}
            >
              {photo?.alt_description}
            </div>

            <div className="py-2 banner__buttons">
              <button className="banner__button" onClick={() => setOpen(true)}>
                View
              </button>
              <button className="banner__button">Download</button>
            </div>
            <Row className="m-0 banner__description">
              <div className="pr-3">Downloads: {photo?.downloads}</div>
              <div className="pr-3">Likes: {photo?.likes}</div>
              <div>Views: {photo?.views}</div>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="banner--fadeBottom" />
      {isOpen && <ImageModal image={photo} isOpen={isOpen} />}
    </header>
  );
};
