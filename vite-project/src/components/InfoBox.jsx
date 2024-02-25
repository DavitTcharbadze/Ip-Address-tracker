/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import classes from '../modules/InfoBox.module.scss';

const InfoBox = ({ data }) => {
  return (
    <div className={classes['info-box-container']}>
      <div className={classes['info-item']}>
        <span className={classes['info-label']}>IP Address:</span>
        <span className={classes['info-value']}>{data.ip}</span>
      </div>
      <div className={classes['info-item']}>
        <span className={classes['info-label']}>Location:</span>
        <span className={classes['info-value']}>{`${data.location.city}, ${data.location.region}, ${data.location.country}`}</span>
      </div>
      <div className={classes['info-item']}>
        <span className={classes['info-label']}>ISP:</span>
        <span className={classes['info-value']}>{data.isp}</span>
      </div>
    </div>
  )
}

export default InfoBox;
