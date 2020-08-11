import React, { useState, useEffect } from "react";
import "Assets/scss/components/imageModal.scss";

export default ({ image, isOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function setData() {
      setOpen(isOpen);
    }
    setData();
  }, [image]);

  return (
    <span>
      {open && (
        <div className="modal">
          <span className="modal__close" onClick={() => setOpen(true)}>
            &times;
          </span>
          <div className="modal__contents">
            <img src={image?.urls.full} className="modal__content" />
          </div>
        </div>
      )}
    </span>
  );
};
