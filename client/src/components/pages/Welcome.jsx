import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { heroMotionAnimate, heroMotionInitial, heroMotionTransition } from "../../utils/heroMotion";

const Home = () => {
  return (
    <main className="welcome">
      <section className="welcome--hero">
        <div />
        <div className="welcome--hero-text">
          <motion.p initial={heroMotionInitial} animate={heroMotionAnimate} transition={heroMotionTransition(1)}>
            Two words:{" "}
            <motion.span initial={heroMotionInitial} animate={heroMotionAnimate} transition={heroMotionTransition(2.6)}>
              community <span>and</span> prayer<span>.</span>
            </motion.span>
          </motion.p>
          <motion.p initial={heroMotionInitial} animate={heroMotionAnimate} transition={heroMotionTransition(5)}>
            Join us in creating a space of support and love for each other through a <span>community of prayer</span>.
          </motion.p>
        </div>
        <motion.div initial={heroMotionInitial} animate={heroMotionAnimate} transition={heroMotionTransition(8.4)}>
          <Link to="/home">
            Continue
            <motion.div
              animate={{
                x: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 1,
                delay: 9,
                repeat: Infinity,
              }}>
              <HiOutlineArrowRight />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
