import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} aria-hidden="true">
      <div className="preloader-mark">
        <span className="preloader-greeting">Namaste</span>
        <span className="preloader-line" />
        <span className="preloader-caption">Naman Dubey / Portfolio</span>
      </div>
    </div>
  );
}

export default Pre;
