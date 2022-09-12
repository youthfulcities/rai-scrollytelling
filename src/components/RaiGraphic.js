import _ from 'lodash';
import React from 'react';
import uuid4 from 'uuid4';
import FadeInUp from './FadeInUp';

const images = _.range(6, 34);

const RaiGraphic = () => (
  <>
    {images.map((image, i) => (
      <FadeInUp key={uuid4()} delay={0 + i / 3}>
        <img
          src={`/assets/images/rai/${image}.png`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width="100%"
          alt={
            i === 0
              ? 'Diagram of monthly deficits across 27 cities in Canada with the average being -$745 per month.'
              : ''
          }
        />
      </FadeInUp>
    ))}
  </>
);

export default RaiGraphic;
