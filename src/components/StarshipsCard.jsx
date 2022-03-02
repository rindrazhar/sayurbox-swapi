import React from "react";
import { useQuery } from "@apollo/client";
import Image from "../assets/img/starwars-img.png";
import "../assets/styles/index.css";
import { GET_STARSHIPS } from "../ApolloClient/query";

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
      <div className="content">
        {data.allStarships.starships.map((res) => {
          return (
            <div
              key={res.id}
              to={`/starships/${res.id}`}
              className="card-wrapper"
            >
              <div className="card-img">
                <img src={Image} alt="" width="300" />
              </div>
              <div className="card-title">
                <h3>{res.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
