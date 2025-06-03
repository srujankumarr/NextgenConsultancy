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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.6354180141296!2d-78.94275902362589!3d35.68506337258645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac941281c4cbe3%3A0xe573168f1e72dd03!2s3347%20Belterra%20Point%20Dr%2C%20New%20Hill%2C%20NC%2027562%2C%20USA!5e0!3m2!1sen!2sin!4v1717413231822!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
