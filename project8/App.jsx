import React,{useState,useEffect} from "react";

function App(){
    const [windowSize,setWindowSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });
    useEffect(() => {
       const handleResize = () => {
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
       };
       window.addEventListener("resize",handleResize);
       return () => {
        window.removeEventListener("resize",handleResize);
       };
    },[]);
    return(
        <div style={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center",
           height:"100vh",
           fontFamily:"Arial, sans-serif",
           backgroundColor:"linear-gradient(#667eea 0%,#764ba2 100%)    ",
           color:"white",
        }}> 
            <h1>Window Size Tracker</h1>
            <div style={{
                padding:"20px",
                backgroundColor:"rgba(255,255,255,0.2)",
                borderRadius:"10px",
                fontSize:"20px",
                fontWeight:"bold",    
                }}>
                  
                  <p>width: < strong>{windowSize.width}</strong></p>
                  <p>height: < strong>{windowSize.height}</strong></p>
                </div>
            <p style={{ marginTop:"20px"}}>Try resizing your browser window</p>
            </div>
    );
}

export default App; 