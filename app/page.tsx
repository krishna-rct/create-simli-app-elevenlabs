"use client";
import React, { useEffect, useState } from "react";
import SimliElevenlabs from "@/app/SimliElevenlabs";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import GitHubLogo from "@/media/github-mark-white.svg";

interface avatarSettings {
  elevenlabs_agentid: string;
  simli_faceid: string;
}

// Customize your avatar here
const avatar: avatarSettings = {
  elevenlabs_agentid: "fWQ5jRzKZIs01rwqQt7N",
  simli_faceid: "0062aefc-2ac6-43ec-87b3-be431b0bcf7c",
};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          {showDottedFace && <DottedFace />}
          {selectedLanguage ? (
            <SimliElevenlabs
              agentId={avatar.elevenlabs_agentid}
              simli_faceid={avatar.simli_faceid}
              onStart={onStart}
              onClose={onClose}
              showDottedFace={showDottedFace}
              language={selectedLanguage}
            />
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-xl font-bold mb-4">Select Language</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedLanguage("english")}
                  className="bg-simliblue text-white py-3 px-6 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 min-w-[120px]"
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLanguage("hindi")}
                  className="bg-simliblue text-white py-3 px-6 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 min-w-[120px]"
                >
                  Hindi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
