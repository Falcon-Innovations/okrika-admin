import React, {ReactNode} from 'react'
import {useKeenSlider} from 'keen-slider/react';
import "keen-slider/keen-slider.min.css"
import classnames from 'classnames';

export type CarouselProps = {
    children?: ReactNode[]
    className?: string
    speed?: number
    withControls?: boolean
    playbackTimeout?: number
}

export function Carousel({children, className = '', speed = 15000}: CarouselProps) {

    const animation = {duration: speed, easing: (t: number) => t};
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            slides: {perView: 4, spacing: 4},
            loop: true,
            renderMode: 'precision',
            mode: 'free',
            drag: true,
            created(s) {
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
        },
    );




    return (
        <div ref={sliderRef} className={classnames("keen-slider w-full", className)}>
            {!!children ? children.map((child: ReactNode, i: number) => (
                <div key={i} className="keen-slider__slide">
                    {child}
                </div>
            )) : null}
        </div>
    )
}
