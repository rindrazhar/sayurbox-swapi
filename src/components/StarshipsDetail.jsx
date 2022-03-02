import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_STARSHIPS_DETAIL } from "../ApolloClient/query";
import "../assets/styles/index.css";
import Image from "../assets/img/starwars-img.png";

export default function Starships() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_STARSHIPS_DETAIL, {
    variables: { id: params.id },
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="table-title">
        <h2>{data.starship.name}</h2>
        <Link to="/">
          <button className="button-back">Back</button>
        </Link>
      </div>
      <div className="table-img">
        <img src={Image} alt="" width="300" />
      </div>
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td className="title">Name</td>
              <td className="description">{data.starship.name}</td>
            </tr>
            <tr>
              <td className="title">Model</td>
              <td className="description">{data.starship.model}</td>
            </tr>
            <tr>
              <td className="title">Starship Class</td>
              <td className="description">{data.starship.starshipClass}</td>
            </tr>
            <tr>
              <td className="title">Manufacturers</td>
              <td className="description">{data.starship.manufacturers}</td>
            </tr>
            <tr>
              <td className="title">Cost In Credits</td>
              <td className="description">{data.starship.costInCredits}</td>
            </tr>
            <tr>
              <td className="title">Length</td>
              <td className="description">{data.starship.length}</td>
            </tr>
            <tr>
              <td className="title">Crew</td>
              <td className="description">{data.starship.crew}</td>
            </tr>
            <tr>
              <td className="title">Passengers</td>
              <td className="description">{data.starship.passengers}</td>
            </tr>
            <tr>
              <td className="title">Max Atmosphering Speed</td>
              <td className="description">
                {data.starship.maxAtmospheringSpeed}
              </td>
            </tr>
            <tr>
              <td className="title">Hyperdrive Rating</td>
              <td className="description">{data.starship.hyperdriveRating}</td>
            </tr>
            <tr>
              <td className="title">MGLT</td>
              <td className="description">{data.starship.MGLT}</td>
            </tr>
            <tr>
              <td className="title">Cargo Capacity</td>
              <td className="description">{data.starship.cargoCapacity}</td>
            </tr>
            <tr>
              <td className="title">Cargo consumables</td>
              <td className="description">{data.starship.consumables}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pilots">
        <div className="pilots-title">
          <h3>Pilots</h3>
        </div>
        <div className="pilots-wrapper">
          {data.starship.pilotConnection.pilots.map((res) => (
            <div key={res.id} className="movie-wrapper">
              <p>{res.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="films">
        <div className="films-title">
          <h3>Movie</h3>
        </div>
        <div className="movie-wrapper">
          {data.starship.filmConnection.films.map((res) => (
            <div key={res.id} className="movie-wrapper">
              <p>{res.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
