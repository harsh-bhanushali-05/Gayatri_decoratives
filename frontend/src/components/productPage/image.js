import { height } from '@mui/system';
import React, { useState } from 'react';

function Image(props) {
  return <img src={props.img} alt="Product Image" />;
}

function InteractiveImageGallery(props) {
  const [mainImage, setMainImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleThumbnailHover = (imageUrl) => {
    setMainImage(imageUrl);
    setMainImage(imageUrl);
    setSelectedImage(imageUrl);
  };

  const filteredImages = props.images.filter((imageUrl) => imageUrl !== null && imageUrl !== undefined && imageUrl!="");

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: imageUrl === selectedImage ? '2px solid blue' : '1px solid #ccc',
            }}
            onMouseEnter={() => handleThumbnailHover(imageUrl)}
           
          />
        ))}
      </div>
      <img
        src={mainImage === null ? props.images[0] : mainImage}
        alt="Main Image"
        style={{  minHeight:"50%", maxHeight:"80%" , minWidth:" 60%", maxWidth: '80%' }}
      />
    </div>
  );
}

export default InteractiveImageGallery;
