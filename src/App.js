import React, { useEffect, useState } from 'react';
import './App.css';
import News from './components/News';

function App() {

    // Current date to fetch news for yesterday
    const d = new Date();
    let date = d.getDate() - 1; 
    let month = d.getMonth() + 1; // Month starts from 0
    let year = d.getFullYear();
    // let fullDate = year + "-" + month + "-" + date;
    let fullDate = "2024-3-31";

    // Enter your apiKey here
    const apiKey = "3aae81b8578048eb8d35095d90bd7351"; 

    // State variables to store fetched articles and selected category
    let [articles, setArticles] = useState([]);
    let [category, setCategory] = useState("india");

    // Fetch news articles based on selected category and date
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${category}&language=en&from=${fullDate}&apiKey=${apiKey}`)
        .then((response) => response.json())
        .then((news) => {
            setArticles(news.articles);
            // console.log(news.articles); // Log fetched articles to console
        })
        .catch((err) => {
            // Log error if fetching fails
            console.log("error", err); 
        });
    }, [category, fullDate]); // Trigger useEffect when category or fullDate changes

    return (

        <React.Fragment>

            {/* Header section */}
            <div className="header py-3">

                <strong className="branding">
                    News Hub
                </strong>

                {/* Search input field */}
                <input 
                    type="text" 
                    placeholder="Search News" 
                    className="border-1 rounded-3 w-25  p-1" 
                    onChange={(event) => {
                        if (event.target.value !== ""){
                            // Update category state based on user input
                            setCategory(event.target.value); 
                        } 
                        else {
                            // Default category to India if search input is empty
                            setCategory("india"); 
                        }
                    }}
                />
            </div>

            {/* News articles section */}
            <section className='news-articles my-3'>
                {
                    articles.length !== 0 ?
                    articles.map((article, index) => {
                        return (
                            // Pass each article as props to News component
                            <News key={index} article={article} /> 
                        );
                    }) :
                    // Display message if no news articles are found
                    <h3>No News Found</h3> 
                }
            </section>
            
        </React.Fragment>
    );
}

export default App;
