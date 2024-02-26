import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;

  .layout--header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 10rem;

    padding: 2rem;
    border-bottom: 1px solid var(--color-border);
  }

  .layout--header > p {
    color: var(--color-primary);

    font-size: 2.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
  }

  .layout--footer {
    height: 16rem;
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
        <p>OCGrace College & Young Adults</p>
      </header>
      <Outlet />
      <footer className="layout--footer"></footer>
    </LayoutWrapper>
  );
};

export default Layout;
