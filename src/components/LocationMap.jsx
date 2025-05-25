import React from "react";

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="mapouter mt-8">
        <div className="gmap_canvas relative overflow-hidden">
          <iframe
            width="100%"
            height="500"
            className="rounded-xl"
            id="gmap_canvas"
            // change the location to your location
            // Go to google maps, search for your location, click share, then embed map, copy the src link
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.626419613294!2d77.65282134901412!3d12.881555798807458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1352a83559bf%3A0x24048c22b0d36caa!2sParappana%20Agrahara%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1741332207838!5m2!1sen!2sin"
          ></iframe>
          <style>
            {`
            .mapouter {
              position: relative;
              text-align: center;
              width: 100%;
              height: 500px;
            }
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              width: 100%;
              height: 100%;
            }
          `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
