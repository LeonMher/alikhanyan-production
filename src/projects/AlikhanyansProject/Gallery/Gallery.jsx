import { project } from "../../../data/project";

const Gallery = () => {
  return (
    <div className="bg-red-950 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[40px] text-white text-center mb-12 font-semibold tracking-wide">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center">
          {project.map((artist, index) => (
            <div
              key={index}
              className="w-72 h-[370px] bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center pt-10 px-4"
            >
              {/* Avatar inside container */}
              <img
                src={artist.img}
                alt={artist.fullName}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
              />

              {/* Content */}
              <div className="text-center mt-6 text-white">
                <h2 className="font-semibold text-xl">{artist.fullName}</h2>
                <p className="font-medium text-sm mt-1">{artist.instrument}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
