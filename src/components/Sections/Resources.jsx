import data from '../../data.json';

function Resources() {
  return (
    <section id="resources">
      <div className="py-12 w-full mx-auto text-blue-gray_Custom">
        <div className="flex flex-col justify-center items-center mx-auto px-8">
          <div className="text-center sm:max-w-[50vw]">
            <p className="font-bold text-xl sm:text-4xl sm:mb-4 ShadowText">
              {data['section-resources'].title}
            </p>
            <p className="text-[14px] sm:text-md ShadowText sm:leading-8 font-[500]">
              {data['section-resources'].subtitle}
            </p>
          </div>
          <img
            src={data['section-resources'].image.url}
            alt={data['section-resources'].image.alt}
            className="p-4 w-[90vw] object-cover"
          />
        </div>
        <div className="flex items-center justify-around px-8 text-center flex-wrap">
          {data['section-resources'].row.map((item) => (
            <div
              className="flex flex-col justify-center items-center sm:w-1/3 mt-4"
              key={item.id}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="p-4 w-24 h-24 object-cover"
              />
              <p className="font-bold text-xl">{item.title}</p>
              <p className="w-4/5 text-[14px] font-[500]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Resources;
