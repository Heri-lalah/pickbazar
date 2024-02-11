import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownIcon } from "@/components/icons/arrow-down";
import { ArrowDownIconTriangle } from "@/components/icons/arrow-down-icon-triangle";

export default function MenuHover(){
  return (
    <>
      <Playstation/>
      <Nintendo/>
      <Xbox/>

      <Link
      className="flex items-center justify-between gap-1 font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
      href="">
        <Image src={"/icons/funkopop.jpg" } alt={"funkopop"} width={25} height={25}/>
        <div className='h-5 border-2 border-accent-500'></div>
        <div>FUNKO POP & Figurine</div>
      </Link>
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
            <Link
            className="font-normal flex items-center gap-1 text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
            href="">
              <Image src={"/icons/ps.jpg" } alt={"playstation"} width={25} height={25}/>
              <div className='h-5 border-2 border-accent-500'></div>
              <div>Playstation</div>
              <ArrowDownIconTriangle className="ml-3"/>
            </Link>
            <motion.div
              // style={subMenu}
              className="absolute p-4 w-44 rounded bg-light"
              initial="exit"
              animate={isHoverPlaystation ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="flex flex-col">
                {
                  [5,4,3,2,1].map((item, index) => (
                    <>
                      <Link href="" className="mb-1">Playstation {item}</Link>
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
              <Link
              className="flex items-center gap-1 font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
              href="">
                <Image src={"/icons/nintendo.jpg" } alt={"nintendo"} width={25} height={25}/>
                <div className='h-5 border-2 border-accent-500'></div>
                <div className="flex justify-between items-center">
                  <span>Nintendo</span>
                  <ArrowDownIconTriangle className="ml-3"/>
                </div>
              </Link>
            <motion.div
              // style={subMenu}
              className="absolute p-4 rounded bg-light"
              initial="exit"
              animate={isHoverNintendo ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="flex flex-col">
                {
                  ["Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Gamecube"].map((item, index) => (
                    <>
                      <Link href="" className="mb-1">{item}</Link>
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
            <Link
            className="flex items-center gap-1 font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
            href="">
              <Image src={"/icons/xbox.jpg" } alt={"xbox"} width={25} height={25}/>
              <div className='h-5 border-2 border-accent-500'></div>
              <div>Xbox</div>
              <ArrowDownIconTriangle className="ml-3"/>
            </Link>
            <motion.div
              // style={subMenu}
              className="absolute p-4 rounded bg-light"
              initial="exit"
              animate={isHoverXbox ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 shadow-350" />
              <div className="flex flex-col">
                {
                  ["Xbox Séries SIX", "Xbox One", "Xbox 360"].map((item, index) => (
                    <>
                      <Link href="" className="mb-1">{item}</Link>
                    </>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
  );
}
