import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import { isAdmin } from "actions/authAction";
import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getContracts, getFalse } from "actions/contractAction";
import { clear, } from "actions/checkinAction";
import Admin from "layouts/Admin.js";

import Travelcard from "./Travelcard";
import CardTableTicket from "components/Cards/TicketSystem";
function Travel(props) {

    useEffect(() => {

        props.getContracts()

        props.clear()
        props.getFalse();
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">

                        <CardTableTicket />
                        <Travelcard dailys={props.contract.getall} />
                    </div>

                </div>
            </>
        );
    } else return null

}
Travel.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    contract: state.contract

}
)

Travel.layout = Admin;
export default connect(mapStateToProps, { getContracts, clear, getFalse, isAdmin })(Travel)
