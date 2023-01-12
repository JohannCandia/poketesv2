import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
        
    },[url])
 
  return (
   <>
        <div className="flex bg-red-600 mx-auto text-center">
           <div className="w-1/2">
                <div className="flex flex-wrap mx-16 text-white border-2 border-white my-5 h-screen overflow-y-scroll" >
                        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                </div>    
                <div>
                { prevUrl && <button onClick={()=>{
                                setPokeData([])
                                setUrl(prevUrl)}}
                            className="bg-red-600 text-2xl text-white p-2 mt-10 mx-12 border-2 border-white mb-6 hover:bg-red-500"> Anterior </button>
                            }
                            <button onClick={()=>{
                                setPokeData([])
                                setUrl(nextUrl)}}
                            className="bg-red-600 text-2xl text-white p-2 mt-10 mx-12 border-2 border-white mb-6 hover:bg-red-500"> Siguiente </button>
                            
                
                </div>  
            </div> 

            
                       
               
            
                <div className=" text-white w-1/2 border-2 border-white mx-16 my-5 ">
                    <Pokeinfo pokemon={pokeDex}/>
                </div>
        </div>
   </>
  )
}

export default Main
