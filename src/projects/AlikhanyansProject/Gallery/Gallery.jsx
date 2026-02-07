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
              className="w-56 h-[280px] bg-gray-50 border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center pt-6 px-4"
            >
              {/* Avatar inside container */}
              <img
                src={artist.img}
                alt={artist.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
              />

              {/* Content */}
              <div className="text-center mt-4 text-black">
                <h2 className="font-semibold text-lg">{artist.fullName}</h2>
                <p className="font-medium text-xs mt-1 text-gray-700">{artist.instrument}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
