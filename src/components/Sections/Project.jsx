import data from '../../data.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-12 sm:pt-12 pt-0 px-4">
      <div className="text-center text-blue-gray_Custom">
        <section id="project">
          <p className="font-bold text-xl pt-4 sm:text-4xl sm:mb-4 ShadowText">
            {data['section-project'].title}
          </p>
        </section>
        <p className="text-[14px] sm:text-md ShadowText sm:leading-8 font-[500] px-4">
          {data['section-project'].subtitle}
        </p>
      </div>
      <Slider {...settings} className="mx-auto mt-8 text-blue-gray_Custom">
        {data['section-project'].cards.map((card, index) => (
          <div
            key={index}
            className="border-2 border-blue-gray_Custom rounded-xl sm:max-w-[98%] mb-4"
          >
            <img
              src={card.image.url}
              alt={card.image.alt}
              className="w-full max-h-40 object-cover rounded-t-xl"
            />
            <div className="px-4 mt-4 text-left">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-md mt-2">{card.subttile}</p>
              <a href={card.action.url} target="_blank">
                <div className="flex items-center justify-start gap-4 py-4 hover:text-blue-light_Custom">
                  <p className="">{card.action.text}</p>
                  <IoIosArrowRoundForward size={30} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
