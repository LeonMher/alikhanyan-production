import { project } from "../../../data/project";

const Gallery = () => {
  return (
    <div className="bg-red-950 flex-col gap-30">
      <h1 className="text-[40px] text-white text-center pt-11">Gallery</h1>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 justify-center items-center bg-red-950 pt-16 pb-16">
        {project.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="gallery-title flex items-center justify-center"></div>
            <div className="pictures-layout">
              <div className="w-[330px] md:w-[500px]">
                <img src={project.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
