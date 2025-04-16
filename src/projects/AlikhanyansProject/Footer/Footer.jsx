import phoneIcon from "../../../assets/icons/phone.png";
import locationIcon from "../../../assets/icons/loc.png";
import clockIcon from "../../../assets/icons/clock.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full flex flex-row md:flex-row justify-around items-center p-[20px] bg-blue-950 text-white">
      <div className="time-location-info flex flex-col justify-between  gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <img className="icon" src={phoneIcon} alt="" />
          <p className="md:text-[10px]">055-241-333</p>
        </div>
        <div className="flex items-start gap-[10px]">
          <img className="icon" src={locationIcon} alt="" />
          <p className="md:text-[10px]">
            Մաշտոցի պողոտա 8/11, Փակ շուկայի դիմացի մայթին
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <img className="icon" src={clockIcon} alt="" />
          <p className="md:text-[10px]">24/7/365</p>
        </div>
      </div>
      <div className="text-sm w-[400px] md:text-[10px] mt-[10px] flex flex-col gap-[10px]">
        <p>Thank You for Choosing Alikhanyan’s Music Studio!</p>
        <p>
          We’re honored to be part of your musical journey. Whether you’re here
          to record, learn, or create, we’re committed to providing the best
          experience. Stay tuned for updates, special offers, and exclusive
          content!!
        </p>
      </div>
    </div>
  );
};

export default Footer;
