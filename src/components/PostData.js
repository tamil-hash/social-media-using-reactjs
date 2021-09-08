import post1 from "./images/post1.jpg";
import post2 from "./images/post2.jpg";
import post3 from "./images/post3.jpg";
import post4 from "./images/post4.jpg";
import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpg";
import user3 from "./images/user3.jpg";
import user4 from "./images/user4.jpg";

const PostData = [
  {
    id: 1234,
    user: { name: "Richard", img: user1 },
    cap: "Watching Rick and Morty",
    img: post1,
    interaction: { like: 256, comment: 2, share: 4 },
    comments: [
      {
        com_id: 11,
        user: "Henry",
        img: user2,
        comment: "Watched the show nice one",
      },
      { com_id: 12, user: "rachel", img: user3, comment: "Sample comment" },
    ],
  },
  {
    id: 2345,
    user: { name: "Henry", img: user2 },
    cap: "Some testing caption",
    img: post2,
    interaction: { like: 324, comment: 3, share: 20 },
    comments: [
      { com_id: 21, user: "Richard", img: user1, comment: "sample comment 0" },
      { com_id: 22, user: "rachel", img: user3, comment: "Sample comment 1" },
      { com_id: 23, user: "Hannah", img: user3, comment: "Sample comment 2" },
    ],
  },
  {
    id: 3456,
    user: { name: "Rachel", img: user3 },
    cap: "Nice one",
    img: post3,
    interaction: { like: 22, comment: 1, share: 0 },
    comments: [
      { com_id: 31, user: "Hannah", img: user3, comment: "Sample comment2" },
    ],
  },
  {
    id: 4567,
    user: { name: "Hannah", img: user4 },
    cap: "Liked the show",
    img: post4,
    interaction: { like: 1005, comment: 1, share: 322 },
    comments: [
      {
        com_id: 41,
        user: "Richard",
        img: user1,
        comment: "some random comment",
      },
    ],
  },
];

export default PostData;
