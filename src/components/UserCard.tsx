import { useState } from "react";
import { SlUserFollow,  } from "react-icons/sl"
import { BiBlock, BiCircle} from "react-icons/bi"
// @ts-ignore
const UserCard = ({ user }) => {
    const [expanded, setExpanded] = useState(false);
    const [followed, setFollowed] = useState(false);
    const [blocked, setBlocked] = useState(false);
  
    const toggleFollow = () => {
      setFollowed(!followed);
    };
  
    const blockUser = () => {
      setBlocked(true);
    };
  
    const onClickUser = () => {
      if (!blocked) {
        setExpanded(!expanded);
      }
    };
    function formatReputation(num: number): string {
        let formattedNum = parseFloat(num.toFixed(2));
        let suffix = '';
      
        if (num >= 1000000) {
          formattedNum /= 1000000;
          suffix = 'M';
        } else if (num >= 1000) {
          formattedNum /= 1000;
          suffix = 'K';
        }
      
        return formattedNum.toFixed(2) + suffix;
      }
  
      return (
        <div
        key={user.user_id}
        className={`flex flex-col hover:cursor-pointer justify-between w-full ${blocked ? 'bg-gray-200' : ''}`}
        onClick={onClickUser}
      >
        <div className="flex flex-row items-center gap-5  my-5">
          <div className="flex bg-black rounded-full w-auto h-auto">
            <img src={user.profile_image} alt="" className="flex rounded-full" width={100} height={100} />
          </div>
  
          <div className="flex flex-col ">
            <p className="text-2xl font-bold text-[#33CFB7]">{user.display_name}</p>
            
            <div className="flex flex-row items-center ">

            <BiCircle size={20} fontWeight={"bold"} color="green"  />
            <p className="font-bold text-xl"> {formatReputation(user.reputation)}</p>
            </div>
          </div>
        </div>
  
        {expanded && (
          <div className="flex flex-row mt-4 my-5 w-auto">
            <button className="follow-btn items-center gap-2 flex flex-row px-4 py-2 bg-[#3D1152] border-2 border-[#3D1152] text-white font-semibold rounded" onClick={toggleFollow}>
            <SlUserFollow size={20} />
              {followed ? 'Unfollow' : 'Follow'}
            </button>
            <button className="block-btn items-center flex flex-row gap-2 px-4 py-2 bg-gray-300 text-white rounded ml-2" onClick={blockUser}>
            <BiBlock size={20} />
              Block
            </button>
          </div>
        )}
  
        <div>
          <hr className="h-0.5 bg-gray-700 w-full" />
        </div>
      </div>
      );
  };

  export default UserCard;