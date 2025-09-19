'use client'

import React, { useEffect, useRef } from 'react';

export default function Page() {
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        const handleNext = () => {
            if (slideRef.current) {
                const items = slideRef.current.querySelectorAll('.item');
                if (items.length > 0) {
                    slideRef.current.appendChild(items[0]);
                }
            }
        };

        const handlePrev = () => {
            if (slideRef.current) {
                const items = slideRef.current.querySelectorAll('.item');
                if (items.length > 0) {
                    slideRef.current.prepend(items[items.length - 1]);
                }
            }
        };

        next?.addEventListener('click', handleNext);
        prev?.addEventListener('click', handlePrev);

        return () => {
            next?.removeEventListener('click', handleNext);
            prev?.removeEventListener('click', handlePrev);
        };
    }, []);

    return (
        <div className="container">
            <div className="slide" ref={slideRef}>
                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)" }}>
                    <div className="content">
                        <div className="name">Switzerland</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)" }}>
                    <div className="content">
                        <div className="name">Finland</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)" }}>
                    <div className="content">
                        <div className="name">Iceland</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)" }}>
                    <div className="content">
                        <div className="name">Australia</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)" }}>
                    <div className="content">
                        <div className="name">Netherland</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>

                <div
                    className="item"
                    style={{ backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)" }}>
                    <div className="content">
                        <div className="name">Ireland</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="button">
                <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
}
