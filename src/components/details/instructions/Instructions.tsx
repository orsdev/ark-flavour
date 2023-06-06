import { FC } from "react";
import parse from "html-react-parser";

interface InstructionsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instructions: any;
}
export const Instructions: FC<InstructionsProps> = ({ instructions }) => {
  return (
    <div>
      <h1 className="my-6 mt-[100px] text-center text-6xl cursive text-gray-600">
        Instructions
      </h1>
      <div className="text-[1.3rem] px-6">
        {instructions && parse(instructions)}
      </div>
      {!instructions && (
        <p className="text-[1.4rem] text-center">
          Apologies, but the instructions for this recipe are currently
          unavailable.
        </p>
      )}
    </div>
  );
};
