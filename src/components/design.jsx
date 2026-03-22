
const Design = () => {
    return (
        <>
            <div class="relative flex justify-center items-end mt-40">
                {/* <!-- Circle behind --> */}
                <div class="absolute w-50 h-50 rounded-full bg-white z-10
            top-17 -left-24 ">
                    {/* <!-- Astronaut on top --> */}
                    <img
                        src="../assets/astronaut.png"
                        alt="Astronaut"
                        class="relative z-10 w-64 -mb-6 rounded-full bottom-8 animate-UP opacity-0"
                    />
                </div>

                <div className="absolute z-10 -top-72 -left-16
                text-[23px] leading-4 opacity-0 animate-show">
                    <div className="relative right-40 top-58 ">
                        <p>Hi I am</p> <br /> <p className="w-35">Saad Ansari</p>
                    </div>
                    <div className="relative left-45 top-47">
                        <p>A Newbie</p> <br /> <p>Coder</p>
                    </div>
                
                    <div className="relative right-40 top-130">
                        <p className="w-45">Passionate about </p> <br /> <p>crafting</p>
                    </div>
                    <div className="relative left-45 top-117">
                        <p>Web <br /><br />solutions</p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Design;
