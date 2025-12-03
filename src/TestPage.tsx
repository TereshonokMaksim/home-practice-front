import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Main } from "./components/main/Main"
import styles from "./test.module.css"
import { PostList } from "./components/post-list/PostList"


export function ThePage(){
    return <div className = {styles.notExistingClassOrSomethingIReallyDontKnow}>
                <Header></Header>
                <Main>
                    <PostList></PostList>
                </Main>
                <Footer></Footer>
            </div>
}