import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <div className="carouselTitle">Top Rated</div>
                <SwitchTabs data={["Movies", "TV Show"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} endpoint={endpoint} />
        </div>
    );
};

export default TopRated;
