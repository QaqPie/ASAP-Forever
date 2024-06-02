import React from 'react';
import { motion } from 'framer-motion';
import './Discography.css';

const Discography = () => {
  return (
    <motion.div
      className="discography"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Discography</h1>
      <div className="facts">
        <h2>About A$AP Rocky</h2>
        <p>
          A$AP Rocky, born Rakim Mayers, is an American rapper, singer, and record producer. He is a member of the hip hop collective A$AP Mob, from which he adopted his moniker. Rocky released his debut mixtape "Live.Love.A$AP" in 2011 to critical acclaim. His debut album "Long.Live.A$AP" (2013) debuted at number one on the Billboard 200. He followed this with "At.Long.Last.A$AP" (2015) and "Testing" (2018).
        </p>
        <h2>Career Highlights</h2>
        <ul>
          <li>Debut mixtape "Live.Love.A$AP" (2011)</li>
          <li>Debut studio album "Long.Live.A$AP" (2013)</li>
          <li>Second studio album "At.Long.Last.A$AP" (2015)</li>
          <li>Third studio album "Testing" (2018)</li>
          <li>Known for hit singles like "Goldie", "Fuckin' Problems", and "L$D"</li>
          <li>Influenced by multiple genres including hip hop, rap, and psychedelic music</li>
        </ul>
        <h2>Collaborations</h2>
        <p>
          A$AP Rocky has collaborated with several artists including Drake, Kendrick Lamar, 2 Chainz, Skrillex, and Lana Del Rey. His fashion sense and style have also made him a significant figure in the fashion world, collaborating with brands like Dior, Raf Simons, and Guess.
        </p>
      </div>
    </motion.div>
  );
}

export default Discography;
