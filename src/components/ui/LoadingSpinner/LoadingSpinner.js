import React from "react";
import spinner from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
    return (
        <div className="w-[80%] mx-auto text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
            <div 
            className={spinner.spinner}
            />
        </div>
    )
};

export default LoadingSpinner;