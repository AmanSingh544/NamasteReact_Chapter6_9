const Shimmer=()=>{
    return (<>
    {Array(10).fill(" ").map((e, index) => (
        <div key={index} style={{height: '200px', width: '300px', backgroundColor: 'lightgray', margin: '20px'}}>
        </div>
      ))
    }
    </>)  
}

export default Shimmer;