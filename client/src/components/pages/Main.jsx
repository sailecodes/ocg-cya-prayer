import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import axiosFetch from "../../utilities/axiosFetch.js";

import styled from "styled-components";

const MainWrapper = styled.section`
  display: grid;
  place-items: center;

  height: 100%;

  padding: 4rem 2rem;

  .main--tag {
    color: var(--color-primary);

    font-size: 2.2rem;
    text-align: center;

    margin-bottom: 2rem;
  }

  .main--tag span {
    display: inline-block;

    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form > input {
    color: var(--color-primary);

    width: 28rem;
    height: 4rem;

    font-size: 1.8rem;

    padding: 0 1rem;
    margin-bottom: 2rem;
    border: 1px solid var(--color-border);
  }

  form > button {
    color: var(--color-white);
    background-color: var(--color-primary);

    height: 4rem;

    width: 28rem;

    font-size: 1.8rem;
  }

  @media (min-width: 769px) {
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
      <div className="main--center-container">
        <p className="main--tag">
          If you have any silent requests, please let us know below! <br />
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
    </MainWrapper>
  );
};
export default Main;
