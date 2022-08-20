import React from 'react';
import classnames from "classnames";
import './card.scss';
const Card = ({ onclick, card, index, isInactive, isFlipped, isDisabled }) => {
    const handleClick = () => {
        !isFlipped && !isDisabled && onclick(index);
    };
    return (
        <div className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
        })}
            onclick={handleClick}
        >
            <div className="card-face card-front-face">
                <img src="https://drive.google.com/file/d/1l7qtdnIr8N_klr3doY2TdUE0v9Z7y9Qm/view?usp=sharing"
                    alt="cover" />
            </div>

            <div className="card-face card-back-face">
                <img src="https://drive.google.com/file/d/1I5CY8WI7BvpIlegn3Ns1ho3ezIqoAglH/view?usp=sharing"
                    alt="cover" />
            </div>
        </div>
    );
};

export default Card; 