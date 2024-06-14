import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import data from '../../data.json';
import Layout from '../ui/Layout';
import PropTypes from 'prop-types';

const Testimonials = () => {
  const testimonials = data['section-testimonials'].clients;

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="text-xl text-blue-custom">
        <FaAngleRight className="arrow-right hover:text-red-custom active:text-blue-custom text-5xl hover:text-blue-light_Custom" />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="text-xl text-blue-custom">
        <FaAngleLeft className="arrow-left hover:text-red-custom active:text-blue-custom text-5xl hover:text-blue-light_Custom" />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 542,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Layout>
      <section id="testimonials">
        <div className="px-4 py-10 bg-amber_Custom text-blue-gray_Custom">
          <div className="mx-auto mt-2 relative">
            <img
              src={data['section-testimonials'].bg.url}
              alt={data['section-testimonials'].bg.alt}
              className="hidden lg:block absolute right-24 -top-10 max-w-[300px] h-96 object-cover overflow-x-visible"
            />
            <Slider
              {...settings}
              className="flex items-center justify-center mx-auto gap-4 w-[80vw] max-w-[1024px]"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex mx-auto justify-center items-center p-6 w-full"
                >
                  <div className="flex flex-col lg:flex-row self-end items-center justify-end mb-4 gap-4">
                    <div className="w-full flex flex-col items-center sm:w-[60%] md:w-[55%] lg:w-1/2 text-left px-4">
                      <p className="font-[500] italic">
                        {testimonial.paragraph}
                      </p>
                      <div className="self-start mt-4">
                        <p className="font-[500]">{testimonial.name},</p>
                        <p className="font-bold">{testimonial.role}</p>
                      </div>
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[80vw] sm:w-full max-w-[300px] max-h-[250px] min-h-[250px] object-cover rounded-xl border-2 border-blue-gray_Custom"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};

Testimonials.propTypes = {
  onClick: PropTypes.func,
};

export default Testimonials;
