/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style.scss";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
    const [background, setBackgound] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackgound(bg);
    }, [data]);
    const searchQueryHandler = (e) => {
        if (( e.key === "Enter") && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
    const btnHandler = () => {
        navigate(`/search/${query}`);
    }
    return (
        <div>
            <div className="heroBanner">
                {!loading && (
                    <div className="backdrop-img">
                        <Img src={background} />
                    </div>
                )}
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <div className="title">Welcome </div>
                        <div className="subTitle">
                            Millions of movies, TV shows and people to discover. Explore Now.
                        </div>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or TV show ..."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button onClick={btnHandler}>Search</button>
                        </div>
                    </div>
                </ContentWrapper>
                <div className="opacity-layer"></div>
            </div>
        </div>
    );
};

export default HeroBanner;
