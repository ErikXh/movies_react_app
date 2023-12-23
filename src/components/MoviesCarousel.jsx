import { useState } from "react"

function Carouel () {

    const index = 0;

    const movies = [
        {
            img: 'https://i0.wp.com/www.heyuguys.com/images/2015/10/star-wars-the-force-awakens-poster-landscape.jpg?fit=1536%2C864&ssl=1',
            alt: 'Star wars',
            desc: "Star Wars"
        },
        {
            img: 'https://images.squarespace-cdn.com/content/v1/507b2f30e4b066e116488db6/1366581664395-1EOF0V8KL1COY6OENC67/Oblivion-Poster.jpg',
            alt: 'Oblivion',
            desc: "Oblivion"
        },        
        {
            img: 'https://www.tallengestore.com/cdn/shop/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_745d5009-8298-4bf9-9efa-fd77fd18131a.jpg?v=1577693343',
            alt: 'Jurassic park',
            desc: "Jurassic park"
        }
    ];

    function changeImg(){

        movies[index].img;
        movies[index].alt;
        movies[index].desc;
    }

    // function rightArrow(index){
    //     index = (index - 1 + movies.length) % movies.length;
    //     changeImg(index)
    //     console.log('clicked right')
    // }

    // function leftArrow(index){
    //     index = (index + 1) % movies.length;
    //     changeImg(index)
    //     console.log('clicked left')
    // }


    return(
        <div className="c-container">

        <div className="carousel">
            <button type="button" className="indication-btn" onClick={()=>{
                index = (index - 1 + movies.length) % movies.length;
                changeImg()
            }}>
                <i className="ri-arrow-drop-left-line"></i>
            </button>
            <div>
                <img src={movies[index].img} alt={movies[index].alt}/>
                <div className="movie-desc">
                <h1>{movies[index].desc}</h1>
                <button className="watch-btn">Watch Now</button> 
                </div>

            </div>
            <button type="button" className="indication-btn" onClick={()=>{
                index = (index + 1) % movies.length;
                changeImg()
            }}>
                <i className="ri-arrow-drop-right-line"></i>
            </button>
        </div>

    </div>
    )
}

export default Carouel