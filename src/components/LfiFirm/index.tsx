import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const LFiFirm = ({ label, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {label}
      </button>
    </div>
  );
};

export default LFiFirm;
