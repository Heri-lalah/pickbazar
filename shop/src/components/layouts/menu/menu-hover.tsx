import React from "react";
import { motion } from "framer-motion";

export default function MenuHover(){
  return (
    <>
      <Playstation/>
      <Nintendo/>
      <Xbox/>
    </>
  )
}

function Playstation() {
  const [isHoverPlaystation, toggleHoverPlaystation] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleHoverPlaystation(!isHoverPlaystation);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

  return (
          <motion.div
            // className="w-48"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <a href="/">Playstation</a>
            <motion.div
              // style={subMenu}
              className="absolute p-4 rounded bg-light"
              initial="exit"
              animate={isHoverPlaystation ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="sub-menu-container">
                {
                  [5,4,3,2,1].map((item, index) => (
                    <>
                      <div className="mb-1">Playstation {item}</div>
                    </>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
  );
}

function Nintendo() {
  const [isHoverNintendo, toggleHoverNintendo] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleHoverNintendo(!isHoverNintendo);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

  return (
          <motion.div
            // className="w-48"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <a href="/">Nintendo</a>
            <motion.div
              // style={subMenu}
              className="absolute p-4 rounded bg-light"
              initial="exit"
              animate={isHoverNintendo ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="sub-menu-container">
                {
                  ["Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Gamecube"].map((item, index) => (
                    <>
                      <div className="mb-1">{item}</div>
                    </>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
  );
}

function Xbox() {
  const [isHoverXbox, toggleHoverXbox] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleHoverXbox(!isHoverXbox);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

  return (
          <motion.div
            // className="w-48"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <a href="/">Xbox</a>
            <motion.div
              // style={subMenu}
              className="absolute p-4 rounded bg-light"
              initial="exit"
              animate={isHoverXbox ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="sub-menu-container">
                {
                  ["Xbox Séries SIX", "Xbox One", "Xbox 360"].map((item, index) => (
                    <>
                      <div className="mb-1">{item}</div>
                    </>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
  );
}
