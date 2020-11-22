import React,{useState} from 'react'
import Modal from './Modal';



function Grid() {
    const [isOpen, setIsOpen] = useState(false);


    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log('toggle popup')
        
      }

      
  const web="https://s3.us-east-2.amazonaws.com/futopstech.com/images/industries_index/03.png"


     return (<div className="div2">
             <div className="container">
            <div className="img-area">

            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />
            <img className="singimg" src={web} onClick={togglePopup} alt="img" />


        </div>  
        </div>

        {isOpen && <Modal 
        content={<>  <img id="large"  src={web} alt="show"/></>}
        handleClose={togglePopup}
          />}
        
    </div>
     )    
}

export default Grid
