import { useEffect } from 'react' 

const Portfolio = (props) => {
    return (
        <>
            <div className="portfolio-images">
                <a href="https://hoistm.netlify.app"  target="_blank" rel="noreferrer">       
                <img
                    className="d-block w-100 portfolio-img"
                    src="./hoistm.png"
                    alt="hoist{m} web preview"
                /></a>
                <h3 className="portfolio-header">hoist&#123;m&#125;</h3>
                <p className="portfolio-text">This app allows users to upload files into a virtual file system where the user can save and download their files. Users can create custom labels as the singular & simple method for file organization. This is a full-stack MERN app using AWS S3 cloud storage and Multer middleware for file upload. </p>
            </div>
            <div className="portfolio-images passengerk">
                <a href="https://estebbins.github.io/passenger.k/"  target="_blank" rel="noreferrer">       
                <img
                    className="d-block w-100 portfolio-img"
                    src="./passengerk.png"
                    alt="passenger.k web preview"
                /></a>
                <h3 className="portfolio-header">passenger.k</h3>
                <p className="portfolio-text">This app allows users to upload files into a virtual file system where the user can save and download their files. Users can create custom labels as the singular & simple method for file organization. This is a full-stack MERN app using AWS S3 cloud storage and Multer middleware for file upload. </p>
            </div>
            <div className="portfolio-images">
                <a href="https://steamee.fly.dev/"  target="_blank" rel="noreferrer">       
                <img
                    className="d-block w-100 portfolio-img"
                    src="./steamee.png"
                    alt="steameeweb preview"
                /></a>
                <h3 className="portfolio-header">steamee</h3>
                <p className="portfolio-text">This is a full-stack Node application designed to help users discover and suggest local co-op games available on Steam. All too frequently, couples, friends, or just any two strangers in a room, scour the internet for good local co-op games, just to find the same three websites, recommending the same handful of games they've already played!</p>
            </div>
        </>
    )
}



export default Portfolio