import { PerPage } from "@/hooks";
import { FC } from "react";
import ArrowLeft from "remixicon-react/ArrowLeftLineIcon";
import ArrowRight from "remixicon-react/ArrowRightLineIcon";
import ReactPaginate from "react-paginate";

import "./style.css";

interface IProps {
  total: number;
  page: number;
  handlePageClick(value: { selected: number }): void;
}

export const Pagination: FC<IProps> = ({
  handlePageClick,
  page = 1,
  total = 0,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={
        <button
          className="h-[40px] w-[91px] flex items-center justify-center bg-red-500 text-[1.4rem]"
          type="button"
          style={{
            border: "1px solid #D0D5DD",
            boxShadow: "0px 1px 2px rgba,(16, 24, 40, 0.05)",
            borderRadius: "8px",
          }}
        >
          <ArrowLeft size="18px" />
          <div className="ml-1"> Prev </div>
        </button>
      }
      nextLabel={
        <button
          className="h-[40px] w-[75px] flex items-center justify-center bg-red-500 text-[1.4rem]"
          type="button"
          style={{
            border: "1px solid #D0D5DD",
            boxShadow: "0px 1px 2px rgba,(16, 24, 40, 0.05)",
            borderRadius: "8px",
          }}
        >
          <div className="ml-1"> Next </div>
          <ArrowRight size="18px" />
        </button>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      forcePage={page - 1}
      pageCount={Math.ceil(total / PerPage)}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item page-prev"
      previousLinkClassName="page-link"
      nextClassName="page-item page-next"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      renderOnZeroPageCount={() => null}
    />
  );
};
