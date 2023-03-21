import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from "react-redux";
import { setInputValueCity } from "../store/HomeReducer";

export default function DropdownCity() {

//store datas section
const {bodyEvent} = useSelector((state) => state.home)
const dispatch = useDispatch();

    const services = [
        {name: "San Francisco, CA, United States" },
        {name: "San Francisco Canyon, NV, United States" },
        {name: "South San Francisco, CA, United States" },
        {name: "Péninsule de San Francisco, CA, United States" },
        {name: "Área de la Bahía de San Francisco, CA, United States" },
        {name: "Région de la baie de San Francisco, CA, United States" },
    ]

    //handle service click
    const handleClick = (e, name) =>{
        dispatch(setInputValueCity(name))
    }

    
    return (
        <>
            {/* Stop body event propagation */}
            {bodyEvent && bodyEvent.stopPropagation()}

            <div className="position-relative w-100 p:0">
                
                <div className="w-100 bg-white px-3 position-absolute z:100000 ">
                    <div className="d-flex flex-column align-items-center w-100 py-3">

                    <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover">
                            <span className="mr:8 f:blue"> <LocationOnIcon/> </span>
                            <span className="f:blue"> Current Location </span>
                        </Link>
                {
                    services.map((s, i) => (
                        <Link className="d-flex flex-row align-items-center bg:rgba(107,106,109,0.26):hover w:100% text-dark f:16 p:8 r:4 text:none:hover" key={i} onClick={(e, s) => handleClick(e, s)}>
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