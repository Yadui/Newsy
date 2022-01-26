import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

import Hero_section from '../heroSection/Hero_section'
import Headline_section from '../headlineSection/Headline_section'
import Information from '../informationSection/Information'
import Footer from '../footerSection/Footer'
import Caraousel from '../AboutSection/Caraousel.js';


const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();


    const reLoadPage = () => {
        // eslint-disable-next-line no-restricted-globals 
        location.reload()
    }

    
    const NewHeadline = () => {
        return (
            <div className="headline-ALAN-section">
                <div className="container-center">
                    <div className="headline-section-container">
                        <div className="headline-header headline-center">
                            <h2>Unrivalled intelligence on the Technology sector</h2>
                            <p>
                                Leveraging our proprietary panel of 15 million people worldwide, YouGov 
                                has over 10 years of data and insights on the Technology sector. Explore 
                                a range of curated highlights on the latest in digital trends below, or 
                                contact us to dig much, much deeper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(!articles.length){
        return (
            <div>
                <Hero_section />
                <Information />
                <Headline_section />
                <Footer />
            </div>
        )
    }
    
    return (
        <div>
            <Hero_section />
            <Information />
            <NewHeadline />
            <div>
                <div className='alanGoBackBtn'>
                    
                    <button onClick={reLoadPage}>&#8592; Go back</button>
                </div>
                <Grow in>
                    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                        {articles.map((article, i) => (
                            <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                            <NewsCard articles={article} activeArticle={activeArticle} i={i} />
                            </Grid>
                        ))}
                    </Grid>            
                </Grow>
            </div>
            <Footer />
        </div>
    );
}

export default NewsCards;
