import React from "react";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

const Stats = ({ text }) => {
  //Characters
  const numberOfCharacters = text.length;

  //Words
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;

  // Instagram

  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - text.length;

  //Facebook

  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - text.length;

  return (
    <div className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat
        number={text.length > 280 ? "Limit Exceeded" : instagramCharactersLeft}
        label="Instagram"
      />
      <Stat
        number={text.length > 2200 ? "Limit Exceeded" : facebookCharactersLeft}
        label="Facebook"
      />
    </div>
  );
};

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className="stat_number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
