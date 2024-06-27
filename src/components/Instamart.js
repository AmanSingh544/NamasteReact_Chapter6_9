import { useState } from "react"


const Section =({title,desc,isvisible,setVisible}) => {
    return (<>
    <div style={{border:'2px solid black',margin:'10px',padding:'5px'}}>
        <h2>{title}</h2>
        <div>
            <button onClick={() => setVisible && setVisible()}>{isvisible ? 'Hide'  : 'Show'}</button>
            {isvisible && <p>{desc}</p>}
        </div>
    </div>
    </>)
}
const Instamart =() => {
    const [visibleSection,setVisibleSection] = useState("about")
    return (
        <>
        <Section isvisible={visibleSection === "about"} setVisible={()=> setVisibleSection((prev) => prev === "about" ? "xyz" : "about")}  key={Math.random()} title={"About"} desc ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
        <Section isvisible={visibleSection === "team"} setVisible={()=> setVisibleSection((prev) => prev === "team" ? "xyz" : "team")}   key={Math.random()} title={"Teams"} desc ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
        <Section isvisible={visibleSection === "product"} setVisible={()=> setVisibleSection((prev) => prev === "product" ? "xyz" : "product")}  key={Math.random()} title={"Product"} desc ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
        </>
    )
}

export default Instamart;