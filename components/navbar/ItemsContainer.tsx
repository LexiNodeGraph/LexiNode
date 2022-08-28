import React from "react";

function ItemsContainer({children}: any) {
    return (
        <div className="hidden justify-between md:flex">
            <div className="ml-10 items-center flex space-x-4">{children}</div>
        </div>
    );
}

export default ItemsContainer;
