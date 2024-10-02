import React from "react";
import SubscribeNow from "./SubscribeNow";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <>
      <div className="custom-padding">
        <Banner />
      </div>
      <SubscribeNow />
    </>
  );
};

export default HomePage;
