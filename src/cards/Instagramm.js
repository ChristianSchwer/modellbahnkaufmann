import React from 'react';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

function Instagramm() {

  const token = "IGQVJWZAENQTS16V1ZAwWHN6UUptemM3UDN0SEZAiY0VqZAlZALS3gzM2wySC1TVVNmMUYzTjZAvQ2lOME8yeE9PdnU1d0tGa0ZAtb3k4N2ZAtVW5OdlhlOGhEZAGxzWGhiZA0xWRk01eF9aYjZALRExIUFNJcXRCRQZDZD";

  return (
    <InstagramFeed token={token} counter="6" />
  )
};

export default Instagramm
