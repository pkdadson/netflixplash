import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default ({ photoIndex, photos, isOpen }) => {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  useEffect(() => {
    function setData() {
      setPhoto(photoIndex);
      setOpen(isOpen);
    }
    setData();
  }, [photoIndex]);

  return (
    <span>
      {open && (
        <Lightbox
          mainSrc={photos[photo]?.urls.full}
          mainSrcThumbnail={photos[photo]?.urls.thumb}
          nextSrc={photos[(photo + 1) % photos.length]?.urls.full}
          nextSrcThumbnail={photos[(photo + 1) % photos.length]?.urls.thumb}
          prevSrc={
            photos[(photo + photos.length - 1) % photos.length]?.urls.full
          }
          prevSrcThumbnail={
            photos[(photo + photos.length - 1) % photos.length]?.urls.thumb
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhoto((photo + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() => setPhoto((photo + 1) % photos.length)}
        />
      )}
    </span>
  );
};
