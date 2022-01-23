import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

import Hero_section from '../sections/Hero_section'
import Headline_section from '../sections/Headline_section'
import Information from '../sections/Information'
import Footer from '../sections/Footer'




const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

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
            {/* Design a header section for This below Cards section  */}
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {articles.map((article, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard articles={article} activeArticle={activeArticle} i={i} />
                        </Grid>
                    ))}
                </Grid>            
            </Grow>
            <Footer />
        </div>
    );
}

export default NewsCards;
