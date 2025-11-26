export function App() {
    return <div>
                <header>
                    <div className = "right-header-side">
                        <h1>Remery</h1>
                        <div className = "links">
                            <a href="home">Home</a>
                            <a href="all_posts">All posts</a>
                            <button>Create Post</button>
                        </div>
                    </div>
                    <div className = "right-header-side">
                        <div>Britain flag here</div>
                        <a href="login" id = "signInButton">Sign In</a>
                        <a href="register" id = "signUpButton">Sign Up</a>
                        <p>userIconhere</p>
                    </div>
                </header>
                <main>
                    <div className = "main-data">
                        <h1>Project's Data</h1>
                        <div className = "introduction-data">
                            <h2>Description</h2>
                            <div>
                                <p>Remery is a small, laid-back forum where people chat, share thoughts, and help each other out without the usual internet drama. If you like honest, simple conversations, you'll feel at home here.</p>
                            </div>
                        </div>  
                        <div className = "allData">
                            <div className = "backend-data">
                                <div>
                                    <h2>Backend Part technologies:</h2>
                                    <p>Node.js - Runtime enviroment</p>
                                    <p>Prisma ORM - ORM for work with Databases</p>
                                    <p>Express - Process API requests</p>
                                    <p>MySQL - Database itself</p>
                                    <p>JWT - Transport authorization data</p>
                                </div>
                            </div>
                            <div className = "frontend-data">
                                <div>
                                    <h2>Frontend Part technologies:</h2>
                                    <p>React - JS Library/Framework for client handling</p>
                                    <p><i>This list is not full yet</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>2025, Remery</p>
                    <p>Terms of use</p>
                    <p>Privacy</p>
                    <p>Cookie management</p>
                    <p>Security</p>
                </footer>
        </div>
}