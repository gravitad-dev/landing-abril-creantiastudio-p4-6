import data from '../../data.json';

function Solutions() {
  return (
    <div className="w-full">
      <section id="solutions">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-12 p-4 w-full text-blue-gray_Custom">
          <div className="text-center sm:text-start sm:max-w-[30vw]">
            <p className="font-bold text-xl sm:text-4xl sm:mb-4 ShadowText">
              {data['section-solutions'].title}
            </p>
            <p className="text-[14px] sm:text-md ShadowText sm:leading-8 font-[500]">
              {data['section-solutions'].paragraph}
            </p>
            <div className="flex items-center justify-center sm:justify-start mt-2 mx-auto gap-4">
              <a href="https://www.apple.com/la/app-store/" target="_blank">
                <button
                  className="w-28 rounded-md h-8 p-4"
                  style={{
                    backgroundImage: `url('${data['section-solutions'].button1.url}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                ></button>
              </a>
              <a href="https://play.google.com/store/apps" target="_blank">
                <button
                  className="w-28 rounded-md h-8 p-4"
                  style={{
                    backgroundImage: `url('${data['section-solutions'].button2.url}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                ></button>
              </a>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 w-full sm:w-[35vw] max-w-[500px]">
            <img
              src={data['section-solutions'].pic.url}
              alt={data['section-solutions'].pic.alt}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
