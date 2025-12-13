import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { AllPostsPage } from "./pages/posts/AllPostsPage"
import { HomePage } from "./pages/home/HomePage"
// 
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>}>
                    <Route path = "/" element={<HomePage/>}></Route>
                    <Route path = "/posts" element={<AllPostsPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        )
}