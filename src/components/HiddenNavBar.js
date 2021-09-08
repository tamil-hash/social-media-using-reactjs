import Contacts from "./Contacts";
import userLogo from "./images/user-logo.jpg";

const HiddenNavBar = ({ isActive, users }) => {
  return (
    <section className={`hidden-navbar ${isActive && "active-navbar"} `}>
      <div className="user">
        <img className="logo" src={userLogo} alt="user-logo" />
        <h4>Tamilselvan</h4>
      </div>
      <Contacts users={users} addClass={"contact-list"} />
    </section>
  );
};

export default HiddenNavBar;
