import phoneIcon from "../../../assets/icons/phone.png";
import locationIcon from "../../../assets/icons/loc.png";
import clockIcon from "../../../assets/icons/clock.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="flex flex-row">
      <div className="time-location-info">
        <div className="flex items-center">
          <img className="icon" src={phoneIcon} alt="" />
          <p>055-241-333</p>
        </div>
        <div className="flex items-center">
          <img className="icon" src={locationIcon} alt="" />
          <p>Մաշտոցի պողոտա 8/11, Փակ շուկայի դիմացի մայթին</p>
        </div>
        <div className="flex items-center">
          <img className="icon" src={clockIcon} alt="" />
          <p>24/7/365</p>
        </div>
      </div>
      <div className="text-sm w-[400px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio
        temporibus, quasi fuga soluta incidunt unde numquam tempora est
        veritatis nobis quae saepe dicta necessitatibus iusto aut explicabo
        inventore earum.
      </div>
    </div>
  );
};

export default Footer;
