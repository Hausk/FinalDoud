'use client'
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./renderNextImage";

export function PhotoBox({images}: {images: any}) {
    const [index, setIndex] = useState(-1);
  return (
    <>
    <PhotoAlbum photos={images} layout="columns"
      renderPhoto={NextJsImage}
      columns={(containerWidth) => {
        if (containerWidth < 500) return 2;
        return 3;
      }} onClick={({ index }) => setIndex(index)} />

    <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Counter]}
      />
    </>
  )
}