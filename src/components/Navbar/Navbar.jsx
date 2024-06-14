import { useState, useEffect } from 'react';
import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-screen px-8 xl:px-12 py-2 flex justify-between items-center h-[78px] text-white
      ${
        isScrolled
          ? 'bg-fucsia_Custom-translucent backdrop-blur-lg'
          : 'bg-fucsia_Custom backdrop-blur-none'
      }
      shadow-none transition-all duration-300`}
    >
      <div className="flex items-center justify-between w-full">
        <a
          href="/"
          className="flex items-center hover:text-amber_Custom cursor-pointer"
        >
          <img
            src={data.logo.url}
            alt={data.logo.alt}
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] mr-2"
          />
          <p className="font-bold text-xl">{data.logo.text}</p>
        </a>
        <div className="hidden sm:flex items-center justify-between gap-2 md:gap-6 xl:gap-8 ml-6">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-75}
              className=" cursor-pointer"
            >
              <p
                className="text-md hover:text-amber_Custom sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={data['section-header'].blog.href}
            key={data['section-header'].blog.id}
            target="_blank"
            className=" cursor-pointer"
          >
            <p className="text-md hover:text-amber_Custom sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].blog.text}
            </p>
          </a>
          <a
            href={`mailto:${data.contact.email}?subject=Contact`}
            className="cursor-pointer"
          >
            <p className="text-md  hover:text-amber_Custom sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].contact.text}
            </p>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-white flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
