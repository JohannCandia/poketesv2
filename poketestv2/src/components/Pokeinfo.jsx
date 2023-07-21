import React from "react";

const Pokeinfo = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <>
      {!pokemon ? (
        ""
      ) : (
        <>
          <div className="mt-40  ">
            <center>
              <h1 className="text-3xl text-">
                #{pokemon.id} {pokemon.name}
              </h1>

              <h1 className="text-2xl">Tipo :</h1>
              {pokemon.types.map((item) => {
                return (
                  <h1 className="text-xl" key={item.type.name}>
                    {" "}
                    {item.type.name}{" "}
                  </h1>
                );
              })}

              <h1 className="text-2xl">Habilidades :</h1>
              {pokemon.abilities.map((item) => {
                return (
                  <h1 className="text-xl" key={item.ability.name}>
                    {" "}
                    {item.ability.name}{" "}
                  </h1>
                );
              })}
            </center>
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
