"use client";

import { BeatLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="spinner mt-60 mb-60">
      <BeatLoader color="#00DFA2" margin={2} size={16} speedMultiplier={1} />
    </div>
  );
}

export default Spinner;

<BeatLoader color="#00DFA2" />;
