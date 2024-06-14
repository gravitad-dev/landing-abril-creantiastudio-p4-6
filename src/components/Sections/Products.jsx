import data from '../../data.json';

function Products() {
  return (
    <div className="sm:py-20 flex flex-col items-center justify-start space-y-2 bg-products-pattern bg-cover p-4 text-blue-gray_Custom">
      <section id="products">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-12 p-4 w-full">
          <div className="p-4 flex items-center gap-4">
            {/* <img
              src={data['section-products'].pic1.url}
              alt={data['section-products'].pic1.alt}
              className="object-cover max-w-[30vw] sm:h-[25vw] sm:max-w-[200px] rounded-md border-2 border-blue-gray_Custom"
            /> */}
            <img
              src={data['section-products'].pic2.url}
              alt={data['section-products'].pic2.alt}
              className="object-cover w-[70vw] h-[50vw] sm:h-[35vw] xl:max-w-[600px] xl:max-h-[350px] rounded-lg border-2 border-blue-gray_Custom shadow-lg shadow-blue-lightgray_Custom"
            />
          </div>
          <div className="text-center sm:text-start sm:max-w-[30vw]">
            <p className="font-bold text-xl sm:text-4xl sm:mb-4 ShadowText">
              {data['section-products'].title}
            </p>
            <p className="text-[14px] sm:text-md ShadowText sm:leading-8 font-[500]">
              {data['section-products'].paragraph}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
