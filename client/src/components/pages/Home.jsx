import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [numPrayers, setNumPrayers] = useState(861);

  const onSubmit = (e) => {
    e.preventDefault();

    setNumPrayers(numPrayers + 1);
  };

  return (
    <main className="home">
      <section>
        <div>
          We have prayed for <span>{numPrayers}</span> prayer requests. Let us cast our burdens onto God together and
          pray for each other.
        </div>
      </section>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="What burdens your heart?" />
        <button>Submit</button>
      </form>
      <div>
        <motion.p
          style={{ top: "5%", left: "61%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;The Lord is near to the brokenhearted and saves the crushed in spirit.&quot; - Psalm 34:18
        </motion.p>
        <motion.p
          style={{ top: "9%", left: "11%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 3, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;So faith comes from hearing, and hearing through the word of Christ.&quot; - Romans 10:17
        </motion.p>
        <motion.p
          style={{ top: "19%", left: "25%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 15, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you,
          I will uphold you with my righteous right hand.&quot; - Isaiah 41:10
        </motion.p>
        <motion.p
          style={{ top: "69%", left: "52%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 12, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;For if you forgive others their trespasses, your heavenly Father will also forgive you.&quot; - Matthew
          6:14
        </motion.p>
        <motion.p
          style={{ top: "77%", left: "4%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 6, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;I can do all things through him who strengthens me.&quot; - Philippians 4:13
        </motion.p>
        <motion.p
          style={{ top: "81%", left: "67%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 9, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;When I am afraid, I put my trust in you.&quot; - Psalm 56:3
        </motion.p>
        <motion.p
          style={{ top: "89%", left: "14%" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 13, delay: 18, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}>
          &quot;Now faith is the assurance of things hoped for, the conviction of things not seen.&quot; - Hebrews 11:1
        </motion.p>
      </div>
    </main>
  );
};

export default Home;
