import { useCallback } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import "./style.css";

export const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = useCallback((e: any) => {
    console.log(
      "CHANGED:",
      e.detail.tagify.value, // Array where each tag includes tagify's (needed) extra properties
      e.detail.tagify.getCleanValue(), // Same as above, without the extra properties
      e.detail.value // a string representing the tags
    );
  }, []);

  return (
    <div className="mt-8 sm:min-w-[320px] max-w-[400px]">
      <Tags onChange={onChange} placeholder="Search..." />
      <small className="text-gray-700 text-lg">
        <i>Separate keywords with a comma or enter key</i>
      </small>
      <div className="flex justify-center mt-4 w-full">
        <button className=" bg-red-500 py-3 px-6 rounded-full text-white  ring-red-300 focus:ring-4 transition duration-200 hover:scale-105 transform text-xl inline-block w-full h-[45px]">
          Search
        </button>
      </div>
    </div>
  );
};
