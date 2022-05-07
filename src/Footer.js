import React from "react";

import { useStore } from "store/store";
import { usePosts } from "store/query";

function Footer() {
  const { clear } = useStore();
  const { data, error, isFetching } = usePosts();

  console.log(data);

  return (
    <div
      style={{
        padding: "1rem 3rem",
        background: "blue",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {JSON.stringify(data)}
      <h2>Navbar</h2>
      <h2>Hello Navbar page</h2>
      <button onClick={clear}>Nullify</button>
    </div>
  );
}

export default Footer;
