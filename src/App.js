import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import GameCard from "./GameCard";

const game0 = {
    "id": 1,
    "name": "Math Laner",
    "released": "2022-10-28",
    "background_image": "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/364720/1000117/FF4012-image-75.jpg",
    "rating": 4.98,
    "genres": [{ "name": "Math", }, { "name": "Strategy", }],
    "link": "https://playcanv.as/p/IXx5LmRr/"

}

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

    const [games, setGames] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const searchGames = async (searchInput) => {
        const response = await fetch(`https://rawg.io/api/games?token&key=${API_KEY}`);
        const data = await response.json();

        data.results.unshift(game0);

        setGames(data.results.filter(game => game.name.toLowerCase().includes(searchInput)));
    }

    useEffect(() => {
        searchGames("");
    }, []);

    return (
        <div>
            <h1>The Game Center</h1>

            <div className="search">
                <input placeholder="Search for a game"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img src={SearchIcon}
                    alt="search-icon"
                    onClick={() => searchGames(searchTerm.toLowerCase())} />
            </div>

            {games?.length > 0 ? (
                <div className="container">
                    {games.map((game, index) => (
                        <GameCard game={game} key={index} />

                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No games found</h2>
                </div>
            )}

        </div>
    );

}

export default App;