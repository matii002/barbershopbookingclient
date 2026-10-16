import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/menthingsbarbershop.png";
import styles from "../../assets/styles/Portfolio.module.css";

function Portfolio() {
  const galleria = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      itemImageSrc: photo1,
      alt: "Men's classic haircut with textured hair, skin fade and a neatly trimmed beard",
      title: "Classic Cut & Beard",
    },
    {
      itemImageSrc: photo2,
      alt: "Modern men's textured haircut with a high fade and voluminous messy hair",
      title: "Modern Textured Fade",
    },
    {
      itemImageSrc: photo1,
      alt: "Men's slicked-back side-part haircut with a sharp fade and a full groomed beard",
      title: "Classic Style & Beard",
    },
  ];

  const activeImage = images[activeIndex];

  const itemTemplate = (item) => {
    return (
      <div className={styles.galleriaFrame}>
        <Image
          src={item.itemImageSrc}
          alt={item.alt}
          imageClassName={styles.mainImage}
          indicatorIcon="pi pi-search"
        />
        <Button
          type="button"
          onClick={() => galleria.current?.show()}
          className={styles.maximalizeButton}
        >
          <i className={`pi pi-window-maximize ${styles.maximalizeIcon}`}></i>
        </Button>
      </div>
    );
  };

  const itemTemplateFullScreen = (item) => {
    return (
      <Image
        src={item.itemImageSrc}
        alt={item.alt}
        imageClassName={styles.mainImageFullScreen}
        indicatorIcon="pi pi-search"
      />
    );
  };

  return (
    <div className={styles.complitedProjectsContainer}>
      <h2 className={styles.complitedProjectsTitle}>OUR WORK</h2>

      <Galleria
        value={images}
        circular
        item={itemTemplate}
        className={styles.galleria}
        pt={{
          itemContainer: { className: styles.itemContainer },
        }}
        showItemNavigators
        showItemNavigatorsOnHover
        showThumbnails={false}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
      />
      <div className={styles.imageDescription}>
        <h3>{activeImage.title || activeImage.alt}</h3>
        <p>{activeImage.description}</p>
      </div>
      <Galleria
        ref={galleria}
        value={images}
        circular
        item={itemTemplateFullScreen}
        className={styles.galleria}
        pt={{
          itemContainer: { className: styles.itemContainer },
        }}
        showItemNavigators
        showThumbnails={false}
        fullScreen
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
      />
    </div>
  );
}
export default Portfolio;
