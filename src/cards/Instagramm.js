import React from 'react';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

function Instagramm() {

  const token = "INSTAGRAM_TOKEN";

  return (
    <InstagramFeed token={token} counter="6" />
  )
};

export default Instagramm
