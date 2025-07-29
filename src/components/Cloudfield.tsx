import { useMemo, type ReactElement } from 'react';
import styles from './Cloudfield.module.scss';

const NUM_CLOUDS = 8;
const NUM_SMCLOUDS = 11;

function getRandomPosition(isSmall: boolean) {
  const top = Math.random() * 50; // up to 50% of container height
  const left = Math.random() * 100; // up to 100% width
  const size = isSmall
    ? 20 + Math.random() * 30 // 20–50px
    : 40 + Math.random() * 60; // 40–100px
  const delay = Math.random() * 4;

  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    animationDelay: `${delay}s`,
    zIndex: 0,
  } as React.CSSProperties;
}

export default function CloudField() {
  const clouds = useMemo(() => {
    const elements: ReactElement[] = [];

    for (let i = 1; i <= NUM_CLOUDS; i++) {
      const style = getRandomPosition(false);
      elements.push(
        <img
          key={`cloud-${i}`}
          src={`/images/cloud${i}.png`}
          className={`${styles.cloudFloat} absolute`}
          style={style}
          alt={`cloud-${i}`}
        />
      );
    }

    for (let i = 1; i <= NUM_SMCLOUDS; i++) {
      const style = getRandomPosition(true);
      elements.push(
        <img
          key={`smcloud-${i}`}
          src={`/images/smcloud${i}.png`}
          className={`${styles.cloudFloat} absolute`}
          style={style}
          alt={`smcloud-${i}`}
        />
      );
    }

    return elements;
  }, []);

  return (
    <div className="relative w-screen min-h-[60vh] overflow-hidden">
      {clouds}
    </div>
  );
}
