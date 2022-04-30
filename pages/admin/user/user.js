import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getUsers } from "../../../actions/userAction";
import Admin from "layouts/Admin.js";
import { isAdmin } from "actions/authAction";
import Usercard from "./Usercard";
function Users(props) {

    useEffect(() => {
        // console.log('aaaaaaaaaa')
        // getTickets()
        props.getUsers()
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                        {/* <CardTable /> */}
                        <Usercard users={props.users} />
                    </div>
                    {/* <div className="w-full mb-12 px-4">
              <CardTable color="dark" />
            </div> */}
                </div>
            </>
        );
    } else return null

}
Users.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    users: state.users

})

Users.layout = Admin;
export default connect(mapStateToProps, { getUsers, isAdmin })(Users)
