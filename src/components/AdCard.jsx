import React, { useState } from "react";

export default function AdCard(props) {
  return (
    <div className="choosing-us-card">
      <div className="choosing-us-card-logo">{props.icon}</div>
      <h1 className="choosing-us-card-title">{props.title}</h1>
      <p className="choosing-us-card-subtitle">{props.children}</p>
    </div>
  );
}
