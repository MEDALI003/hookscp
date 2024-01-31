import React, { useEffect, useState } from 'react'
import moviesData from './Data'
import MovieCard from './MovieCard'
import Inputs from './Inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import InputSearch from './InputSearch'
const MovieList = () => {
    const [movies,setMovies]=useState(moviesData)
    const [id,setId]=useState(0)
    const [title,setTitle]=useState("")
    const [rate,setRate]=useState(0)
    const [description,setDescription]=useState("")
    const [urlm,setUrl]=useState("")
    const [poster,setPoster]=useState("")
    const [style,setStyle]=useState({display:"none"})
    const [filtre,setFilter]=useState("")
    const [sfiltre,setFiltres]=useState({display:"none"})
    const [frate,setFrate]=useState("")
    const Ajouter = () => {
        setStyle({display:"flex",justifyContent:"center"})
        setFiltres({display:"none"})
    }
    const Ajouterf =()=>{
        setMovies([...movies,{Id:id,rate:rate,title:title,description:description,trailer:urlm,posterUrl:poster}])
        setStyle({display:"none"})
    }
    const Search = ()=>{
      setFiltres({display:"flex",justifyContent:"center"})
      setStyle({display:"none"})
    }
    useEffect(() => {
      const chercher = () => {
        if ((filtre)&&(frate==="")) {
          setMovies(moviesData.filter(el => (el.title.toLowerCase().includes(filtre.toLowerCase().trim()))||(el.description.toLowerCase().includes(filtre.toLowerCase().trim()))));
          console.log(frate)
        }
        else if((frate!=="")&&!(filtre)) {
          setMovies(moviesData.filter(x=>frate==x.rate))
        }
        else if((filtre!=="") && (frate!="")) {
          setMovies(moviesData.filter(el => ((el.title.toLowerCase().includes(filtre.toLowerCase().trim()))||(el.description.toLowerCase().includes(filtre.toLowerCase().trim())))&&frate==el.rate));
        }
        else if((filtre==="") && (frate==="")) {
          setMovies(moviesData)
        }
        
      };
  
      chercher(); 
    }, [filtre,frate]);
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            
           <FontAwesomeIcon  onClick={()=>Ajouter()}icon={faPlus} />
           <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>Search()} />
            </div>
            <div style={sfiltre}>
              <InputSearch  setFilter={setFilter} setFrate={setFrate} />
            </div>
            <div style={style}>
             <Inputs setId={setId} setPoster={setPoster} setRate={setRate} setTitle={setTitle} setUrl={setUrl} setDescription={setDescription} />
             <button onClick={()=>Ajouterf()}>Add the Data</button>
            </div>
            <div>
            </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {movies.map(el=><div style={{margin:"30px"}}><MovieCard  Id={el.id} Poster={el.posterUrl} Rate={el.rate} Title={el.title} Url={el.trailer} Description={el.description}/></div>)}
        </div>
    </div>
  )
}

export default MovieList