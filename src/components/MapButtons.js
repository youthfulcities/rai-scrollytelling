import React from 'react';
import CanadaMap from 'react-canada-map';

const MapButtons = () => {
  const mapClickHandler = (province) => {
    console.log('province clicked: ', province);
  };

  // const customizeProvince = () => ({
  //   ON: {
  //     fillColor: 'DarkRed',
  //     onHoverColor: 'black',
  //   },
  //   NB: {
  //     fillColor: '#000000',
  //   },
  //   QC: {
  //     onHoverColor: '#FF69B4',
  //   },
  // });

  return (
    <CanadaMap
      // customize={customizeProvince()}
      fillColor="#FBD166"
      onHoverColor="#B8D98D"
      onClick={mapClickHandler}
    />
  );
};

export default MapButtons;
