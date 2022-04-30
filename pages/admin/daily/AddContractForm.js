import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// components
import { registerDaily } from '../../../actions/dailyAction'
import { getBuses } from "actions/busAction";
import PropTypes from 'prop-types'
import { clear } from "../../../actions/dailyAction";
import router, { useRouter } from "next/router";
import { isAdmin } from "actions/authAction";
import axios from "axios";
function AddTravelForm(props) {
    const [departure, setDeparture] = useState(null)
    const [destination, setDestination] = useState(null)
    const [travel_date, setTravelDate] = useState(null)
    const [description, setDescription] = useState(null)
    const [seats, setSeats] = useState(null)
    const [price, setPrice] = useState(null)
    const [bus, setBus] = useState(null)
    const [err, setError] = useState(null)


    useEffect(() => {
        props.clear()
        props.isAdmin(props.auth.user.id)
    }, [])

    const Submit = (e) => {
        e.preventDefault()
        const data = {
            departure: departure,
            destination: destination,
            travel_date: travel_date,
            description: description,
            seats: seats,
            price: price,
            bus: bus
        }
        props.registerDaily(data)



    }
    if (props.daily.success) {
        console.log('oooooooo', props.daily.add)

        router.push('/admin/daily/contract')


    }
    console.log(props.daily)
    const error = props.errors.response

    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={Submit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Daily Bus  Information
                            </h6>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Travel information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Departure
                                        </label>
                                        <input
                                            type="text"
                                            value={departure}
                                            onChange={(e) => setDeparture(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Departure"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.departure}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            destination
                                        </label>
                                        <input
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Destination"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.destination}</p> : ''}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Trave date
                                        </label>
                                        <input
                                            type="date"
                                            value={travel_date}
                                            onChange={(e) => setTravelDate(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Number of seats"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.travel_date}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Description"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.description}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Price"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.price}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Bus
                                        </label>

                                        <input
                                            type="text"
                                            value={bus}
                                            onChange={(e) => setBus(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Bus"
                                        />


                                        {error ? <p className="text-red-500">{error.data?.bus}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Number of seats
                                        </label>
                                        <input
                                            type="text"
                                            value={seats}
                                            onChange={(e) => setSeats(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Number of seats"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.seats}</p> : ''}
                                    </div>


                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Register Daily Bus
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />



                        </form>
                    </div>
                </div>
            </>
        );
    } else return null

}
AddTravelForm.propTypes = {
    registerBus: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    travels: state.travels,
    errors: state.errors,
    daily: state.daily,
    auth: state.auth

})
// function mapStateToProps(state, ownProps) {
//     console.log(state) // state
//     console.log(ownProps) // ownProps
// }
export default connect(mapStateToProps, { registerDaily, clear, isAdmin })(AddTravelForm)