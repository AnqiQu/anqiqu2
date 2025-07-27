import { motion } from 'framer-motion';
import RollingHills from '../components/RollingHills';

const anqi_height = 200;

const animals = [
  { name: "fatty", size: 0.22 * anqi_height, speed: 3 },
  { name: "catsby", size: 0.25 * anqi_height, speed: 5 },
  { name: "pikachu", size: 0.28 * anqi_height, speed: 1 },
  { name: "tigger", size: 0.23 * anqi_height, speed: 4 },
  { name: "doggle", size: 0.30 * anqi_height, speed: 2 },
];

// export default function About({ onReady }) {
export default function About() {
  return (
    <section className="h-screen w-screen snap-start flex flex-col items-center justify-center px-10">
      {/* <RollingHills onReady={onReady} /> */}
      <RollingHills />
      <div className="w-2/3 text-center z-1">
        <h2 className="text-3xl font-semibold mb-2 text-[#42190d]">Since you're here, I am guessing you want to know a little bit about me...</h2>
        <p className="text-[#20180f]">
          I grew up in Johannesburg, South Africa. Academically, I hold BAs in Economics and Statistics, 
          along with an MS in Computer Science, all from the University of Chicago. I'm currently working towards 
          a DPhil (PhD) in Statistics and Machine Learning at Oxford University. My research interests are somewhat mutable, 
          but at the moment I'm drawn to autonomous agents, strategic game theory, active inference, and AI alignment more broadly.
          <br /><br />
          I am a lover of cats, an enjoyer of soup, and am trying to be a builder of cool things. Some other things that I like include
          button quails, round bushes, and this painting by Thomas Couture, titled <a
            className="text-blue-500 hover:underline"
            href="https://harvardartmuseums.org/collections/object/230163"
            target="_blank"
            rel="noopener noreferrer">
            Romans of the Decadence
          </a> (1847) which is currently on display at the Harvard Art Museum.
          <br /><br />
          Now I won’t waffle on for too long; I don’t want this to read like a CV. 
          If you’d like to know more about anything, or just want to reach out, my contact details are:
          <br /> Email: anqi [at] anqiqu [dot] com
          <br /> Instagram: <a
                href="https://www.instagram.com/anqi._.thewateraddict/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                @anqi._.thewateraddict
            </a>
          <br /> LinkedIn: <a
            className="text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/anqiqu/"
            target="_blank"
            rel="noopener noreferrer">
            anqiqu
          </a>
        </p>
      </div>

      <div className="flex justify-start items-end z-1">
        <img src="/Anqi_walk2.png" style={{ height: `${anqi_height}px` }} alt="Anqi" />
        {animals.map((animal) => (
          <motion.img
            key={animal.name}
            src={`/${animal.name}.png`}
            alt={animal.name}
            animate={{ y: [0, -5, 0] }}
            style={{ height: `${animal.size}px` }}
            transition={{ duration: animal.speed, repeat: Infinity }}
          />
        ))}
      </div>
    </section>
  );
}