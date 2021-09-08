const Story = ({ name, img, story }) => {
  return (
    <div className="single-story">
      <img className="story-img" src={story} alt="soe" />
      <div className="story-user">
        <img className="story-logo logo" src={img} alt="user-logo" />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Story;
