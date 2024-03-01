import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import axiosFetch from "../../utilities/axiosFetch.js";
import bnw from "../../assets/imgs/bnw.png";

import styled from "styled-components";

const MainWrapper = styled.section`
  .main--hero {
    position: relative;

    display: grid;
    place-items: center;

    height: 45rem;

    padding: 4rem 2rem;
    margin-bottom: 12rem;
  }

  .main--hero:before {
    content: "";

    position: absolute;
    z-index: -1;

    background-image: url(${bnw});
    background-size: cover;

    height: 45rem;
    width: 100%;

    opacity: 30%;
  }

  .main--hero p {
    color: var(--color-white);

    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
  }

  .main--hero span {
    color: var(--color-primary);
  }

  .main--daily-verse {
    color: var(--color-white);

    font-size: 1.8rem;
    font-style: italic;
    text-align: center;

    padding: 0 2rem;
    margin-bottom: 12rem;
  }

  .main--daily-verse span {
    display: inline-block;

    margin-top: 1rem;
  }

  .main--prayer-request {
    padding: 0 2rem;
  }

  .main--prayer-request-tag {
    color: var(--color-white);

    font-size: 2rem;
    text-align: center;

    margin-bottom: 2rem;
  }

  .main--prayer-request-tag span {
    display: inline-block;

    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10rem;
  }

  form > input {
    color: var(--color-primary);

    width: 28rem;
    height: 4rem;

    font-size: 1.8rem;

    padding: 0 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-border);
  }

  form > button {
    color: var(--color-white);
    background-color: var(--color-primary);

    height: 4rem;

    width: 28rem;

    font-size: 1.8rem;
  }

  .main--join {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 20rem;

    font-size: 2.4rem;
    text-align: center;

    padding: 2rem;
    margin-bottom: 10rem;
  }

  .main--join span {
    text-decoration: underline;
  }

  .main--stats-count {
    color: var(--color-white);

    font-size: 2rem;
    text-align: center;

    padding: 0 2rem;
    margin-bottom: 10rem;
  }

  .main--stats-count span {
    display: inline-block;

    color: var(--color-primary);

    font-size: 4rem;
    margin: 1rem 0;
  }

  .main--footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: var(--color-white);

    height: 16rem;

    font-size: 1.8rem;
  }

  .main--footer a {
    color: var(--color-white);

    font-size: 1.6rem;
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    .main--goal,
    .main--tag {
      font-size: 2.4rem;
    }

    form > input,
    form > button {
      height: 4.2rem;

      font-size: 2rem;
    }
  }
`;

const Main = () => {
  const [silentPrayerInput, setSilentPrayerInput] = useState("");

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data) => {
      return axiosFetch.post("/silent-prayer", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    onSuccess: () => {
      setSilentPrayerInput("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  return (
    <MainWrapper>
      <div className="main--hero">
        <p>
          Our goal is to create a <span>safe space</span> for you to share your prayer requests.
        </p>
      </div>
      <p className="main--daily-verse">
        &quot;If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all
        unrighteousness.&quot;
        <br />
        <span>1 John 1:9 NIV</span>
      </p>
      <div className="main--prayer-request">
        <p className="main--prayer-request-tag">
          If you have any silent requests, please let us know below!
          <br />
          <span>We want to keep you in our prayers.</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="silentPrayer"
            value={silentPrayerInput}
            onChange={(e) => setSilentPrayerInput(e.target.value)}
            placeholder="Enter anonymously..."
          />
          <button type="submit">
            {isPending ? (
              <ClipLoader
                size={12}
                color={"var(--color-white)"}
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <div className="main--join">
        <p className="main--join-tag">
          Interested in joining our prayer community? Contact us at <span>ocgcya@ocg.com</span>
        </p>
      </div>
      <p className="main--stats-count">
        Our community has prayed for
        <br />
        <span>6 prayer requests</span>
        <br />
        and counting!
      </p>
      <footer className="main--footer">
        Check us out
        <a
          href="https://ocgrace.churchcenter.com/home"
          target="_blank"
          rel="noopener noreferrer">
          OCGrace
        </a>
      </footer>
    </MainWrapper>
  );
};
export default Main;
