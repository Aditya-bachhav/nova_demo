import type { CSSProperties } from 'react';

type GalleryItem = { src: string; alt: string };
type FanGalleryProps = {
  items: GalleryItem[];
  cardWidth?: number;
  aspectRatio?: number;
  tilt?: number;
  lift?: number;
  spread?: number;
  stackFrom?: 'left' | 'right';
  showTitle?: boolean;
  [key: string]: unknown;
};

export function FanGallery({ items, cardWidth = 162, aspectRatio = 0.8, tilt = 14.5, lift = 42, spread = 0.2, stackFrom = 'left' }: FanGalleryProps) {
  return (
    <div className="fan-gallery" style={{ '--fan-card-width': `${cardWidth}px` } as CSSProperties}>
      {items.map((item, index) => {
        const offset = (index - (items.length - 1) / 2) * cardWidth * spread;
        const direction = stackFrom === 'left' ? 1 : -1;
        return (
          <figure
            className="fan-gallery__card"
            key={item.src}
            style={{
              aspectRatio,
              transform: `translateX(${offset}px) translateY(${Math.abs(index - (items.length - 1) / 2) * lift * 0.12}px) rotate(${(index - (items.length - 1) / 2) * tilt / items.length * direction}deg)`,
              zIndex: index,
            }}
          >
            <img src={item.src} alt={item.alt} />
          </figure>
        );
      })}
    </div>
  );
}
