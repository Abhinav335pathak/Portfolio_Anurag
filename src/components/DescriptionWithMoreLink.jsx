import React, { useState, useEffect, useRef } from 'react';

const DescriptionWithMoreLink = ({ description, classes, href }) => {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const element = descriptionRef.current;
        if (element) {
            const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
            const lines = Math.floor(element.clientHeight / lineHeight);
            setIsOverflowing(lines < 4);
        }
    }, [description]);

    return (
        <div>
            <p className={`${classes} line-clamp-4`} ref={descriptionRef}>
                {description}
            </p>
            {!isOverflowing && <a href={href} className="text-blue-500"> More...</a>}
        </div>
    );
};

export default DescriptionWithMoreLink;