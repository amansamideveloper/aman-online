import React, { useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from "next/router";
import { registerUser, loginUser } from '../actions/authAction'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

function Login(props) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password2, setPassword2] = useState(null)
    const router = useRouter()
    const registerUser = (e) => {
        console.log(name)
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password,
            password2: password2,
        };

        props.registerUser(data)

    }
    const loginUser = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        };
        props.loginUser(data)
    }
    if (props.auth.isAuthenticated) {
        router.push('/admin/dashboard')
    }

    return (
        <>
            {console.log(props.errors.errors)}
            <IndexNavbar fixed />
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">


                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Or login with credentials</small>
                                </div>
                                <form onSubmit={loginUser}>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            value={email} onChange={e => setEmail(e.target.value)}

                                        />
                                        {props.errors.errors ? <p className="text-red-500">{props.errors.errors?.email}</p> : ''}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            value={password} onChange={e => setPassword(e.target.value)}
                                        />
                                        {props.errors.errors ? <p className="text-red-500">{props.errors.errors?.password}</p> : ''}
                                    </div>



                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,

})

export default connect(mapStateToProps, { registerUser, loginUser })(Login)