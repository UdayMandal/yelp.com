import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from "react-redux";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CalculateIcon from '@mui/icons-material/Calculate';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import HandymanIcon from '@mui/icons-material/Handyman';
export default function DropdownRestaurants() {

    //store datas section
    const { bodyEvent } = useSelector((state) => state.home)
    const dispatch = useDispatch();

    const services1 = [
        { icon: <AccessTimeIcon />, name: "Home services" },
        { icon: <DeliveryDiningIcon />, name: "Delivery" },
        { icon: <CalculateIcon />, name: "Home Accountants" },
        { icon: <PlumbingIcon />, name: "Plumbers" },
        { icon: <HandymanIcon />, name: "Auto repair" },
    ]

    const services2 = [
        { icon: <AccessTimeIcon />, name: "Home services" },
        { icon: <DeliveryDiningIcon />, name: "Delivery" },
        { icon: <CalculateIcon />, name: "Home Accountants" },
        { icon: <PlumbingIcon />, name: "Plumbers" },
        { icon: <HandymanIcon />, name: "Auto repair" },
    ]



    return (
        <>
            {/* Stop body event propagation */}
            {bodyEvent && bodyEvent.stopPropagation()}

            <div className="position-relative  p:0 mt:16">
                <div className="h:4 w:100% bg-danger"></div>

                <div className=" px-3 bg-white  position-absolute z:100000 rtr:8 rb:8 w:25rem">
                    <div className="d-flex flex-row justify-content-between py-3">

                        <div className="d-flex flex-column justify-content-between" >

                            {services1.map((s, i) => (
                                    <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover  text-dark f:16 p:8 r:4 text:none:hover" key={i}>
                                        <span className="mr:8 f:dark"> {s.icon} </span>
                                        <span className="f:dark"> {s.name} </span>
                                    </Link>


                            ))}
                        </div>

                        <div className="d-flex flex-column justify-content-between" >

                            {services2.map((s, i) => (
                                    <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover text-dark f:16 p:8 r:4 text:none:hover" key={i}>
                                        <span className="f:dark"> {s.icon} </span>
                                        <span className="f:dark"> {s.name} </span>
                                    </Link>

                            ))}
                        </div>

                        {/* {
                    services.map((s, i) => (
                        <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover" key={i} onClick={(e, s) => handleClick(e, s)}>
                            <span > {s.name} </span>
                        </Link>

                    ))
                } */}
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