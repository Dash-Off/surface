import React from "react";
import { SiInstagram } from "react-icons/si";
import { TfiTwitterAlt } from "react-icons/tfi";
import { ImLinkedin } from "react-icons/im";

const FollowUs = () => {
  return (
    <div className=" bg-followUs-background h-[500px] bg-no-repeat w-full bg-cover">
      <div className="flex justify-between">
        <div className="ml-32">
          <img
            className="h-[500px] opacity-30 rounded-full"
            src="/src/assets/WritingOnDesk.webp"
            alt="Not Here"
          />
        </div>

        <div className="grid grid-cols-1 mr-56 mt-14">
          <div className="flex m-5">
            <div className="social-icon text-2xl mt-5">
              <SiInstagram className="text-5xl text-black" />
            </div>
            <div className="w-[400px] ml-5">
              <h1 className="font-bold text-3xl">Instagram</h1>
              <p className="text-xl">
                {" "}
                Lorem ipsum dolor sit amet, cont nostrum quis officia harum
                temporibus assumenda a?
              </p>
            </div>
          </div>

          <div className="flex m-5">
            <div className="social-icon text-2xl mt-5">
              <TfiTwitterAlt className="text-5xl text-black" />
            </div>
            <div className="w-[400px] ml-5">
              <h1 className="font-bold text-3xl">Twitter</h1>
              <p className="text-xl">
                {" "}
                Lorem ipsum dolor sit amet, cont nostrum quis officia harum
                temporibus assumenda a?
              </p>
            </div>
          </div>

          <div className="flex m-5">
            <div className="social-icon text-2xl mt-5">
              <ImLinkedin className="text-5xl text-black" />
            </div>
            <div className="w-[400px] ml-5">
              <h1 className="font-bold text-3xl">LinkedIn</h1>
              <p className="text-xl">
                {" "}
                Lorem ipsum dolor sit amet, cont nostrum quis officia harum
                temporibus assumenda a?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
