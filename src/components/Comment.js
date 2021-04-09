import React from "react";

export default function Comment({ comment }) {
  const { data } = comment;
  const { date, value } = data;

  return (
    <div key={date} className="comment">
      <div className="content">
        <a className="text">{value}</a>
        <div className="metadata">
          <span className="date">{new Date(date).toLocaleTimeString()}</span>
        </div>
        <div className="actions">
          <a href="" className="edit">
            Edit
          </a>
          <a href="" className="delete">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
