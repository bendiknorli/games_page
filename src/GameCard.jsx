import React from "react";
import SearchIcon from "./search.svg";

const GameCard = ({ game }) => {
    return (
        <a className="movie" key={game.id} href={game.link}>
            <div>
                <p>{game.released}</p>
            </div>

            <div>
                <img src={game.background_image} alt={game.name} />
            </div>

            <div>
                <span>{game.genres.map((genre) => (
                    genre.name + " "
                ))}</span>
                <h3>{game.name}</h3>
                <span>({game.rating})</span>
            </div>

        </a>
    )
}

export default GameCard;