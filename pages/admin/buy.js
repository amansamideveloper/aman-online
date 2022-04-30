import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getBuyies } from "../../actions/buyAction";
import Admin from "layouts/Admin.js";
import Usercard from "./user/Usercard";
import Buscard from "./bus/busCard";
import Buycard from "./buy/Buycard";
function Buy(props) {

    useEffect(() => {
        // console.log('aaaaaaaaaa')
        // getTickets()
        props.getBuyies()
    }, [])
    // console.log(props.users.users)
    // console.log(props.tickets.tickets.success)
    console.log(props.buyies)
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    {/* <CardTable /> */}
                    <Buycard buses={props.buyies} />
                </div>
                {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
            </div>
        </>
    );
}
Buy.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    buyies: state.buyies


})

Buy.layout = Admin;
export default connect(mapStateToProps, { getBuyies })(Buy)
