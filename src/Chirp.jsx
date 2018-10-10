import React from "react";

const Chirp = (props) => {
  return (
    <React.Fragment>
      <div className="card col-md-4">
        <img
          className="img-thumbnail"
          src="https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_960/02th-egg-person"
          style={{ width: "70px", height: "70px" }}
        />
        <div className="card-body float-right">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chirp;
