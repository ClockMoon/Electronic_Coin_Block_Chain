import React from "react";
import Link from "next/link";
import "./styles.scss";
const Index: React.FunctionComponent = () => {
  return (
    <div className="IndexPage">
      <Link href="/coin">
        <a> Go Coin</a>
      </Link>
    </div>
  );
};

export default Index;
