import { useEffect, useState } from "react";

const dummyMovies = [
    {
    id: 1,
    title: "Inception",
    year: 2010,
    age: "PG-13",
    genre: "Sci-Fi, Thriller",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    trailer: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  },
  { 
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    age: "PG-13",
    genre: "Action, Crime",
    description:
      "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    trailer: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  },
  
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    age: "PG-13",
    genre: "Sci-Fi, Drama",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
    trailer: "https://media.w3.org/2010/05/video/movie_300.mp4",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    age: "PG-13",
    genre: "Action, Superhero",
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    trailer: "https://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    age: "R",
    genre: "Action, Sci-Fi",
    description:
      "A hacker discovers the reality he's living in is a simulation and joins a rebellion against the machines.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    trailer: "https://media.w3.org/2010/05/video/movie_300.mp4",
  },
];

export default function Main() {
const [showTrailer,setShowTrailer]= useState(false);
const [selection,setSelection]= useState(dummyMovies[0]);

useEffect (()=>{
    setShowTrailer(false);
    const timer=setTimeout(()=>
    {setShowTrailer(true);},3000)

    return ()=>clearTimeout(timer);
},[selection]);

  return (
    <div className="relative z-0 w-full h-screen bg-cover bg-center transition-all duration-500 ml-28" style={{backgroundImage:`url(${selection.backdrop})`}}>

    {showTrailer?(<video
    autoPlay
    muted
    loop
    className="absolute w-full h-full object-cover"
    src={selection.trailer}></video>):(<img 
    className="absolute w-full h-full object-cover"
    src={selection.poster}></img>)}

      <div className="absolute image-card bottom-6 right-6 flex gap-2 bg-black/30 p-3 rounded">
        {dummyMovies.map((movie)=>(
            <img
            key={movie.id}
            src={movie.poster}
            alt={movie.title}
            className='  h-16 w-auto rounded cursor-pointer hover:scale-105 transition-transform'
            onClick={()=>setSelection(movie)}></img>
        ))}
      </div>

      <div className="description absolute bottom-10 left-10 z-10 max-w-xl text-white">
        <h1>{selection.title}</h1>
        <p>{selection.description}</p>
      </div>
    </div>
  )
}

