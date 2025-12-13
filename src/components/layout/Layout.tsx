import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css"


export function Layout(){
    return (
        <div className = {styles.mainBlock}>
            <Header/> 
            <Main><Outlet/></Main> 
            <Footer/>
        </div>
    )
}