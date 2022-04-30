import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getBuses } from "../../../actions/busAction";
import Admin from "layouts/Admin.js";
import Usercard from "../user/Usercard";
import Buscard from "./busCard";
import { isAdmin } from "actions/authAction";
function Bus(props) {

    useEffect(() => {

        props.getBuses()
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                        {/* <CardTable /> */}
                        <Buscard buses={props.buses} />
                    </div>
                    {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
                </div>
            </>
        );
    } else {
        return null
    }

}
Bus.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    buses: state.buses


})

Bus.layout = Admin;
export default connect(mapStateToProps, { getBuses, isAdmin })(Bus)
