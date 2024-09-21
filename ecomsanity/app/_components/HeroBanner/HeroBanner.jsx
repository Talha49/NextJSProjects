"use client"
import Link from 'next/link';
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
const HeroBanner = ({ HeroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{HeroBanner?.smallText}</p>
        <h3>{HeroBanner?.midText}</h3>
        <h3>{HeroBanner?.largeText1}</h3>
        <img src={urlFor(HeroBanner?.image)} alt='ImageHeadphone' className='hero-banner-image' />
        <div>
          <Link href={`/product/${HeroBanner?.product}`}>
            <button type='button'>{HeroBanner?.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <h4>{HeroBanner?.desc}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
