import './Gallery.css';
import { useVar } from 'orbitcode';

interface GalleryImage {
  id: string;
  color: string;
  label: string;
}

interface GalleryProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  { id: '1', color: '#667eea', label: 'Front View' },
  { id: '2', color: '#764ba2', label: 'Side View' },
  { id: '3', color: '#f093fb', label: 'Back View' },
  { id: '4', color: '#f5576c', label: 'Detail Shot' }
];

function Gallery({ images = defaultImages }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useVar<string>('selectedGalleryImage', images[0]?.id || '1');

  const currentImage = images.find(img => img.id === selectedImage) || images[0];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Product Gallery</h2>

        <div className="gallery-viewer">
          <div className="main-image" style={{ background: currentImage.color }}>
            <div className="image-placeholder">
              <span>{currentImage.label}</span>
            </div>
          </div>

          <div className="thumbnail-strip">
            {images.map((image) => (
              <button
                key={image.id}
                className={`thumbnail ${selectedImage === image.id ? 'active' : ''}`}
                onClick={() => setSelectedImage(image.id)}
                style={{ background: image.color }}
              >
                <span className="sr-only">{image.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-features">
          <div className="gallery-feature">
            <span className="icon">🔍</span>
            <span>Zoom to explore details</span>
          </div>
          <div className="gallery-feature">
            <span className="icon">🎨</span>
            <span>Available in multiple colors</span>
          </div>
          <div className="gallery-feature">
            <span className="icon">📐</span>
            <span>Precision crafted design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function GalleryPreview() {
  return <Gallery />;
}

export { Gallery };
