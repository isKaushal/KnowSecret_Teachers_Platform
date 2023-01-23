import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";



const reducer = (state, action) => {
  switch (action.type) {
    case "previous": {
      const { index, list } = state;

      let IndexUpdater = 0;

      if (index === 0) {
        IndexUpdater = list.length - 1;
      } else {
        IndexUpdater = index - 1;
      }

      return {
        ...list[IndexUpdater],
        list: state.list,
        index: IndexUpdater,
        src: list[IndexUpdater].src,
        alt: list[IndexUpdater].alt,
        key: list[IndexUpdater].key,
      };
    }

    case "next": {
      const { index, list } = state;
      let IndexUpdater = 0;
      if (index === list.length - 1) {
        IndexUpdater = 0;
      } else {
        IndexUpdater = index + 1;
      }

      return {
        ...list[IndexUpdater],
        list: state.list,
        index: IndexUpdater,
        src: list[IndexUpdater].src,
        alt: list[IndexUpdater].alt,
        key: list[IndexUpdater].key,
      };
    }

    default:
      state;
  }
};

const MainComponent = ({ list }) => {
  const [StopImageschange, setStopImageschange] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    list: list,
    index: 0,
    key: list[0].key,
    alt: list[0].alt,
    src: list[0].src,
  });

  const Previous = () => {
    dispatch({ type: "previous" });
  };

  const Next = () => {
    dispatch({ type: "next" });
  };

  const StopImages = () => {
    setStopImageschange(true);
  };

  const ContinueImages = () => {
    setStopImageschange(false);
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      if (StopImageschange === false) {
        Next();
      }
    }, 5000);

    return () => clearInterval(intervel);
  });

  return (
    <div className="w-full  h-full flex justify-center items-center ">
      <div className="flex w-full h-full relative justify-center items-center  ">
          <AnimatePresence initial={false}>
            <motion.div
              className="  absolute  "
              key={state.key}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 2 }}
              onMouseEnter={StopImages}
              onMouseLeave={ContinueImages}
              drag="x"
              onDragEnd={Next}
              dragConstraints={{ left: 0, right: 0 }}
            >
             <div className="text-center w-full h-full text-white">
              <div className="awards-image-wrap flex w-full justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-white mb-2"></div>
              </div>
              <h1 className="text-xl text-[#ff9d00] font-bold">{state.key}</h1>
              <h1 className="text-3xl mb-2">{state.alt}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis porro cumlanditiis, atque obcaecati maiores.
              </p>
            </div>
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
};

export default function Playground({list}) {
  return <MainComponent list={list} />;
}
