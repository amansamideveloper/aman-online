import React, { useEffect } from "react";

// components

import CardAddcontractbus from "components/Cards/CardSettings.js";

// import AddTicketForm from "./addBusForm";
// layout for page
import AddContractBusForm from "./addcontractForm";
import Admin from "layouts/Admin.js";

export default function Addcontractbus() {

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">
                    <AddContractBusForm />
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
            </div>
        </>
    );
}

Addcontractbus.layout = Admin;
