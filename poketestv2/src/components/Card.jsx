import React, { useState } from "react";
import "./Card.css";
import Modal from "./Modal";

const Card = ({ pokemon, loading, infoPokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  
  const handleClick = (item) => {
    setCurrentPokemon(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentPokemon(null);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div
              className="bg-black-200 mx-2 transition-all mt-14 hover:bg-slate-200 cursor-pointer rounded-md hover:scale-105 h-[300px] w-[300px]"
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <img
                className="mx-auto h-[200px] w-[200] object-cover text-center"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${item.id}.png`}
                alt={item.name}
              />
              <span className="text-black mx-4"># {item.id} </span>
              <h1 className="text-xl font-black mx-4 text-black">
                {item.name.toUpperCase()}
              </h1>
              <div className="flex flex-row  justify-between">
                {item.types.map((type) => (
                  <div
                    className={`${type.type.name} mt-5 p-2 w-1/2 text-center`}
                  >
                    <span
                      className={`p-2 font-black mx-4 mt-4 uppercase`}
                      key={type.type.name}
                    >
                      {" "}
                      {type.type.name}{" "}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
      {isOpen && <Modal currentPokemon={currentPokemon} closeModal={handleClose} />}
    </>
  );
};

export default Card;
