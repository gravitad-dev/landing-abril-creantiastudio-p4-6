import data from '../data.json';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="flex w-full p-4 bg-white overflow-hidden text-blue-gray_Custom">
      <div className="flex flex-col px-2 justify-center items-center mx-auto w-full">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mx-auto text-sm py-10 gap-2 lg:gap-4 gap-y-6">
          <a
            href="/"
            className="flex items-center hover:text-blue-light_Custom cursor-pointer"
          >
            <div className="flex items-center gap-2 w-max">
              <img
                src={data['logo-color'].url}
                alt={data['logo-color'].alt}
                className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer"
              />
              <p className="font-bold text-xl">{data['logo-color'].text}</p>
            </div>
          </a>
          <div className="w-full flex items-center justify-center md:justify-end gap-4 lg:gap-10 flex-wrap px-4">
            {data['section-footer'].links.map((link, index) => (
              <Link
                to={link.href}
                spy={false}
                smooth={true}
                duration={500}
                key={index}
                offset={-75}
                className="cursor-pointer"
              >
                <p
                  key={index}
                  className="hover:text-blue-light_Custom cursor-pointer text-[16px]"
                >
                  {link.text}
                </p>
              </Link>
            ))}
            <a href={data.blog.url} target="_blank">
              <p className="hover:text-blue-light_Custom cursor-pointer text-[16px]">
                {data.blog.title}
              </p>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-center w-[95vw] mx-auto text-sm flex-wrap gap-4">
          <div>
            <p>{data['section-footer'].rights}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="hover:text-blue-light_Custom cursor-pointer">
              {data['section-footer'].terms}
            </p>
            <p className="hover:text-blue-light_Custom cursor-pointer">
              {data['section-footer'].privacy}
            </p>
            <a
              href={`mailto:${data.contact.email}?subject=Contact`}
              className="cursor-pointer"
            >
              <p className="hover:text-blue-light_Custom">
                {data['section-footer'].contact}
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
