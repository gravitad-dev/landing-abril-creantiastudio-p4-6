import data from '../../data.json';

function Posts() {
  return (
    <div className="py-12 px-4">
      <section id="posts">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl py-8 sm:text-4xl sm:mb-4 text-blue-gray_Custom">
            {data['section-posts'].title}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-blue-gray_Custom">
            {data['section-posts'].cards.map((card) => (
              <a href={card.link} target="_blank" key={card.id}>
                <div className="flex flex-col justify-center items-start p-2 space-y-2">
                  <img
                    src={card.image.url}
                    alt={card.image.alt}
                    className="object-cover w-[90vw] sm:w-[45vw] md:w-[30vw] max-w-[400px] h-[200px] rounded-xl mx-auto shadow-sm shadow-blue-gray_Custom"
                  />
                  <div className="flex flex-col px-2 mt-4 w-full break:w-4/5 break2:w-full md:w-full md:px-0 mx-auto">
                    <p className="font-bold">{card.title}</p>
                    <p className="">{card.paragraph}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Posts;
