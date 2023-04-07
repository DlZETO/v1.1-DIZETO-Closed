import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function PaginationSecond({ back, value }) {
  return (
    <>
      <div className="mx-auto my-6 block w-max lg:hidden">
        <div className="flex items-center gap-x-5">
          <Link className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white" to={back}>
            <ImArrowLeft2 />
          </Link>
          {value}
        </div>
      </div>
    </>
  );
}
