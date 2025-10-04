import React from "react";
import { Link } from "react-router";

const ArtistCard = ({ artist }) => (
  <Link to={`/alikhanyan-production/artist/${artist.fullName.replace(/\s+/g, "-").toLowerCase()}`}
    className="artist-card">
    <div className="artist-card-img-wrapper">
      <img src={artist.img} alt={artist.fullName} className="artist-card-img" />
    </div>
    <div className="artist-card-info">
      <h3>{artist.fullName}</h3>
      <p>{artist.instrument}</p>
    </div>
  </Link>
);

export default ArtistCard;
