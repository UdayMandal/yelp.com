import { SearchOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import DropdownAutoService from "./components/DropdownAutoService";
import DropdownCity from "./components/DropdownCity";
import DropdownHomeService from "./components/DropdownHomeService";
import DropdownMore from "./components/DropdownMore";
import DropdownRestaurants from "./components/DropdownRestaurants";
import DropdownService from "./components/DropdownService";
import { setBodyEvent, setInputValueCity, setInputValueService } from "./store/HomeReducer";
import logo from './images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

    //store data
    const menu = useRef();
    const dispatch = useDispatch()
    const { inputValueService, inputValueCity } = useSelector((state) => state.home)

    const [serviceFocus, setserviceFocus] = useState(false);
    const [cityFocus, setcityFocus] = useState(false);
    const [restaurantsMouseOver, setrestaurantsMouseOver] = useState(false);
    const [homeServiceMouseOver, sethomeServiceMouseOver] = useState(false);
    const [autoServiceMouseOver, setautoServiceMouseOver] = useState(false);
    const [moreMouseOver, setmoreMouseOver] = useState(false);

    //handle menu click
    const handleClickMenu = () => {
        const m = menu.current
              m.addClass = 'hidden'
    }

    //On service focus
    const handleFocusService = () => {
        setserviceFocus(true)
        setcityFocus(false)
        setrestaurantsMouseOver(false)
        setrestaurantsMouseOver(false)
        sethomeServiceMouseOver(false)
        setautoServiceMouseOver(false)
        setmoreMouseOver(false)
    }
    //We prevent body click
    const handleCickService = (e) => {
        e.stopPropagation()
    }

    //On service input change / controlled input component
    const handleChangeService = (e) => {
        const value = e.target.value
        dispatch(setInputValueService(value))
    }



    //On city focus
    const handleFocusCity = () => {
        setcityFocus(true)
        setserviceFocus(false)
        setrestaurantsMouseOver(false)
        sethomeServiceMouseOver(false)
        setautoServiceMouseOver(false)
        setmoreMouseOver(false)
    }

    //We prevent body click
    const handleCickCity = (e) => {
        e.stopPropagation()
    }
    //On service input change / controlled input component
    const handleChangeCity = (e) => {
        const value = e.target.value
        dispatch(setInputValueCity(value))
    }


    //start restaurants
    //On restaurant mouseover
    const handleMouseOverRestaurants = () => {
        setcityFocus(false)
        setserviceFocus(false)
        setrestaurantsMouseOver(true)
sethomeServiceMouseOver(false)
setautoServiceMouseOver(false)
setmoreMouseOver(false)
    }

    //We prevent body click
    const handleCickRestaurant = (e) => {
        e.stopPropagation()
    }
    //end restaurants


    //start Home Services
    //On home service mouseover
    const handleMouseOverHomeService = () => {
        setcityFocus(false)
        setserviceFocus(false)
        setrestaurantsMouseOver(false)
        sethomeServiceMouseOver(true)
        setautoServiceMouseOver(false)
        setmoreMouseOver(false)
    }

    //We prevent body click
    const handleCickHomeService = (e) => {
        e.stopPropagation()
    }
    //end restaurants


    //start Auto Services
    //On Auto service mouseover
    const handleMouseOverAutoService = () => {
        setcityFocus(false)
        setserviceFocus(false)
        sethomeServiceMouseOver(false)
        setautoServiceMouseOver(true)

setrestaurantsMouseOver(false)
setmoreMouseOver(false)
    }

    //We prevent body click
    const handleCickAutoService = (e) => {
        e.stopPropagation()
    }
    //end restaurants

    //start more
    //On More mouseover
    const handleMouseOverMore = () => {
        setcityFocus(false)
        setserviceFocus(false)
        setrestaurantsMouseOver(false)
        sethomeServiceMouseOver(false)
        setautoServiceMouseOver(false)
        setmoreMouseOver(true)
    }

    //We prevent body click
    const handleCickMore = (e) => {
        e.stopPropagation()
    }
    //end restaurants



    //handle outside or body click
    useEffect(() => {
        document.body.addEventListener('click', (e) => {

            //We send event to <DropdownService/>
            dispatch(setBodyEvent(e))

            //we close all dropdonw
            setserviceFocus(false)
            setcityFocus(false)
            setrestaurantsMouseOver(false)
            sethomeServiceMouseOver(false)
            setautoServiceMouseOver(false)
            setmoreMouseOver(false)
        })
        return () => {
            document.body.removeEventListener('click', (e) => {
                setserviceFocus(false)
                setcityFocus(false)
                setrestaurantsMouseOver(false)
                sethomeServiceMouseOver(false)
                setautoServiceMouseOver(false)
                setmoreMouseOver(false)                
                dispatch(setBodyEvent(e))

            })
        };
    });

    return (
        <>
            {/* Desktop */}
            <nav className="navbar navbar-expand-lg navbar-light  bg:transparent">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand text-white fw-bold" to={`/`}>
                            <img src={logo} className="w:5rem h:auto" alt="" />
                        </Link>

                        <div className=" w:60% position-relative">
                            <div className=" align">
                                <div className="input-group p-0 d-flex flex-row align-items-center">

                                    <div className="w-40 border-0 m-0 p-0 box-shadow:0|0|1|1 bg-white rtl:5">
                                        <input type="text" aria-label="First name" className="w:100% border-0 h:45 ps-3 rtl:8" onClick={handleCickService} onFocus={handleFocusService} value={inputValueService} onChange={handleChangeService} />

                                        {serviceFocus && <DropdownService />}

                                    </div>

                                    <div className="h:30 d-flex">
                                        <div className="vr w:16"></div>
                                    </div>

                                    <div className="w-40 border-0 m-0 p-0 bg-white box-shadow:0|0|1|1 rounded-start">
                                        <input type="text" aria-label="Last name" className="w:100% border-0 h:45 ps-3" onClick={handleCickCity} onFocus={handleFocusCity} value={inputValueCity} onChange={handleChangeCity} />


                                        {cityFocus && <DropdownCity />}

                                    </div>

                                    <Link className="input-group-text h:45 main-bg-red f:white text:decoration:none:hove"> <SearchOutlined sx={{ color: 'white' }} /> </Link>
                                </div>

                            </div>

                            <div>

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-md-row justify-content-start position-absolute mt-2" >

                                    <div className="dropdown me-2  w:100%">
                                        <Link
                                            className="bg:transparent f:#ffffff f:16 mr:1rem f:heavy text:decoration:none:hover dropdown-toggle " onMouseOver={handleMouseOverRestaurants}
                                        >
                                            Restaurants
                                        </Link>
                                        {restaurantsMouseOver && <DropdownRestaurants />}

                                    </div>


                                    <div className="dropdown me-2  w:100%">
                                        <Link
                                            className="bg:transparent f:#ffffff f:16 mr:1rem f:heavy text:decoration:none:hover dropdown-toggle " onMouseOver={handleMouseOverHomeService}
                                        >
                                            Home Services
                                        </Link>
                                        {homeServiceMouseOver && <DropdownHomeService />}

                                    </div>

                                    <div className="dropdown me-2  w:100%">
                                        <Link
                                            className="bg:transparent f:#ffffff f:16 mr:1rem f:heavy text:decoration:none:hover dropdown-toggle " onMouseOver={handleMouseOverAutoService}
                                        >
                                            Auto Services
                                        </Link>
                                        {autoServiceMouseOver && <DropdownAutoService />}

                                    </div>


                                    <div className="dropdown me-2  w:100%">
                                        <Link
                                            className="bg:transparent f:#ffffff f:16 mr:1rem f:heavy text:decoration:none:hover dropdown-toggle " onMouseOver={handleMouseOverMore}
                                        >
                                            More
                                        </Link>
                                        {moreMouseOver && <DropdownMore />}

                                    </div>


                                </ul>
                            </div>
                        </div>



                        <ul className="navbar-nav w:40% me-auto mb-2 mb-lg-0 d-flex flex-md-row justify-content-md-end ms-md-4">
                            <li className="nav-item f:#ffffff f:16  f:heavy">
                                <Link className="nav-link text-white" aria-current="page" to={`for-business`}>
                                    For Businesses
                                </Link>
                            </li>
                            <li className="nav-item f:#ffffff f:16 f:heavy ">
                                <Link className="nav-link text-white" to={`write-review`}>
                                    Write Review
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Stack direction="row" spacing={2}>
                                <Link to={`login`}>
                                <Button variant="outlined" sx={{ color: "white", border: "solid white 2px", textDecoration:'none' }}>Log In</Button>
                                </Link>

                                <Link to={`signup`}>
                                <Button variant="contained" sx={{ color: "white", backgroundColor: "rgb(244, 13, 21)", textDecoration:'none' }}>Sign Up</Button>
                                </Link>
                                </Stack>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {/* Mobile */}

            <Outlet />

        </>
    );
}