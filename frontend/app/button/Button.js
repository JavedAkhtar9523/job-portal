import Link from "next/link";
import React from "react";

export default function LinkButton({ redirection, name, linkclassname = "" }) {
  return (
    <>
      <Link
        href={`${redirection}`}
        className={` text-black font-semibold mx-2  sm:px-2 py-1  rounded ${linkclassname}`}
      >
        {name}
      </Link>
    </>
  );
}
