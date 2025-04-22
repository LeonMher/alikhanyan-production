import { project } from "../../../data/project";

const Gallery = () => {
  return (
    <div className="bg-red-950 flex-col gap-30">
      <h1 className="text-[40px] text-white text-center pt-11">Gallery</h1>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 justify-center items-center bg-red-950 pt-16 pb-16">
        {project.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="gallery-title flex items-center justify-center"></div>
            <div className="pictures-layout">
              <div className="w-[330px] md:w-[400px]">
                <img className="rounded-2xl" src={project.img} alt="" />
                <div className="flex items-center justify-center">
                  <div className="flex gap-5 items-center">
                    <span className="text-white text-[20px]">
                      {project.fullName}
                    </span>
                    <span className="text-white text-[20px]">
                      {project.instrument}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
