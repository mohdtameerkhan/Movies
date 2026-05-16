import { Outlet } from "react-router"
import { Navbar } from "../Navbar/Navbar"
import {Footer} from '../component/Footer'
import { Suspense } from "react"
//import { LoaderSkeleton } from "../component/LoaderSkeleton"


export const HomeLayout = ()=>{

    return(
        <>
        <Navbar/>
        
            <Outlet/>
        
        <Footer/>
        

        </>
    )

}