import { useCallback } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import { useAppDispatch } from "@/store/store";
import { _updateSearch } from "@/store/slices/filter";

import "./style.css";

type CallbackProps = {
  detail: {
    tagify: { getCleanValue(): { value: string }[] };
  };
};

export const Search = () => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = useCallback(
    (e: CallbackProps) => {
      const value = e.detail.tagify.getCleanValue();
      const serializeValue = value?.map((val) => val?.value || "");
      dispatch(_updateSearch(serializeValue.join(",+")));
    },
    [dispatch]
  );

  return (
    <div className="mt-8 sm:min-w-[320px] max-w-[400px]">
      <Tags onChange={onChange} placeholder="Search..." />
      <small className="text-gray-700 text-lg">
        <i>Separate keywords with a comma or enter key</i>
      </small>
    </div>
  );
};
