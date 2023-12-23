function Footer(){


    return(
        <footer className="footer">

        <h1 className="p-2">Check out the latest movies</h1>

            <div className="container">

                <ul className="flex justify-center w-30 space-around">
                    <li><a href="#">Genres</a></li>
                    <li><a href="#">Random Movies</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

            <div className="container">
                <h3>
                    &copy MovieLand By Erik :)
                </h3>
                
            </div>

        </footer>
    )
}

export default Footer