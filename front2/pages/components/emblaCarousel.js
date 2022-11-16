import React, { useState, useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/img/carouselle";


const SCALE_FACTOR = 3;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scaleValues, setScaleValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
      return numberWithinRange(scale, 0, 1);
    });
    setScaleValues(styles);
  }, [embla, setScaleValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__slide__inner"
                style={{ transform: `scale(${scaleValues[index]})` }}
              >
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default EmblaCarousel;
