import React from "react";
import { Routes, Route } from "react-router-dom";
import {
RentalCompanyCreate, RentalCompanyEdit, RentalCompanyView, 
RentalCompanies
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="RentalCompanies/view/:id" element={<RentalCompanyView {...props} title={'View RentalCompany'} />} />
                        <Route path="RentalCompanies/edit/:id" element={<RentalCompanyEdit {...props} title={'Edit RentalCompany'} />} />
                        <Route path="RentalCompanies/create" element={<RentalCompanyCreate {...props} title={'Create RentalCompany'} />} />
                                                <Route path="/" element={<RentalCompanies {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/rentalCompany" element={<RentalCompanies {...props} title={'Table Layout'} />} />
                                                                                                        </Routes>
    )

};

export default Component;