import React from 'react';
import LoadIcon from 'react-icons/lib/go/cloud-download'
import '../style.css';
const LoadingSpinner = () => (
  <div className="Loading"><br/><br/><center>
   <LoadIcon/> <strong>Loading...</strong>
   </center></div>
);

export default LoadingSpinner;