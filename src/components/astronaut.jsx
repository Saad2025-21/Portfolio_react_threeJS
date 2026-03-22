import { motion } from "motion/react";
const Astro = () => {
    return (
        <>
            <div class="hero relative min-h-screen">

                {/* <!-- Astronaut Wrapper --> */}
                <div class="absolute left-[11em] top-[15%]  pointer-events-none">
                    {/* <!-- Orb --> */}
                    <motion.div
                        class=" animate-[float_5s_ease-in-out_infinite] w-[450px] h-[450px] rounded-full grid place-items-center 
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]
                border border-[rgba(231,215,177,0.25)]
                shadow-[0_0_40px_rgba(231,215,177,0.25),inset_0_0_20px_rgba(255,255,255,0.1)]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.3,duration: 2 }}>

                        {/* <!-- Astronaut --> */}
                        <img src="../assets/astronaut.png" alt="Floating astronaut"
                            class="w-[105%] relative -scale-x-100 bottom-[22px] left-[12px]
                    drop-shadow-[0_10px_30px_rgba(239,237,237,0.93)]" />
                    </motion.div>

                </div>
            </div>
        </>
    );
}

export default Astro;



