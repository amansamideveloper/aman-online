import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkinUser } from '../../actions/checkinAction'
import { bookingDaily } from '../../actions/dailyAction'

import { getSpritual, noBooking, bookingSpritual } from '../../actions/spritualAction'
import { checkinSpritualbuses } from "../../actions/spritualAction";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";



function Spritual(props) {
    const router = useRouter()

    const [departure, setDeparture] = useState()
    const [destination, setDestination] = useState()
    const [timeTravel, setTimeTravel] = useState()
    const [fulname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [phonenumber, setPhoneNumber] = useState()
    const [no_of_seat, setNo_of_seat] = useState()
    const [bookingForm, setbookingForm] = useState(false)
    const [datafromselect, setDataFromSelect] = useState(null)


    const serviceCharge = 20

    const checkin = (e) => {
        e.preventDefault()

        const data = {
            departure: departure,
            destination: destination,
            traveldate: timeTravel


        };
        props.checkinSpritualbuses(data)

    }
    useEffect(() => {
        props.getSpritual()
    }, [])
    // props.daily.registered.data.map((i) => (
    //     console.log(i)
    // ))
    const { data } = props.errors
    const error = props.daily.checkbus

    let success = props.daily.success



    const booking = (e) => {

        const dep = datafromselect.departure
        const des = datafromselect.destination
        const trd = datafromselect.travel_date
        const price = datafromselect.price
        const seat = datafromselect.seats
        const id = datafromselect.id
        e.preventDefault()
        const total = seat * price


        const yy = {
            fullname: fulname,
            email: email,
            phonenumber: phonenumber,
            departure: dep,
            destination: des,
            seats: seat,
            travel_date: trd,
            total: total,
            id: id
        }
        props.bookingSpritual(yy)
    }
    function buyAnother() {
        setDeparture(null)
        setDestination(null)
        setTimeTravel(null)
        setFullname(null)
        setPhoneNumber(null)
        setEmail(null)
        props.noBooking()

    }

    function selectThisbus(data) {


        const bookingData = {
            id: data._id,
            departure: data.departure,
            destination: data.destination,
            seats: data.seats,
            price: data.price,
            travel_date: data.travel_date,

        }

        setDataFromSelect(bookingData)

        setbookingForm(true)

    }
    function goback() {
        router.push('/')
    }

    if (props.daily.booking) {



        return (
            <>
                <IndexNavbar fixed />
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <i className="fas fa-award"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Congratulation</h6>
                            <p className="mt-2 mb-4 text-blueGray-500">
                                you have buy ticket for one person.

                            </p>
                            <div className="text-center mt-6">
                                <button
                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={buyAnother}>
                                    Buy another
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <IndexNavbar fixed />
            {success ? <>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}>
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            {bookingForm && <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small> Fill all the requirement for Daily Bus</small>
                                </div>
                                <form onSubmit={booking}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            value={fulname} onChange={e => setFullname(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            phoneNumber
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="For how long you need"
                                            value={phonenumber} onChange={e => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            value={email} onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>


                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                value="commercialbank"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Commercial bank
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Book
                                        </button>
                                    </div>
                                </form>
                            </div>}

                            {props.daily && props.daily.registered?.data && props.daily.registered?.data.map((res, i) => {

                                return res.available.length < 1 ? (
                                    <div key={i} className="w-full md:w-4/12 px-4 text-center cursor-pointer" onClick={() => selectThisbus(res)} >
                                        <div className={res._id === datafromselect?.id ? "relative flex flex-col min-w-0 break-words text-white bg-teal-500 w-full mb-8 shadow-lg rounded-lg" : "relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"}>
                                            <div className="px-4 py-5 flex-auto">
                                                <h6 className="text-md font-semibold"> {res.departure} to {res.destination}</h6>
                                                <h6 className="text-md font-semibold">Total {res.price}</h6>

                                                <h6 className="text-md "> service charge 20birr/person</h6>
                                                <h6 className="text-md "> Total service charge {res.seats * serviceCharge} birr</h6>
                                                <h6 className="text-md ">Total : {res.seats * serviceCharge + res.price} birr</h6>
                                                <h6 className="text-md "> Bus  {res.bus}</h6>


                                                <p className="mt-2 mb-4">{res.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                ) : <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">we have finished Spritual travel at this day</h6>
                                            <p className="mt-2 mb-4 text-blueGray-500">
                                                Try Another day

                                            </p>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={buyAnother}>
                                                    Click here
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            )
                            }
                        </div>
                    </div>
                </section>
            </> :
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-blueGray-500 text-sm font-bold">
                                            Daily Bus
                                        </h6>

                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="text-green-500 text-sm font-bold">

                                        </h6>





                                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <div className="text-blueGray-400 text-center mb-3 font-bold">
                                            <small> Fill all the requirent</small>
                                        </div>
                                        {error ? <div className="text-red-500 text-center mb-3 font-bold">
                                            <small> {error.error}</small>
                                        </div> : ''}

                                        <form onSubmit={checkin}>


                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Departure
                                                </label>
                                                <select onChange={e => setDeparture(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                    <option value=''>select</option>
                                                    {props.daily && props.daily.spritual ?
                                                        props.daily.spritual.map((item) => (

                                                            <option value={item.departure}>{item.departure}</option>
                                                        )) : null
                                                    }

                                                </select>
                                                {data?.departure ? <div className="text-red-500 text-center mb-3 font-bold">
                                                    <small> {data.departure}</small>
                                                </div> : ''}
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Destination
                                                </label>
                                                <select onChange={e => setDestination(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                    <option value=''>select</option>
                                                    {props.daily && props.daily.spritual ?
                                                        props.daily.spritual.map((item) => (

                                                            <option value={item.destination}>{item.destination}</option>
                                                        )) : null
                                                    }

                                                </select>
                                                {data?.destination ? <div className="text-red-500 text-center mb-3 font-bold">
                                                    <small> {data.destination}</small>
                                                </div> : ''}

                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Date of travel
                                                </label>
                                                <input
                                                    type="date"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="For how long you need"
                                                    value={timeTravel} onChange={e => setTimeTravel(e.target.value)}
                                                />

                                                {data?.traveldate ? <div className="text-red-500 text-center mb-3 font-bold">
                                                    <small> {data.traveldate}</small>
                                                </div> : ''}
                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    type="submit"
                                                >
                                                    Check here
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            }


        </>
    );
}
Spritual.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    daily: state.spritual

})

export default connect(mapStateToProps, { checkinUser, bookingSpritual, getSpritual, checkinSpritualbuses, noBooking })(Spritual)
