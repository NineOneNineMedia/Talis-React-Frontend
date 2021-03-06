import React from "react";
import { connectGeoSearch } from "react-instantsearch-dom";
import L from "leaflet";
import talisMarker from "../../assets/img/talis-marker.svg";
//import "./Map.css";

const accessToken = process.env.REACT_APP_MAPBOX_KEY;
const mapMarker = L.icon({
  iconUrl: talisMarker,

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

class GeoSearch extends React.Component {
  isUserInteraction = true;
  markers = [];

  componentDidMount() {
    const { refine } = this.props;

    this.instance = L.map(this.el, { center: [5.55602, -0.1969], zoom: 11 });

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/mxnunley1/ckgs8lxoe187p1al3q9s3pohv/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`,
      {
        attribution:
          "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>",
      }
    ).addTo(this.instance);
  }

  componentDidUpdate() {
    const { hits, currentRefinement } = this.props;

    this.markers.forEach((marker) => marker.remove());

    this.markers = hits.map(({ _geoloc }) =>
      L.marker([_geoloc.lat, _geoloc.lng], { icon: mapMarker }).addTo(this.instance)
    );

    if (this.markers.length) {
      this.instance.fitBounds(L.featureGroup(this.markers).getBounds(), {
        animate: false,
        padding: [10, 10],
      });
    }
  }

  render() {
    return (
      <div>
        <div
          style={{ position: "absolute", height: "100%", borderRadius: "15px" }}
          ref={(c) => (this.el = c)}
        />
      </div>
    );
  }
}

export const CustomGeoSearch = connectGeoSearch(GeoSearch);
