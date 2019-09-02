import React from "react";
import "./styles.scss";
import axios from "axios";
const Index: React.FunctionComponent = () => {
  const requestCreateBlock = e => {
    e.preventDefault();
    axios.post("http://localhost:3065/blocks");
  };

  const requestGetBlock = async () => {
    const data = await axios.get("http://localhost:3065/blocks");
    console.log(data);
  };

  return (
    <div className="IndexPage">
      <div onClick={requestGetBlock}>get Block</div>
      <form onSubmit={requestCreateBlock}>
        <button>Create Block</button>
      </form>
    </div>
  );
};

export default Index;
