import React from "react";
import { Link } from "react-router-dom";

function PageLink({ children, ...props }) {
  return (
    <Link
      className="text-slate-200 hover:text-cyan-400 border-solid border-2 border-slate-400 px-6 rounded-full hover:bg-gray-900 hover:text-white"
      {...props}
    >
      {children}
    </Link>
  );
}

export default PageLink;
