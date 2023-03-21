import React from "react";
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CalculateIcon from '@mui/icons-material/Calculate';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import HandymanIcon from '@mui/icons-material/Handyman';
import { useDispatch, useSelector } from "react-redux";
import { setInputValueService } from "../store/HomeReducer";

export default function DropdownService() {

//store datas section
const {bodyEvent} = useSelector((state) => state.home)
const dispatch = useDispatch();

    const services = [
        {icon: <AccessTimeIcon />, name: "Home services" },
        {icon: <RestaurantIcon />, name: "RestaurantIcon" },
        {icon: <DeliveryDiningIcon />, name: "Delivery" },
        {icon: <TakeoutDiningIcon />, name: "Takeout" },
        {icon: <CalculateIcon />, name: "Home Accountants" },
        {icon: <PlumbingIcon />, name: "Plumbers" },
        {icon: <HandymanIcon />, name: "Auto repair" },
    ]

    //handle service click
    const handleClick = (e, name) =>{
        dispatch(setInputValueService(name))
    }


    return (
        <>
            {/* Stop body event propagation */}
            {bodyEvent && bodyEvent.stopPropagation()}

            <div className="position-relative w-100 p:0">
                
                <div className="w-100 bg-white px-3 position-absolute z:100000 ">
                    <div className="d-flex flex-column align-items-center w-100 py-3">
                {
                    services.map((s, i) => (
                        <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover" key={i} onClick={(e, s) => handleClick(e, s)}>
                            <span className="mr:8"> {s.icon}</span>
                            <span > {s.name} </span>
                        </Link>

                    ))
                }
                        {/* <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className="mr:8"> <AccessTimeIcon /> </span>
                            <span >Home services</span>
                        </Link>

                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <RestaurantIcon /> </span>
                            <span >c</span>
                        </Link>

                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <DeliveryDiningIcon /> </span>
                            <span >Delivery</span>
                        </Link>

                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <TakeoutDiningIcon /> </span>
                            <span >Takeout</span>
                        </Link>



                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <CalculateIcon /> </span>
                            <span >Accountants</span>
                        </Link>

                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <PlumbingIcon /> </span>
                            <span >Plumbers</span>
                        </Link>

                        <Link className="bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className=" mr:8"> <HandymanIcon /> </span>
                            <span >Auto repair</span>
                        </Link> */}

                    </div>

                </div>
            </div>
        </>
    );
}