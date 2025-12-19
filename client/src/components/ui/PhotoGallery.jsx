import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { getImageSvg } from '../../utility/getImage';

const PhotoGallery = ({customClass,divclass,images,imgclass,caption,captionclass}) => {

  return (<>
    <PhotoProvider  toolbarRender={({ onScale, scale }) => {
        return (<>
            <img src={getImageSvg("plus")} className="size-10 PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
            <img src={getImageSvg("minus")} className="size-10 PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
        </>);
    }}
    >
      <div className={`foo ${customClass}`}>
        {images.map((item, index) => (
          <PhotoView key={item} src={item} >
            <div className={`h-full w-full ${divclass}`}>
                <img src={item} alt="" className={imgclass} style={{ objectFit: 'cover' }} />
                {caption && <div className={captionclass}>{caption}</div>}
            </div>
          </PhotoView>
        ))}
      </div>


    </PhotoProvider>
  </>);
};

export default PhotoGallery;