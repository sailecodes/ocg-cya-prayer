import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.main`
  .layout--header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;

    padding: 0 2rem;
    /* border-bottom: 1px solid var(--color-border); */
  }

  .layout--header > p {
    color: var(--color-primary);

    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    text-align: center;
  }

  @media (min-width: 769px) {
    .layout--header > p {
      font-size: 3.4rem;
    }
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <header className="layout--header">
        <p>Logo</p>
      </header>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
