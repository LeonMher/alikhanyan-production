// import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";
import Instagram from '../../../assets/project/instagram.jpeg';
import First from '../../../assets/project/partners/1.png';
import Second from '../../../assets/project/partners/2.png';
import Third from '../../../assets/project/partners/3.png';
import Forth from '../../../assets/project/partners/4.png';
import Fifth from '../../../assets/project/partners/5.png';
import Sixth from '../../../assets/project/partners/6.png';
import Seventh from '../../../assets/project/partners/7.png';
import Eighth from '../../../assets/project/partners/8.png';

// import Logo from '../../../assets/logos/alikhanyans_project.png';
import './Partners.css';

const About = () => {
  const PartnerLogos = [
    First,
    Second,
    Third,
    Forth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
  ];

  return (
    <div id="our-partners" className="flex flex-col  gap-[30px] p-12 bg-black text-gray-300">
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
