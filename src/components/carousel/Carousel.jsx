import React, { useRef } from "react";
import "./style.scss";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import CircleRating from "../circleRating/CircleRating";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import Genres from "../genres/Genres";
const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            let date = item.release_date || item.first_air_date;
                            if (date === null) {
                                date = "Empty";
                            }
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                                    }
                                    className="carouselItem"
                                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <CircleRating
                                            className="circleRating"
                                            rating={item.vote_average.toFixed(1)}
                                        />
                                        <Genres data={item.genre_ids.slice(0, 2)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{item.title || item.name}</span>
                                        <span className="date">
                                            {date
                                                ? dayjs(date).format("MMM D , YYYY")
                                                : "No Date Found"}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <span className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </span>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
