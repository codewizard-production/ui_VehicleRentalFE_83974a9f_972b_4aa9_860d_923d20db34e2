import {
	
		
 	
		
 	
		
 							// For Nested APIs / Join tables			
	 							// For Nested APIs / Join tables			
	 							// For Nested APIs / Join tables			
	 	
		
 	
		
 	
		
 							// For Nested APIs / Join tables			
	 	
		
 	 	 	 	 	 	
		
 	 	
		
 	 	
		
 							// For Nested APIs / Join tables			
	 							// For Nested APIs / Join tables			
	 							// For Nested APIs / Join tables			
	 	
		
 	
		
   SetVerficationSingle, SetPaymentSingle, SetCustomerSingle, SetCustomerBookingsJoin, SetCustomerReturnsJoin, SetCustomerExtendRentalJoin, SetInsuranceSingle, SetServiceCrewSingle, SetReturnRentedBikeSingle, SetReturnRentedBikeInspectionJoin, SetBookingSingle, SetRoadsideAssistanceSingle, SetExtendBookingSingle, SetRentalCompanySingle, SetRentalCompanyBikesJoin, SetRentalCompanyCustomersJoin, SetRentalCompanyBookingsJoin, SetReturnBikeInspectionSingle, SetBikeSingle
} from "./services";
import Helper from "shared/helper";

var fn = {};

const defaultError = "Something went wrong while processing request!";

		
    
 

fn.AddOrUpdateVerfication = async (input, enums, excludesItems) => {
const numberItems_Verfication = [  'VerificationID','LicenseNumber' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
                    if (x.type === 'dropdown') {
                        data[x.key] = enums.find((z) => z.Name === x.source).Values.find((m) => parseInt(m[x.valueId]) === parseInt(x.value))[x.valueId];
                    } else  if( x.key === 'DateOfVerification' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_Verfication.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetVerficationSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdatePayment = async (input, enums, excludesItems) => {
const numberItems_Payment = [  'PaymentID','BookingID','CustomerPhno' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_Payment.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetPaymentSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateCustomer = async (input, enums, excludesItems) => {
const numberItems_Customer = [  'CustomerID','CustomerPhoneNumber' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_Customer.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetCustomerSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateCustomerBookings = async (input, excludesItems) => {
const numberItems_Customer = [  'CustomerID','CustomerPhoneNumber' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_Customer.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetCustomerBookingsJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateCustomerReturns = async (input, excludesItems) => {
const numberItems_Customer = [  'CustomerID','CustomerPhoneNumber' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_Customer.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetCustomerReturnsJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateCustomerExtendRental = async (input, excludesItems) => {
const numberItems_Customer = [  'CustomerID','CustomerPhoneNumber' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_Customer.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetCustomerExtendRentalJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateInsurance = async (input, enums, excludesItems) => {
const numberItems_Insurance = [  'CustomerID','InsuranceID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
 if( x.key === 'DateOfBooking' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_Insurance.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetInsuranceSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateServiceCrew = async (input, enums, excludesItems) => {
const numberItems_ServiceCrew = [  'ServiceID','CustomerID','BikeID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_ServiceCrew.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetServiceCrewSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateReturnRentedBike = async (input, enums, excludesItems) => {
const numberItems_ReturnRentedBike = [  'BookingID','DateOfBooking','FromDate','ToDate' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_ReturnRentedBike.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetReturnRentedBikeSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateReturnRentedBikeInspection = async (input, excludesItems) => {
const numberItems_ReturnRentedBike = [  'BookingID','DateOfBooking','FromDate','ToDate' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_ReturnRentedBike.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetReturnRentedBikeInspectionJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateBooking = async (input, enums, excludesItems) => {
const numberItems_Booking = [  'BookingID','TokenAmount' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
 if( x.key === 'DateOfBooking'  ||  x.key === 'FromDate'  ||  x.key === 'ToDate' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_Booking.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetBookingSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateRoadsideAssistance = async (input, enums, excludesItems) => {
const numberItems_RoadsideAssistance = [  'CustomerID','BookingID','BikeID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_RoadsideAssistance.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetRoadsideAssistanceSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateExtendBooking = async (input, enums, excludesItems) => {
const numberItems_ExtendBooking = [  'BookingID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
 if( x.key === 'DateOfBooking'  ||  x.key === 'FromDate'  ||  x.key === 'ToDate'  ||  x.key === 'NewToDate' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_ExtendBooking.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetExtendBookingSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateRentalCompany = async (input, enums, excludesItems) => {
const numberItems_RentalCompany = [  'CompanyID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
  if (numberItems_RentalCompany.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetRentalCompanySingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateRentalCompanyBikes = async (input, excludesItems) => {
const numberItems_RentalCompany = [  'CompanyID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_RentalCompany.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetRentalCompanyBikesJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateRentalCompanyCustomers = async (input, excludesItems) => {
const numberItems_RentalCompany = [  'CompanyID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_RentalCompany.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetRentalCompanyCustomersJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}


fn.AddOrUpdateRentalCompanyBookings = async (input, excludesItems) => {
const numberItems_RentalCompany = [  'CompanyID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        global.Busy(true);
        let excludes = excludesItems || [];

        const tmp = Object.values(input);
        tmp.filter((x) => x.value).map((x) => {
            if (excludes.indexOf(x.key) === -1) {
                if (numberItems_RentalCompany.indexOf(x.key) > -1) {
                    if (x.value) data[x.key] = parseFloat(x.value);
                } else {
                    data[x.key] = x.value;
                }
            }
        });

        let rslt = await SetRentalCompanyBookingsJoin(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateReturnBikeInspection = async (input, enums, excludesItems) => {
const numberItems_ReturnBikeInspection = [  'BikeID','CostofDamage' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
 if( x.key === 'YearOfRegistration'  ||  x.key === 'DateOfVerification' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_ReturnBikeInspection.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetReturnBikeInspectionSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}
		
    
 

fn.AddOrUpdateBike = async (input, enums, excludesItems) => {
const numberItems_Bike = [  'BikeID' ];
    return new Promise(async (resolve) => {
        let data = {}, status = false, id = null;
        let excludes = excludesItems || [];
        Object.values(input)
            .filter((x) => x.value)
            .map((x) => {
                if (excludes.indexOf(x.key) === -1) {
 if( x.key === 'YearOfRegistration' ) {
                        if (x.value) data[x.key] = `${x.value}T00:00:00+00:00`;
                    } else  if (numberItems_Bike.indexOf(x.key) > -1) {
                            if (x.value) data[x.key] = parseFloat(x.value);
                    } else {
                        data[x.key] = x.value;
                    }
                }
            });

        global.Busy(true);
        let rslt = await SetBikeSingle(data);
        global.Busy(false);
        if (rslt.status) {
            id = rslt.id;
            status = true;
        } else {
            const msg = rslt.statusText || defaultError;
            global.AlertPopup("error", msg);
        }

        return resolve({ status, id });
    });
}




export default fn;