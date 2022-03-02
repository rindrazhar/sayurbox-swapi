import React from "react";
import { useQuery } from "@apollo/client";
import Image from "../assets/img/starwars-img.png";
import "../assets/styles/index.css";
import { GET_STARSHIPS } from "../ApolloClient/query";
import { Link } from "react-router-dom";

export default function Starships() {
  const { loading, error, data } = useQuery(GET_STARSHIPS);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>
        Starships{" "}
        <span className="total">({data.allStarships.totalCount})</span>
      </h1>
      <div className="content">
        {data.allStarships.starships.map((res) => {
          return (
            <Link
              key={res.id}
              to={`/${res.id}`}
              className="card-wrapper"
              style={{ textDecoration: "none" }}
            >
              <div className="card-img">
                <img src={Image} alt="" width="300" />
              </div>
              <div className="card-title">
                <h3>{res.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
