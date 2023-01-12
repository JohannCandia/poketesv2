import React from 'react'

const Card = ({pokemon, loading, infoPokemon}) => {
   
  return (
    <>
    {
        loading ? <h1>Loading...</h1> : pokemon.map((item)=>{
            return(
                <div className="bg-red-600 w-1/4 p-4 m-4 rounded-lg border-2 border-white hover:bg-red-500" key={item.id} onClick={()=>infoPokemon(item)}>
                    <h1 className="text-2xl text-center">{item.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt={item.name}/>
                </div>
            )
        })

           
    }
  </>
  )
}


export default Card

