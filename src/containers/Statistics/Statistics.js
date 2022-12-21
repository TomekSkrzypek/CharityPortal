import React from "react";
import "./Statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-column">
        <h2 className="statistics-number">10</h2>
        <h3 className="statistics-title">BAGS GIVEN</h3>
        <p className="statistics-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="statistics-column">
        <h2 className="statistics-number">5</h2>
        <h3 className="statistics-title">ORGANISATIONS HELPED</h3>
        <p className="statistics-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="statistics-column">
        <h2 className="statistics-number">7</h2>
        <h3 className="statistics-title">ORGANIZED COLLECTIONS</h3>
        <p className="statistics-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  );
};

export default Statistics;
