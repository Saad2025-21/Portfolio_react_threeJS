import { FlipWords } from "./flipwords";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Minimalist", "Modern", "Scalable"];
    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    };
    return (
        <div className="z-10 mt-20 text-center md:mt-50 md:text-left rounded-3xl bg-clip-text overflow-hidden">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-4xl font-medium flex"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2.7 }}
                >
                   <p className="text-[#fdfdfd]">Hi I'm </p><p className="text-[#e7d7b1] indent-3">Saad Ansari</p>
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-4xl font-extralight text-[#a9adbd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.9 }}
                    >
                        A Newbie passionate<br />  about crafting
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 3.2 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-[#e7d7b1] text-5xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-medium text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 3.5 }}
                    >
                        Web Solutions
                    </motion.p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="flex- flex-col space-y-4 md:hidden mt-20">
                <motion.h1
                    className="text-4xl font-medium text-[#fdfdfd]"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                   Hi,I am<p className="text-[#e7d7b1] indent-3">Saad Ansari</p>
                </motion.h1>
                <div className="space-y-2">
                    <motion.p
                        className="text-5xl font-black text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-[#e7d7b1] text-6xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-black text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Applications
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default HeroText;