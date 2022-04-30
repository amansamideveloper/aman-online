import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";
// import TableDropdown from '../../../components/Dropdowns/TableDropdown'
import TableDropdown from './Action'
export default function Travelcard(props) {

    const travels = props.travels.travels

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    "bg-white"
                }
            >
                {console.log(props.contract.contract)}
                {props.contract.contract ? <p className="bg-red-500 text-white text-center p-3">Deleted successfully</p> : null}
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative  px-4 max-w-full flex-grow flex">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    "text-blueGray-700"
                                }
                            >
                                Travels
                            </h3>
                            <Link href="/admin/contract/addcontract" className={
                                "font-semibold text-lg " +
                                "text-blueGray-700 p-1 ml-4 rounded-md bg-teal-400"
                            }>
                                Add Travel
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +

                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Number
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +

                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Departure
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Destination
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Date of Travel
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Bus Name
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Number of seats
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                    }
                                >
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {travels && travels.success ? travels.success.map((item, i) => (
                                <tr>

                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                                        <span
                                            className={
                                                "ml-3 font-bold " + "text-blueGray-600"
                                            }
                                        >
                                            {i + 1}
                                        </span>
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item.departure}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item.destination}
                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item.travel_date}

                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item.bus?.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item?.seats}

                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {item.price}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        <TableDropdown id={item._id} />
                                    </td>
                                </tr>
                            )) : ''}

                            {/* <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="/img/angular.jpg"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>{" "}
                                    <span
                                        className={
                                            "ml-3 font-bold " + "text-blueGray-600"
                                        }
                                    >
                                        Angular Now UI Kit PRO
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $1,800 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                                    completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="/img/team-1-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="/img/team-2-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-3-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-4-470x470.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                <div
                                                    style={{ width: "100%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="/img/sketch.jpg"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>{" "}
                                    <span
                                        className={
                                            "ml-3 font-bold " + "text-blueGray-600"
                                        }
                                    >
                                        Black Dashboard Sketch
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $3,150 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="/img/team-1-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="/img/team-2-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-3-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-4-470x470.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">73%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                <div
                                                    style={{ width: "73%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="/img/react.jpg"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>{" "}
                                    <span
                                        className={
                                            "ml-3 font-bold " + "text-blueGray-600"
                                        }
                                    >
                                        React Material Dashboard
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $4,400 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-teal-500 mr-2"></i> on
                                    schedule
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="/img/team-1-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="/img/team-2-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-3-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-4-470x470.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">90%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                <div
                                                    style={{ width: "90%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                    <img
                                        src="/img/vue.jpg"
                                        className="h-12 w-12 bg-white rounded-full border"
                                        alt="..."
                                    ></img>{" "}
                                    <span
                                        className={
                                            "ml-3 font-bold " + "text-blueGray-600"
                                        }
                                    >
                                        React Material Dashboard
                                    </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    $2,200 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                                    completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <img
                                            src="/img/team-1-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                        ></img>
                                        <img
                                            src="/img/team-2-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-3-800x800.jpg"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                        <img
                                            src="/img/team-4-470x470.png"
                                            alt="..."
                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                        ></img>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2">100%</span>
                                        <div className="relative w-full">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                <div
                                                    style={{ width: "100%" }}
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <TableDropdown />
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


