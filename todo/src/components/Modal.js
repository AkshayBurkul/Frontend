import React,{useState} from 'react'


function Modal(props) {
    const [Imgdim,setImgdi]=useState({
        height:null,
        width:null
    })
    const imgRef = React.createRef() 

  const ZoomIn =() =>{
    const height = imgRef.current.clientHeight   //set initial dimensions
    const width = imgRef.current.clientWidth 
      
    setImgdi(
        {
            height:height+10,
            width:width+10

        }
    )
    console.log("Zoomin")
    console.log(Imgdim)
  }
 const ZoomOut=()=>{
    setImgdi(
        {
            height:240,
            width:352,

        }
    )

  }

const imgStyle = { height : Imgdim.height, width: Imgdim.width} 
    return (
    <div className="popup-box">
        <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <img style={imgStyle} src="https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/03.png" alt="img" ref={imgRef}/>
        <button className="zoombtn" onClick={ZoomIn}>+</button> 
          <button className="zoombtn" onClick={ZoomOut}>-</button> 
          </div>
      </div>
            
    
    )
}

export default Modal
