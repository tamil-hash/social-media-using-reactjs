import StoryData from "./StoryData";
import Story from "./Story";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Stories = () => {
  return (
    <section className="stories">
      <AiOutlineArrowLeft className="arrow icon circle arrow-left" />
      {StoryData.map((story, index) => (
        <Story key={index} {...story} />
      ))}

      <AiOutlineArrowRight className="arrow icon circle arrow-right" />
    </section>
  );
};

export default Stories;
