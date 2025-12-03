import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Main } from "./components/main/Main"
import styles from "./home.module.css"


export function HomePage(){
    return <div>
                <Header></Header>
                <Main>
                    <div className={styles.mainData}>
                        <h1>Project's Data</h1>
                        <div className={`${styles.dataBlock} ${styles.introductionDataBlock}`} id="introductionData">
                            <h2>Description</h2>
                            <div>
                                <p>Remery is a small, laid-back forum where people chat, share thoughts, and help each other out without the usual internet drama. If you like honest, simple conversations, you'll feel at home here.</p>
                            </div>
                        </div>  
                        <div className = {styles.allData}>
                            <div className = {[styles.dataBlock, styles.partData].join(" ")} id="backendData">
                                <div>
                                    <h2>Backend Part technologies:</h2>
                                    <p>Node.js - Runtime enviroment</p>
                                    <p>Prisma ORM - ORM for work with Databases</p>
                                    <p>Express - Process API requests</p>
                                    <p>MySQL - Database itself</p>
                                    <p>JWT - Transport authorization data</p>
                                </div>
                            </div>
                            <div className = {[styles.dataBlock, styles.partData].join(" ")} id="frontendData">
                                <div>
                                    <h2>Frontend Part technologies:</h2>
                                    <p>React - JS Library/Framework for client handling</p>
                                    <p><i>This list is not full yet</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
                <Footer></Footer>
            </div>
}