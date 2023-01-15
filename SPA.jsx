//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const SPA = () => {
    return(
        <>
         <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css" >CSS</Link></li>
                    <li><Link to="/js">JavaScript</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <hr />
            <Routes>
                <Route path="html" element={
                    <main>
                        <h2>HTML</h2>
                        <p>It is markup language</p>
                    </main>
                }/>
                <Route path="css" element={
                    <main>
                        <h2>CSS</h2>
                        <p>It is defines style</p>
                    </main>
                }/>
                <Route path="js" element={
                    <main>
                        <h2>Javascript</h2>
                        <p>It is a Language..</p>
                    </main>
                }/>
                <Route path="/" element={
                    <main>
                        <h2>Home</h2>
                        <p>Tutorial</p>
                    </main> 
                }/>
                <Route path="*" element={
                    <main>
                        <code>Not Found: Page you requested</code>
                    </main>
                }/>
                
            </Routes>
         </BrowserRouter>
        </>
    )
}
export default SPA;