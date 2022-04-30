import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTableTicket({ color }) {
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Card Tables
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">

                </div>
            </div>
        </>
    );
}

CardTableTicket.defaultProps = {
    color: "light",
};

CardTableTicket.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
