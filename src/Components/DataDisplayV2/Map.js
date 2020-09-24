import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { showDataOnMap } from "../../utils";

const corner1 = Leaflet.latLng(-90, -180);
const corner2 = Leaflet.latLng(90, 180);
const bounds = Leaflet.latLngBounds(corner1, corner2);

const Map = ({ mapCountries, casesType , mapCenter, zoom }) => {
  return (
    <div className="Map">
      <LeafletMap
        maxBoundsViscosity={1}
        maxBounds={bounds}
        center={mapCenter}
        zoom={zoom}
        minZoom={1}
        maxZoom={13}
      >
        <TileLayer
          noWrap
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
