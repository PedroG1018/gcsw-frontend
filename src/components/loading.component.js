import React from "react";
const loadingImg = "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

/**
 * Basic loading image hook
 */
const Loading = () => (
    <div className="spinner">
        <img src={loadingImg} alt="Loading..." />
    </div>
)

export default Loading;