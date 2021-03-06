import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";
import { connect } from "react-redux";

import { deleteSpritualTravel, getSpritual } from "actions/spritualAction";
const NotificationDropdown = (props) => {

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "left-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    function editContract(e) {

        e.preventDefault()

    }
    function deleteDaily(e) {
        // props.contract = null
        e.preventDefault()
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        // /api/v1/daily
        props.getSpritual()
        props.deleteSpritualTravel(props.id)

        props.getSpritual()

    }

    console.log(props.spritual)
    return (
        <>
            <a
                className="text-blueGray-500 py-1 px-3"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className="fas fa-ellipsis-v"></i>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <Link passHref href='/'>
                    <a
                        href="#pablo"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        onClick={(e) => editContract(e)}
                    >
                        Edit
                    </a>
                </Link>
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => deleteDaily(e)}
                >
                    Delete
                </a>

            </div>
        </>
    );
};

const mapStateToProps = state => ({
    spritual: state.spritual
})
export default connect(mapStateToProps, { deleteSpritualTravel, getSpritual })(NotificationDropdown);
