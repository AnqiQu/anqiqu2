import { useEffect, useState } from 'react'

interface Star {
  name: string
  x: number
  y: number
  size: number // relative to brightness
}

const stars: Star[] = [
  { name: 'Castor', x: 20, y: 10, size: 8 },
  { name: 'Pollux', x: 30, y: 25, size: 10 },
  { name: 'Alhena', x: 40, y: 40, size: 6 },
  { name: 'Wasat', x: 35, y: 50, size: 5 },
  { name: 'Mebsuta', x: 25, y: 60, size: 7 },
  { name: 'Tejat', x: 15, y: 50, size: 6 },
  { name: 'Propus', x: 10, y: 65, size: 4 },
  { name: 'Mekbuda', x: 28, y: 75, size: 5 }
]

export default function GeminiConstellation() {
  const [visibleStars, setVisibleStars] = useState<boolean[]>(stars.map(() => true))

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStars((prev) =>
        prev.map(() => Math.random() > 0.2) // ~80% chance to be visible
      )
    }, 500 + Math.random() * 1000) // random twinkle interval

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-black">
      {stars.map((star, i) => (
        <div
          key={star.name}
          className="absolute rounded-full bg-white transition-opacity duration-700"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: visibleStars[i] ? 1 : 0
          }}
        />
      ))}
    </div>
  )
}
