import React from 'react';

import "./Skeleton.css"

const SkeletonElement = () => {

    return(
        <div>
            <div className="skeleton">
                <div className="skeleton-image">
                <img 
                    width="100%" 
                    height="250px"
                />
                </div>
                <div className="skeleton-body">
                    <div className="skeleton-info">
                        <div className="skeleton-date"></div>
                        <div className="skeleton-source"></div>
                    </div>
                    <div >
                        <div className="skeleton-title"></div>
                        <div className="skeleton-title"></div>
                        <div className="skeleton-title"></div>
                        <div className="skeleton-title"></div>
                    </div>
                    <div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text"></div>
                    </div>
                    <div className="skeleton-btn"></div>
                </div>
            </div>
        </div>
    );
};


export default SkeletonElement;