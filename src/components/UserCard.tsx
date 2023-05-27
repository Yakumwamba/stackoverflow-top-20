// Import necessary libraries and components
import { useState } from "react";
import { SlUserFollow, SlUserFollowing, SlUserUnfollow } from "react-icons/sl";
import { BiBlock, BiStar } from "react-icons/bi";
import { toast } from "react-toastify";
import Avater from "./Avater";
import { formatReputation } from "../utils/utils";

import { motion } from "framer-motion";

// Define animation variants for the UserCard component
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// UserCard component
const UserCard = ({ user }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Toggle follow state
  const toggleFollow = (user: string) => {
    setFollowed(!followed);
    if (!followed) {
      toast(`You followed ${user} `);
    } else {
      toast(`You unfollowed ${user} `);
    }
  };

  // Block a user
  const blockUser = (username: string) => {
    setBlocked(true);
    setFollowed(false);
    user.blocked = true;
    if (!blocked) {
      toast(`You blocked ${username} `);
    }
  };

  // Toggle expanded state when not blocked
  const onClickUser = () => {
    if (!blocked) {
      setExpanded(!expanded);
    }
  };

  // Render UserCard component
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <div
        key={user.user_id}
        className={`flex flex-col sm:scale-75 rounded-sm drop-shadow-sm shadow-sm p-5 shadow-primary  hover:cursor-pointer justify-between w-full ${
          blocked ? "bg-gray-400" : "bg-gray-100"
        }`}
        onClick={onClickUser}
      >
        <div className="flex flex-row items-center justify-between  gap-5  my-5">
          <Avater
            image={user.profile_image}
            following={followed}
            blocked={blocked}
          />

          <div className="flex flex-col gap-1 ">
            <p className="text-3xl font-bold text-primary">
              {user.display_name}
            </p>

            <div className="flex flex-row items-center gap-2 justify-end ">
              <BiStar size={20} fontWeight={"bold"} color="green" />
              <p className="font-normal text-xl text-primary">
                {" "}
                {formatReputation(user.reputation)}
              </p>
            </div>
            <div
              className={`flex flex-row gap-1 items-end justify-end ${
                followed ? "" : "hidden"
              } `}
            >
              <p className="text-xl sm:self-end font-light italic ">
                {" "}
                Following
              </p>
              <SlUserFollowing
                color="green"
                className={`${followed ? "self-end " : "hidden"}`}
                size={25}
              />
            </div>
            <div
              className={`flex flex-row gap-1 items-end justify-end ${
                blocked ? "" : "hidden"
              } `}
            >
              <p className="text-xl sm:self-end font-light italic"> Blocked</p>
              <BiBlock
                color="red"
                className={`${blocked ? "self-end " : "hidden"}`}
                size={25}
              />
            </div>
          </div>
        </div>

        {expanded && (
          <div className="flex flex-row mt-4 my-5 justify-end w-auto">
            <button
              className={`follow-btn ${
                followed ? "bg-white text-primary" : "bg-primary text-white"
              } items-center gap-2 flex flex-row px-4 py-2  border-2 border-[#3D1152]  font-semibold rounded`}
              onClick={() => toggleFollow(user.display_name)}
            >
              {followed ? (
                <SlUserUnfollow size={20} />
              ) : (
                <SlUserFollow size={20} />
              )}
              {followed ? "Unfollow" : "Follow"}
            </button>
            <button
              className="block-btn items-center flex flex-row gap-2 px-4 py-2 bg-gray-300 text-white rounded ml-2"
              onClick={() => blockUser(user.display_name)}
            >
              <BiBlock size={20} />
              Block
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserCard;
