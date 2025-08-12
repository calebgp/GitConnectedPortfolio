import {Image} from "../../models/gc-profile.tsx";
import React, {useState} from "react";
import styles from "./ImageGallery.module.css";
import {Dialog} from "@mui/material";

interface ImageGalleryProps {
    images: { [key: string]: Image } | undefined;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className={styles.imageGallery}>
                {images && Object.entries(images).map(([key, image], index) => (
                    <img
                        key={key + index}
                        className={styles.image}
                        src={image.resolutions.desktop?.url || image.resolutions.mobile?.url}
                        alt={`Image ${key}`}
                        onClick={() => openModal(image.resolutions.desktop?.url || image.resolutions.mobile?.url)}
                    />
                ))}
            </div>


            <Dialog open={selectedImage != null}>
                <div className={styles.modal} onClick={closeModal}>
                    <span className={styles.close}>&times;</span>
                    <img className={styles.modalImage} src={selectedImage ?? ""} alt="Zoomed"/>
                </div>
            </Dialog>


        </div>
    );
};


export default ImageGallery;
