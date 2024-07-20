import React from "react";
import Assistant from "../../components/Assistant/Assistant";
import TextEditor from "../../components/TextEditor/TextEditor";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Test = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex w-[100%] justify-between">
          <TextEditor />
          <Assistant />
        </div>
      </div>
    </div>
  );
};

export default Test;
