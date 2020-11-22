import React,{useEffect,useState}from 'react'
import Grid from './Grid';


function Viewstream() {

const [getdata,setgetdata]=useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/stream_api/v1/stream',{     //Get data
            method:"GET",
            headers:{
                "Content-type":'application/json',
                'Accept':'application/json'

            }
        }).then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => setgetdata(data))
        .catch(err =>console.log("request failed",err))
        },[])



      const deletetask = (id) =>{               //Delete data
          if(window.confirm('Are you sure ?'))
          {
            fetch(`http://127.0.0.1:5000/stream_api/v1/stream/${id}`,{
            method:"DELETE",
            body:JSON.stringify({
                id:id
            }),
            headers:{
                "Content-type":'application/json',
                'Accept':'application/json'

            }
        }).then(response =>{
          const del =getdata.filter(gdata => id !== gdata.id)
          setgetdata(del)
          console.log('success',response)
        }
          )
          
        .then(data => console.log(data))
        .catch(err =>console.log("request failed",err))
        alert("Stream Deleted Succesfully")}
        }
     
    

    return (
        <div>
            <div className="div2">
              <div className="container">
                {getdata.map((post,index) =>(


      <div>
        <div>
            <table id="t01">
          <tr>
            <th colSpan="2">Stream Info</th>
            
           
          </tr>
          <tr>
            <td>Id:</td>
            <td key={post.id}>{post.id}</td>
          </tr>
          <tr>
            <td>Stream Name:</td>
            <td>{post.stream_name}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{post.description}</td>
          </tr>
          <tr>
            <td>Enable/Disable:</td>
            <td>{post.enabled_stream}</td>
          </tr>
          </table>
          <table id="t01">
          <tr>
            <th colSpan="2">Recorder Info</th>
            
           
          </tr>
          <tr>
            <td>Video source type:</td>
            <td>{post.video_source_type}</td>
          </tr>
          <tr>
            <td>Resolution:</td>
            <td>{post.resolution}</td>
          </tr>
          <tr>
            <td>Frame Rate:</td>
            <td>{post.frame_rate}</td>
          </tr>
          <tr>
            <td>Recording Quality</td>
            <td>{post.recording_quality}</td>
          </tr>
          <tr>
            <td>Video Length</td>
            <td>{post.video_length}</td>
          </tr>
          <tr>
            <td>Auto Schedule</td>
            <td>{post.auto_schedule}</td>
          </tr>
          <tr>
            <td>Schedule Start Time</td>
            <td>{post.schedule_start}</td>
          </tr>
          <tr>
            <td>Schedule End Time</td>
            <td>{post.schedule_end}</td>
          </tr>
          <tr>
            <td>Enable/Disable Compression</td>
            <td>{post.enabled_compression}</td>
          </tr>
          <tr>
            <td>Compression Quality</td>
            <td>{post.compression_quality}</td>
          </tr>
          
        </table>
       </div>
       <div >
           <button id="delbutton" onClick={() =>{  //Delete button to delete records
               deletetask(post.id)
           }}>Delete</button>
        </div>   
       <br/>
       </div>
       
            
   )) }
        </div>
        
        <Grid/>
      </div>
    </div>
  )}


export default Viewstream
