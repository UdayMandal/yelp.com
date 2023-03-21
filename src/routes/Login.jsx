import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import loginIcon from './../images/loginIcon.png'
export default function Login(){

    return(
        <div className="ylogin-container w:100% p:0 m:0 ">

            <div className="ylogin-header w:100% py:2rem  px:8 bb:1|solid|rgba(107,106,109,0.24)">
                <h3 className="f:heavy f:black">Yelp</h3>
            </div>

            <div className="ylogin-body py:2rem@xm py:10rem@sm p:1rem@xm p:10rem@sm">

                <div className="grid-cols:1@3xs grid-cols:2@sm gap:10@sm gap:20@md gap:30@lg">

                    <div className="yform">
                        <form action="post">
                            <div className="flex flex:col jc:center  ai:center px:1rem@3xs px:5rem@sm  gap:8 {f:12;py:4}>p {w:100%;text:center}_*">
                            <h3 className=" main-color-red f:heavy" >Log in to Yelp</h3>
                            <p> Enter your email to log in and access your account </p>
                            <input type="email" className="b:blue:focus h:2rem" placeholder="Email" />

                            <button type="button" className="p:1rem main-bg-red opacity:0.5 f:white">Log In</button>
                    
                            <p>
                                By continuing, you agree to Yelp’s <Link to={``}>Terms of Service</Link>  and acknowledge Yelp’s <Link to={``}>Privacy Policy</Link>. 

                            </p>

                            <div className="flex flex:row ai:center jc:center">
                                <div className="w:100% h:1 bg:rgba(107,106,109,0.253) "></div>
                                <div >Or</div>
                                <div className="w:100% h:1 bg:rgba(107,106,109,0.253)"></div>
                                
                            </div>

                            <button type="button" className="p:1rem f:white bg:#4267B2"> <FacebookIcon/> Continue with Facebook</button>                        
                            <button type="button" className="p:1rem bg:white outline:1|solid|gray f:gray"><GoogleIcon/> Continue with Google</button>   
                            <button type="button" className="p:1rem f:white bg:#000000"><AppleIcon/> Continue with Apple</button>   
                        <p className="text:end mr:0">New to Yelp? <Link to={`/signup`}>Sign up</Link> </p>

                     </div>
                        </form>
                    </div>

                    <div className="hidden@3xs block@sm">
                        <img src={loginIcon} alt="Login Icon" className="w:fit h:fit object:cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
}