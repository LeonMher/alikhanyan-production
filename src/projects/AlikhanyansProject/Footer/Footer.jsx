import phoneIcon from "../../../assets/icons/phone.png";
import locationIcon from "../../../assets/icons/loc.png";
import clockIcon from "../../../assets/icons/clock.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12 p-8 md:p-12 bg-white text-black border-t border-gray-200">
      <div className="time-location-info flex flex-col gap-6 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <img className="icon" src={phoneIcon} alt="" />
          <p className="text-base md:text-lg">055-241-333</p>
        </div>
        <div className="flex items-start gap-3">
          <img className="icon" src={locationIcon} alt="" />
          <p className="text-base md:text-lg">
            Մաշտոցի պողոտա 8/11, Փակ շուկայի դիմացի մայթին
          </p>
        </div>
        <div className="flex items-center gap-3">
          <img className="icon" src={clockIcon} alt="" />
          <p className="text-base md:text-lg">24/7/365</p>
        </div>
      </div>
      <div className="text-base md:text-lg w-full md:w-1/2 flex flex-col gap-4">
        <p className="font-semibold">Thank You for Choosing Alikhanyan's Project!</p>
        <p>
          We're honored to be part of your musical journey. Whether you're here
          to record, learn, or create, we're committed to providing the best
          experience. Stay tuned for updates, special offers, and exclusive
          content!
        </p>
      </div>
    </div>
  );
};

export default Footer;
