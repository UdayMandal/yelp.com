import { Button, LinearProgress } from "@mui/material" 
import React, { useEffect, useRef, useState } from "react" 
import  {SearchOutlined} from '@mui/icons-material' 
import DeleteIcon from '@mui/icons-material/Delete' 
import SearchIcon from '@mui/icons-material/Search' 
import { Progress } from "rsuite" 
import "rsuite/dist/rsuite.min.css" 
import profil1 from './../images/profil1.jpg'
import banner1 from './../images/banner1.jpg'
import { Link } from "react-router-dom" 
import StarIcon from '@mui/icons-material/Star';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MoodIcon from '@mui/icons-material/Mood';
export default function Home() {
    //carousel ref
    const carousel = useRef()

    const interval = useRef() 
    const timing = useRef(0) 

    const [
        percent, 
        setPercent
    ] = useState(0) 

    const [
        status, 
        setstatus
    ] = useState(false) 



    useEffect(() => {
        interval.current = setInterval(()=>{
            setPercent(timing.current)
            timing.current +=3
            if(timing.current===100){
                setstatus(true)
            clearInterval(interval.current)
            }
        },100)

        return () => {
            clearInterval(interval.current)
        } 
    }) 


    return (
        <>
        {/**start  carousel  */  }
            <div className="ycarousel p:0 m:0">
 
                    <div className="ycarousel-item flex flex:col jc:center rel">

                        {/* image section */}
                        <div className="carousel-img abs z:-1 bg:url('/images/carousel1.jpg') bg:cover bg:center bg:no-repeat @carousel|15s|infinite ~opacity|2000ms|ease">

                        <div className="ycarousel-caption flex flex:col jc:center  h:100% pl:5rem@xm pl:10rem@sm ">
                            
                            <h1 className="f:white f:20@xm f:50@sm f:bold my:1rem">Get a deep clean</h1>
                            <div>
                            <Button variant="contained" sx={{ p: "30", backgroundColor: "rgb(244, 13, 21)"}} startIcon={<SearchOutlined />}>
                                Cleaners
                            </Button>
                            </div>

                        </div>


                        </div>


                        <div className="carousel-img abs z:-1 bg:url('/images/carousel2.jpg') bg:cover bg:center bg:no-repeat @carousel|15s|infinite @delay:5000ms ~opacity|2000ms|ease">

                        <div className="ycarousel-caption  jc:center flex flex:col h:100% pl:5rem@xm pl:10rem@sm">
                          <div>
                          <h1 className="f:white f:20@xm f:50@sm f:bold my:1rem">Leave it to the pros</h1>
                            <div>
                            <Button variant="contained" sx={{ p: "20", backgroundColor: "rgb(244, 13, 21)" }} startIcon={<SearchOutlined />}>
                                Handyman
                            </Button>
                            </div>
                          </div>

                        </div>

                        </div>


                        <div className="carousel-img abs z:-1 bg:url('/images/carousel3.jpg') bg:cover bg:center bg:no-repeat @carousel|15s|infinite @delay:10000ms ~opacity|2000ms|ease">

                        <div className="ycarousel-caption  jc:center flex flex:col h:100% pl:5rem@xm pl:10rem@sm">
                            <div>
                            <h1 className="f:white f:20@xm f:50@sm f:bold my:1rem">Show off your lawn this spring</h1>
                            <div>
                            <Button variant="contained" sx={{ p: "20", backgroundColor: "rgb(244, 13, 21)" }} startIcon={<SearchOutlined />}>
                                Landscaper
                        
                            </Button>
                            </div>
                            </div>


                        </div>
                        </div>

                        <div className="flex flex:row  ai:start px:1rem@xm px:5rem@sm gap:2rem ">

                    {/* indicator section */}
                        <div className="flex flex:col ycarousel-indicator gap:5@xm gap:10@sm">

                            <div className="ycarousel-indicator-item flex flex:col jc:start ai:center bg:rgba(107,106,109,0.404) w:.8rem r:2rem h:6rem p:0 h:0">
                            <div className="bg:white w:100% r:2rem @indicator|15s|infinite"></div>
                            </div>

                            <div className="ycarousel-indicator-item bg:rgba(107,106,109,0.404) w:.8rem r:2rem h:6rem">
                            <div className="bg:white w:100% r:2rem @indicator|15s|infinite @delay:5000ms"></div>

                            </div>
                            <div className="ycarousel-indicator-item bg:rgba(107,106,109,0.404) w:.8rem r:2rem h:6rem">
                            <div className="bg:white w:100% r:2rem @indicator|15s|infinite @delay:10000ms"></div>

                            </div>

                        </div>

                    {/* caption section */}





                        </div>


                    </div>

            </div>
        {/**end  carousel  */  }


        {/**start  body  */  }
        <div className="w:full h:full px:1rem@xm px:5rem@sm py:2rem mt:2rem {text:center;f:heavy;py:2rem}>h3">

            {/* start yCards section */}
            <h3>Recent Activity</h3>
            <div className="grid-auto-flow:row mt:2rem {text:decoration:none}_Link ">

                <div className="grid-cols:1@xm grid-cols:3@sm gap:20@sm gap:10@xm">
                    {                    
                    [1,2,4,5,6,7,8,9,10].map((value, index)=>(
                        <div className="ycard f:gray box-shadow:0|0|1|1 flex flex:col" key={index}>

                        {/* ycard header */}
                        <div className="ycard-header p:1rem flex flex:row">
                            <img className="ycard-header-img w:2rem h:2rem object:cover flex-shrink:0 round" src={profil1} alt="some text" />
                            <div className="ycard-header-section flex flex:col flex-grow:1 ml:8">
                                <Link to={``}>
                                    <div className="ycard-header-section-title  f:heavy f:1rem f:dark">Fabian F.</div>
                                </Link>
                                <div className="ycard-header-section-description">wrote a review</div>
                            </div>
                        </div>

                        {/* ycard banner */}
                        <img className="ycard-banner  w:full h:5rem object:cover" src={banner1} alt="some banner1" />

                        {/* ycard body */}
                        <div className="ycard-body flex flex:col w:full p:1rem">
                            <Link to={`#`}>
                                <div className="ycard-body-title ycard-color-blue f:heavy f:1rem">
                                    Local berbershop
                                </div>
                            </Link>
                            <div className="ycard-body-rating flex flex:row gap:5 {r:4;f:white;p:2}>span">
                                <span className="ycard-body-rating-item ycard-bg-red"><StarIcon /></span>
                                <span className="ycard-bg-red ycard-body-rating-item"><StarIcon /></span>
                                <span className="ycard-bg-red ycard-body-rating-item"><StarIcon /></span>
                                <span className="ycard-bg-red ycard-body-rating-item"><StarIcon /></span>
                                <span className="ycard-bg-red ycard-body-rating-item"><StarIcon /></span>
                            </div>
                            <p className="break-word lines:4 py:4">
                            Super chill, clean, friendly, soothing vibe. Like you almost want to wait longer for your turn. 
                            </p>
                            <Link to={`#`}>
                                <div className="ycard-body-more ycard-color-blue f:heavy f:.8rem">
                                Continue reading
                                </div>
                            </Link>

                        </div>

                        {/* card footer */}
                        <div className="ycard-footer w:full flex flex:col">

                            <div className="flex flex:row jc:center ai:center">
                            <div className="ycard-footer-divider w:70% sa:center h:1 mt:2 mb:5 ycard-bg-gray"></div>
                            </div>

                            <div className="ycard-footer-icon flex flex:row gap-4 p:1rem f:dark {round;bg:rgba(33,32,34,0.144):hover;p:8;cursor:grab}_span ">
                                <span>
                                <EmojiObjectsIcon />
                                </span>
                                <span>
                                <TagFacesIcon />
                                </span>
                                <span>
                                <MoodIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div> 
            {/* end yCards section */}

            {/* Show more */}
            <Link to={`#`}>
                <p className="text:center pt:20 ">Show more</p>
            </Link>


            {/* start ycategories section */}
            <h3>Categories</h3>
            <div className="grid-auto-flow:row mt:2rem {text:decoration:none}_Link">
                <div className="grid-cols:2@xm grid-cols:4@sm gap:30">
                   {
                    [1,2,3,4,5,6,7,8,9,10].map((value, index) => (
                <Link className="f:decoration:none" to={`#`} key={index}>

                        <div className="p:5rem b:1|solid|rgba(6,6,6,0.233) box-shadow:0|0|1|1:hover cursor:grab:hover">
                        <div className="flex flex:col jc:center ai:center gap:4">
                            <span>Icon1</span>
                            <span>Restaurants</span>
                        </div>
                    </div>
                </Link>

                    ))
                    }

                </div>
 
            </div>

            {/* end ycategories section */}

        </div>
        {/**end  body  */  }

        </>
    ) 
}