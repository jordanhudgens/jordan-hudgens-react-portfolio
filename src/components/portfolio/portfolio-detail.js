import React from "react";

export default function(props) {
  return (
    <div>
      <h2>Portfolio Detail for {props.match.params.slug}</h2>
    </div>
  );
}
