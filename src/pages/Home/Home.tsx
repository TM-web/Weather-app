import React from 'react';
import classes from "./Home.module.scss";

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes["home__head"]}>
                <div className={classes["head_left"]}>
                    <h2>Country Uzbekistan</h2>
                    <h1>Tashkent</h1>
                </div>
                <div className={classes["head_right"]}>

                </div>
            </div>

            <div className={classes["home__body"]}>
                <div className={classes["body_left"]}>
                    <strong>28<sup>&#9900;</sup>C</strong>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className={classes["body_right"]}></div>
            </div>
            <div className={classes["home__footer"]}></div>

        </div>
    );
};

export default Home;