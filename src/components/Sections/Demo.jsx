import data from '../../data.json';

function Demo() {
  return (
    <div className="bg-blue-light_Custom py-8 px-2 mx-auto w-full flex flex-col justify-center items-center">
      <div className="px-4 text-center text-white">
        <p className="text-xl sm:text-4xl font-bold">
          {data['section-demo'].title}
        </p>
        <p className="text-md sm:text-xl font-thin mt-2">
          {data['section-demo'].subtitle}
        </p>
        <button className="text-xs sm:text-[16px] mt-6 bg-blue-gray_Custom shadow-sm shadow-fucsia_Custom py-2 sm:py-3 px-8 rounded-md active:text-white active:shadow-none transition-all">
          {data['section-demo'].button}
        </button>
      </div>
    </div>
  );
}
export default Demo;
