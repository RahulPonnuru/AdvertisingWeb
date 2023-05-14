import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BannerbearImage = ({ apiKey, templateId }) => {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.bannerbear.com/v2/images/${templateId}/rendered`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        });
        console.log("sglsvskvkjzlavsvosovxo;kslovsov"+imageUrl)
        setImageUrl(response.data.image_url);
      } catch (error) {
        console.error(error);
      }
    };
        fetchData();
    }, [apiKey, templateId]);
    return (
      <img src={imageUrl} alt="Bannerbear Image"/>
    )
};

export default BannerbearImage;
