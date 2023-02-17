import React from "react";

export const ButtonPrimary = ({children}) => {
  return (
    <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full " data-testid="btn-primary">
     {children}
    </button>
  );
};
