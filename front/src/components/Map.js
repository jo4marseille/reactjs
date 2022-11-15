import React from "react";

export default function Map() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-2">
            <button type="button" class="btn btn-outline-primary">
              Restaurant
            </button>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-outline-dark">
              Plages
            </button>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-outline-dark">
              Historique
            </button>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-outline-danger">
              Danger
            </button>
          </div>
        </div>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt=""
          className="map"
        />
      </div>
    </>
  );
}
