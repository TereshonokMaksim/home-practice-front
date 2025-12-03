import { Header, Footer } from "./TemplateComponents"
import styles from "./test.module.css"
import { PostList } from "./PostList"


export function ThePage(){
    return <div className = {styles.notExistingClassOrSomethingIReallyDontKnow}>
                <Header></Header>
                <main>
                    <PostList></PostList>
                </main>
                <Footer></Footer>
            </div>
}