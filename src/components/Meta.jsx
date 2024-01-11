import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Stylux | شیک پوش باش',
  description: 'بهترین محصولات با کم ترین قیمت را از ما بخواهید',
  keywords: 'لباس، ارزان، محصولات، پروشاپ',
};

export default Meta;
