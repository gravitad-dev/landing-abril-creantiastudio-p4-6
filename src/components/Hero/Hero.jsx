import data from '../../data.json';

function Hero() {
  return (
    <section id="home">
      <div className="py-20 flex flex-col items-center justify-start space-y-2 bg-hero-pattern bg-cover w-full mx-auto">
        <div className="text-center w-full sm:w-4/5 lg:w-2/3 text-white sm:mt-8">
          <p className="text-2xl sm:text-[2.8rem] font-bold">
            {data['section-hero'].title}
          </p>
          <p className="text-2xl sm:text-6xl font-bold sm:mt-4">
            {data['section-hero'].title2}
          </p>
          <p className="text-md sm:text-xl sm:w-2/3 mx-auto sm:mt-8 font-thin px-2">
            {data['section-hero'].subtitle}
          </p>
          <button className="bg-blue-gray_Custom p-2 px-6 mt-8 rounded-md active:text-white transition-all shadow-blue-light_Custom shadow-sm active:shadow-none">
            {data['section-hero'].button}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
