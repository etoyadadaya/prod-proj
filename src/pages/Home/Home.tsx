import React from "react";

import {Button} from "../../components/Button/Button";
import {Wrapper} from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
      <Button color={"primary"}>Primary</Button>
      <Button color={"secondary"}>Secondary</Button>
      <Button disabled={true}>Disabled</Button>
    </Wrapper>
  );
};

export default Home;
