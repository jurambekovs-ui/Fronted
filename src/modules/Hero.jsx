import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16  to-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8BAC3E] leading-tight mb-6">
              Good Food Us <br />
              Good Mood
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              I would think that conserving our natural resources, and should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button title={"Daftar Sekarang"} />
              <Button extraClass={'bg-[#F2F2F2] !text-black'} title={"About Us"} />
            </div>
          </div>

          
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="./src/assets/images/fodd.svg" 
                alt="Green Salad Tomato"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl"
              />

              <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-58 bg-white rounded-[17px] shadow-lg w-[292px] h-[93px] sm:w-[292px] sm:h-[93px] flex items-center gap-3">
                <div className="w-[53px] h-[53px] right-[-40px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src="src/assets/images/fodd.svg" alt="" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Green Salad Tomato</p>
                  <div className="flex items-center gap-1">
                    <img src="./src/assets/images/stars.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;