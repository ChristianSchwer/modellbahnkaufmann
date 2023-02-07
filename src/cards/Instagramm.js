import React from 'react';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

function Instagramm() {

  const token = "IGQVJVMTNvQjlnUXB6UzFPeDlBVFdLbUFTWmN6eGtRN0NlMkItVmtfdC1jMlVjU3ZAHTzNOVlgtaWtnYi1KTDVGVy1KbTVweDd5eHBsX1lFMHNxVnhiYXUxVi1qRmZA0VVRwNGsyd29SU2ljaGdzSFlvVAZDZD";

  return (
    <InstagramFeed token={token} counter="6" />
  )
};

export default Instagramm
