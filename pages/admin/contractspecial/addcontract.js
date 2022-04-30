import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

// import AddTicketForm from "./addBusForm";
// layout for page
import AddBusForm from "../bus/addBusForm";
import Admin from "layouts/Admin.js";
import AddContractForm from "./AddContractForm";

export default function AddTravel() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">
                    <AddContractForm />
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
            </div>
        </>
    );
}

AddTravel.layout = Admin;
