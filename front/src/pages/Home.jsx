import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import WidgetBlue from '../components/widgetEvents/WidgetBlue';
import WidgetRed from '../components/widgetEvents/WidgetRed';

const Home = () => {
    return (
        <>
            <div className={"home"}>
                <div className={"home-sub-1"}></div>
                <div className={"home-sub-2"}></div>
                <div className={"home-sub-3"}></div>
                <div className={"home-sub-4"}></div>
                <div className={"home-sub-5"}></div>
                <div className={"home-sub-6"}></div>
                <div className={"home-sub-7"}></div>
                <div className={"home-sub-8"}></div>
                <div className={"home-sub-9"}></div>
                <div className={"home-sub-10"}></div>
                <div className={"home-sub-11"}></div>
                <div className={"home-sub-12"}></div>
            </div>
            <WidgetRed/>
            <WidgetBlue/>
        </>
    );
};

export default Home;