import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// components
import { registerBuses } from '../../../actions/busAction'
import PropTypes from 'prop-types'
import { isAdmin } from "actions/authAction";
import { useRouter } from "next/router";
function AddBusForm(props) {
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [seats, setSeats] = useState(null)
    const router = useRouter()
    const Submit = (e) => {
        e.preventDefault()

        const data = {
            name: name,
            description: description,
            seats: seats

        }

        props.registerBuses(data)

    }
    const error = props.errors.response
    useEffect(() => {
        props.isAdmin(props.auth.user.id)
    }, [])

    if (props.buses && props.buses.buses) {
        router.push('/admin/bus')
    }
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={Submit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Bus Information
                            </h6>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Bus information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Bus Name
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Bus name"
                                        />
                                        {error ? <p className="text-red-500">{error.data?.name}</p> : ''}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Description
                                        </label>
                                        <input
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            type="text"
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
                                            Register bus
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
AddBusForm.propTypes = {
    registerBus: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    buses: state.buses,
    errors: state.errors,
    auth: state.auth

})

export default connect(mapStateToProps, { registerBuses, isAdmin })(AddBusForm)