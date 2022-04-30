import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

// import AddTicketForm from "./addBusForm";
// layout for page
import AddBusForm from "./addBusForm";
import Admin from "layouts/Admin.js";

export default function Settings() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">
                    <AddBusForm />
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
            </div>
        </>
    );
}

Settings.layout = Admin;
