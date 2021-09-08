const Contacts = ({ users, addClass }) => {
  return (
    <aside className={addClass}>
      <header>
        <h1>Contacts</h1>
        <input type="text" placeholder="search..." />
      </header>
      <div className="contacts">
        {users.map(({ isActive, name, picture }, index) => (
          <div key={index} className="single-contact">
            <div className="img-container">
              <img className="user-logo" src={picture} alt="" />
              <div
                className={`status ${isActive ? "active" : "inactive"}`}
              ></div>
            </div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Contacts;
