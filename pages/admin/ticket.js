import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getTickets } from "../../actions/ticketAction";
import Admin from "layouts/Admin.js";
import TicketCard from "./TicketCard";
import { isAdmin } from "actions/authAction";
function Tickets(props) {

    useEffect(() => {

        props.getTickets()
        props.isAdmin(props.auth.user.id)
    }, [])

    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">

                        <TicketCard tickets={props.tickets.tickets} />
                    </div>

                </div>
            </>
        );
    } else return null

}
Tickets.propTypes = {
    getTickets: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    tickets: state.tickets

})

Tickets.layout = Admin;
export default connect(mapStateToProps, { getTickets, isAdmin })(Tickets)
