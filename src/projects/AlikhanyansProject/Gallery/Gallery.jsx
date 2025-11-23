import { project } from "../../../data/project";

const Gallery = () => {
  return (
    <div id="our-singers" className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[40px] text-black text-center mb-12 font-semibold tracking-wide">
          Our Singers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto px-4 place-items-center">

          {project.map((artist, index) => (
            <div
              key={index}
              className="w-72 h-[370px] bg-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-center items-center pt-10 px-4"
            >
              {/* Avatar inside container */}
              <img
                src={artist.img}
                alt={artist.fullName}
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-md"
              />

              {/* Content */}
              <div className="text-center mt-6 text-black">
                <h2 className="font-semibold text-xl">{artist.fullName}</h2>
                <p className="font-medium text-sm mt-1 text-gray-700">{artist.instrument}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
