import React from "react";
import QuestionAnswer from "../../QuestionAnswer";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <QuestionAnswer {...homeObjOne} />
    </>
  );
}

export default Home;
