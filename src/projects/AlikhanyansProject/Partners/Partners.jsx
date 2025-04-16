// import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";
import Instagram from '../../../assets/project/instagram.jpeg';
// import Logo from '../../../assets/logos/alikhanyans_project.png';
import './Partners.css';

const About = () => {
  const PartnerLogos = [
    Instagram,
    Instagram,
    Instagram,
    Instagram,
    Instagram,
    Instagram,
    Instagram,
    Instagram,
    Instagram,
  ];

  return (
    <div className="flex flex-col  gap-[30px] p-12 bg-black text-gray-300">
      <div className="flex justify-center">
        <span className="text-5xl font-bold mb-10">Our Partners</span>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center">
        <div className="flex flex-col justify-center items-center md:items-start gap-[30px]">
          <div className="partners-logos">
         {PartnerLogos.map((logo, index) => (
          <div className="partner-logo" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default About;
