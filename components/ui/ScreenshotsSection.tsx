import Image from 'next/image'


interface Screenshot {
  src: string
  alt: string
}

const screenshots: Screenshot[] = [
  {
    // src: '/screenshots/screenshot.png', // If using public folder
    // OR
    src: "images/screenshots/screenshot.jpg",
    alt: 'Screenshot 1 description'
  },
  // Add more screenshots as needed
]

export default function ScreenshotsSection() {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(167,98%,50%)] to-[hsl(262,83%,58%)]">Screenshots</h2>
        {/* Changed to 1 column layout and increased height */}
        <div className="grid grid-cols-1 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative h-96 md:h-[600px]">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative h-96 md:h-[600px]">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative h-96 md:h-[600px]">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}