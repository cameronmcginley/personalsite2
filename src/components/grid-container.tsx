import React from "react";

type Props = { children: React.ReactNode };

// const Container = ({ children }: Props) => {
export function GridContainer({ children }: Props) {
  //   return <div className="bg-red-200 w-full max-w-7xl mx-auto">{children}</div>;
  return (
    <div className="grid grid-flow-row auto-rows-max gap-0 bg-red-50 w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
}

// export default Container;
