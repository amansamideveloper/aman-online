import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
const Checkin = props => {
    const router = useRouter()
    console.log(router)

    return (
        <div>checkin</div>
    )
}

Checkin.propTypes = {}

export default Checkin