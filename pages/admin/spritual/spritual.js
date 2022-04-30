import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import { isAdmin } from "actions/authAction.js";
import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getSpritual } from "../../../actions/spritualAction.js";
import Admin from "layouts/Admin.js";
import Spritualcard from "./Spritualcard"
function Spritual(props) {

    useEffect(() => {

        props.getSpritual()
        props.isAdmin(props.auth.user.id)
    }, [])
    if (props.auth.admin && props.auth.admin === true) {
        return (
            <>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-12 px-4">
                        {/* <CardTable /> */}

                        <Spritualcard spritual={props.spritual} />
                    </div>
                    {/* <div className="w-full mb-12 px-4">
              <CardTable color="dark" />
            </div> */}
                </div>
            </>
        );
    } else return null

}
Spritual.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    spritual: state.spritual


})

Spritual.layout = Admin;
export default connect(mapStateToProps, { getSpritual, isAdmin })(Spritual)
