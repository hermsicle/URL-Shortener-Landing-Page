import React from 'react';
import ReactLoading from 'react-loading';
import { usePromiseTracker } from "react-promise-tracker";

function Loading(props) {
    const { promiseInProgress } = usePromiseTracker();
    return (
    promiseInProgress && (
    <div className="loader">
        <ReactLoading type="bubbles" color='lime' height={50} width={50} />
    </div>
    )
);
}

export default Loading;