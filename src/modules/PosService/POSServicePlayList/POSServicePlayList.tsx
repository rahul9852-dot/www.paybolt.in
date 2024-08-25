import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import PlaylistImage from "@public/images/reliable-pos.png"; // Adjust this path as needed
import MusicIcon from "@public/Icons/MusicIcon";

const POSServicePlayList = () => {
  return (
    <>
      <h2 className="text-primary text-3xl md:text-4xl font-semibold text-center mb-2 max-w-3xl mx-auto">
        Powerful, secure and reliable POS machine{" "}
      </h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl aspect-video">
          <Image
            src={PlaylistImage}
            alt="POS Service Playlist"
            layout="fill"
            objectFit="contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary bg-opacity-80 rounded-full p-4 cursor-pointer transition-transform hover:scale-110">
              <MusicIcon className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSServicePlayList;
