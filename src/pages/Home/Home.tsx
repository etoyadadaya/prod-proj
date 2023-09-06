import {Navbar} from "@widgets/Navbar/Navbar";
import {Sidebar} from "@widgets/Sidebar/Sidebar";
import React from "react";

import {Content, Wrapper} from "./Home.styled";

const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  );
};

export default Home;
