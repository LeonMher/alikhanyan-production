import React from "react";
import { useParams } from "react-router";
import { project } from "../../data/project";
import "../../components/ArtistCard.css";

const ArtistDetails = () => {
  const { artistId } = useParams();
  const artist = project.find(
    (a) => a.fullName.replace(/\s+/g, "-").toLowerCase() === artistId
  );

  if (!artist) {
    return <div style={{textAlign: 'center', marginTop: '2rem'}}>Artist not found.</div>;
  }

  return (
    <div className="artist-details" style={{maxWidth: 400, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '2rem'}}>
      <div className="artist-card-img-wrapper" style={{width: 160, height: 160, margin: '0 auto 1rem auto'}}>
        <img src={artist.img} alt={artist.fullName} className="artist-card-img" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <h2 style={{marginBottom: '0.5rem'}}>{artist.fullName}</h2>
      <h4 style={{color: '#3b82f6', marginBottom: '1.5rem'}}>{artist.instrument}</h4>
      {/* Add more artist info here if available */}
      <div style={{marginTop: '1rem', color: '#444'}}>More information about {artist.fullName} will be available soon.</div>
    </div>
  );
};

export default ArtistDetails;
