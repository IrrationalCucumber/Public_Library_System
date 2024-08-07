import React from "react";

export default function AccountListItem(props) {
  return (
    <>
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
    </>
  );
}
