import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar/SearchBar";

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data = await response.json();
        console.log(data?.results);
        setCards(data?.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCards = ({ search }) => {
    return cards?.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className=" flex  justify-evenly py-10">
        <h1 className=" font-bold text-4xl ">Pokemon Cards</h1>
        <SearchBar value={search} onChange={handleSearchChange} />
      </div>
      <div className="max-w-7xl mx-auto py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {filteredCards({ search })?.map((card) => (
          <Card key={card.name} name={card.name} image={card.url} />
        ))}
      </div>
    </div>
  );
};
