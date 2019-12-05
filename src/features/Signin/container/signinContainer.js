import React from 'react'
import MyInput from '../../../tools/myInput'
import MyButton from '../../../tools/myButton'
import MyLabel from '../../../tools/myLabel'
import background from '../../../assets/images/background2.jpg'
import { Link } from 'react-router-dom'
import * as RoutePath from '../../../config/routeConfig'


const SigninContainer = props => {
    const bgstyle ={
        // paddingTop: media.mobile ? '5rem' : media.tablet ? '6rem' : '8rem',
        // paddingBottom: media.mobile ? "3rem" : media.tablet ? "7rem" : "7rem",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width:"100%",
        height:"500px"
    }
  
        return(
            
            <div className="container d-flex align-items-center min-vh-100" >
                <div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
                    <form className='py-4 pb-5' style={bgstyle}>
                        <div className="pb-5 pt-4 text-center" style={{ fontSize:21, color:"white"}}>SIGN IN</div>
                        <div className="pr-4 pl-4 pb-3">
                            <MyLabel text={"USERNAME"} />
                            <MyInput 
                                id={"name"}
                                style={{ fontColor: "#5A6367" }}
                            />
                        </div>
                        <div className="pr-4 pl-4 pb-3">
                            <MyLabel text={"PASSWORD"} />
                            <MyInput 
                                id={"password"}
                                style={{ fontColor: "#5A6367" }}
                             />
                        </div>
                        <div className="px-4 py-4 pb-5 w-100">
                            <Link to={`/${RoutePath.Dashboard}`}>
                                <MyButton text={"SIGN IN"} type="button" width="100%" />
                            </Link>
                           
                        </div>
                    </form>
                </div>
             
            </div>
        
        )
    
}

export default SigninContainer