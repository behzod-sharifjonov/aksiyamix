import React, { useState } from 'react';
import './Card.css';
import { FaMapMarkerAlt } from "react-icons/fa";

function CardUi({ item }) {
    const [hoveredImage, setHoveredImage] = useState('first'); // Track which image to show

    return (
        <div className="card">
            <div className="image-container">
                {hoveredImage === 'first' && (
                    <img
                        src="https://api.aksiyamix.uz/media/discounts/images/2024/10/06/1000040224.jpg"
                        alt="Left Hover"
                        className="card-image"
                    />
                )}
                {hoveredImage === 'second' && (
                    <img
                        src="https://api.aksiyamix.uz/media/discounts/images/2024/10/06/1000040201.jpg"
                        alt="Center Hover"
                        className="card-image"
                    />
                )}
                {hoveredImage === 'third' && (
                    <img
                        src="https://api.aksiyamix.uz/media/discounts/images/2024/10/06/1000040198.jpg"
                        alt="Right Hover"
                        className="card-image"
                    />
                )}

                {/* Hover zones */}
                <div
                    className="hover-zone left-zone"
                    onMouseEnter={() => setHoveredImage('first')}
                ></div>
                <div
                    className="hover-zone center-zone"
                    onMouseEnter={() => setHoveredImage('second')}
                ></div>
                <div
                    className="hover-zone right-zone"
                    onMouseEnter={() => setHoveredImage('third')}
                ></div>
            </div>
            <div className="card-content">
                <div className="store-brend">
                    <div className="store-logo">
                        <img src="https://api.aksiyamix.uz/media/stores/aksiya*mix/logos/1000039811.jpg" alt="" />
                    </div>
                    <div className="store-name">
                        <span>Aksiya  Mix</span>
                    </div>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-price">{item.price}</p>
                <strong className="card-discount">{item.discounts}</strong>
                <div className="card-location">
                    <div className="card-map-location">
                        <FaMapMarkerAlt /> <span>Tashkent</span>
                    </div>
                    <div className="card-date">
                        <span>2 okt - 10 okt</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUi;
