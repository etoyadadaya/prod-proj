import styled from "styled-components";

export const StyledSidebar = styled.div`
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background: var(--inverted-bg-color);
  position: relative;
  transition: width 0.3s;
  padding: 20px;
  color: #fff;
`;
