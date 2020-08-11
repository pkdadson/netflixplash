import React, { useState, useEffect } from "react";
import "Assets/scss/pages/rows.scss";
import { Http } from "Utils";
import Preview from "./Preview";

export default ({ title, fetchUrl }) => {
  const [photos, setPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoView, setPhotoView] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await Http.get(fetchUrl).then((response) => {
        setPhotos(response);
      });
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (photo) => {
    setPhotoIndex(photo);
    setPhotoView(true);
    setTimeout(function () {
      setPhotoView(false);
    }, 1000);
  };

  return (
    <div className="row m-0">
      <div className="row__title">{title}</div>
      <div className="row__posters">
        {photos?.map((photo, key) => (
          <img
            key={key}
            onClick={() => handleClick(key)}
            className="row__poster"
            src={`${photo?.urls.small}`}
            alt={photo.alt_description}
          />
        ))}
      </div>
      <Preview isOpen={photoView} photoIndex={photoIndex} photos={photos} />
    </div>
  );
};
