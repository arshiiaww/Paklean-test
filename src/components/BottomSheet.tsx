import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BsCursorFill } from "react-icons/bs";

const BottomSheet: React.FC = () => {
    return (
        <>
            <div className="w-full h-20 fixed bottom-0 left-0 right-0 shadow-[0_20px_40px_-4px_black]">
                <div className="flex justify-end items-center w-full h-24 fixed bottom-0 left-0 right-0 shadow-[0_25px_15px_0px_black]">
                    <Link to="/">
                        <div className="flex flex-col items-center my-auto mr-4">
                            <IoPerson className="fill-blue scale-150" />
                            <p className="text-[13px] text-blue font-bold mt-[4.8px]">Profile</p>
                        </div>
                    </Link>
                </div>
                <Link to="/" className="absolute top-[-30%] left-2/4 -translate-x-1/2">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-blue hover:shadow-[0px_5px_15px_0px_#3b82f6]">
                        <BsCursorFill className="scale-150" style={{fill: "#373737"}} />
                    </div>
                </Link>
            </div>
        </> 
     );
}
 
export default BottomSheet;