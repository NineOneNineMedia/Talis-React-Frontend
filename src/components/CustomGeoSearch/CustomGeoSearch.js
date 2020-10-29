import React from "react";
import { connectGeoSearch } from "react-instantsearch-dom";
import L from "leaflet";
//import "./Map.css";

const accessToken = process.env.REACT_APP_MAPBOX_KEY;

class GeoSearch extends React.Component {
  isUserInteraction = true;
  markers = [];

  componentDidMount() {
    const { refine } = this.props;

    this.instance = L.map(this.el);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/mxnunley1/ckgs8lxoe187p1al3q9s3pohv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibXhudW5sZXkxIiwiYSI6ImNrOTk1eWUwOTAzaTEzZHF3MzQxd3NlaTgifQ.VtOj8_k6ClIAFcvNwUAgRQ",
      {
        center: [5.55602, -0.1969],
        zoom: 12,
        attribution:
          "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>",
      }
    ).addTo(this.instance);

    this.instance.on("moveend", () => {
      if (this.isUserInteraction) {
        const ne = this.instance.getBounds().getNorthEast();
        const sw = this.instance.getBounds().getSouthWest();

        refine({
          northEast: { lat: ne.lat, lng: ne.lng },
          southWest: { lat: sw.lat, lng: sw.lng },
        });
      }
    });
  }

  componentDidUpdate() {
    const { hits, currentRefinement, position } = this.props;

    this.markers.forEach((marker) => marker.remove());

    this.markers = hits.map(({ _geoloc }) =>
      L.marker([_geoloc.lat, _geoloc.lng]).addTo(this.instance)
    );

    this.isUserInteraction = false;
    if (!currentRefinement && this.markers.length) {
      this.instance.fitBounds(L.featureGroup(this.markers).getBounds(), {
        animate: false,
      });
    } else if (!currentRefinement) {
      this.instance.setView(
        position || {
          lat: 5.55602,
          lng: -0.1969,
        },
        12,
        {
          animate: false,
        }
      );
    }
    this.isUserInteraction = true;
  }

  render() {
    const { currentRefinement, refine } = this.props;

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
