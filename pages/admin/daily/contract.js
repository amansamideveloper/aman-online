import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getDaily, getFalse, clear } from "../../../actions/dailyAction";
import Admin from "layouts/Admin.js";
import { isAdmin } from "actions/authAction";
import Travelcard from "./Travelcard";
import CardTableTicket from "components/Cards/TicketSystem";
function Travel(props) {

    useEffect(() => {

        props.getDaily()
        props.getFalse()
        props.clear()
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">

                        <CardTableTicket />
                        <Travelcard dailys={props.daily} />
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
    daily: state.daily

}
)

Travel.layout = Admin;
export default connect(mapStateToProps, { getDaily, getFalse, clear, isAdmin })(Travel)
