import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork, loading, error }) {
  const { name } = useContext(UserContext);

  if (loading) {
    return <p>Loading your personalized artwork...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <p>
        <strong>{name}</strong>, your element is: <strong>{element}</strong>
      </p>

      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img
            src={artwork.primaryImage || artwork.primaryImageSmall}
            alt={artwork.title}
            style={{ maxWidth: "300px", height: "auto" }}
          />
          <p>Artist: {artwork.artistDisplayName || "Unknown"}</p>
          <p>Date: {artwork.objectDate || "Unknown"}</p>
        </div>
      ) : (
        <p>No artwork found for this element.</p>
      )}
    </div>
  );
}
