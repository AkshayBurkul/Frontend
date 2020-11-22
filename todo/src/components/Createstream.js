import React, { useState } from 'react'

function Createstream() {

    const [data,setdata]=useState({
        'stream_name':"",
        'description':"",
        'enabled_stream':'',
        'video_source_type':"",
        'resolution':"",
        'frame_rate':"",
        'recording_quality':"Low",
        'video_length':"",
        'auto_schedule':"",
        'schedule_start':"",
        'schedule_end':"",
        'enabled_compression':"",
        'compression_quality':""

    })


    const handler = event =>{
      const value=event.target.value
        
        setdata({...data,
            [event.target.name]:value
        })
        
        

    }

    const submithandler= (e) =>{
     e.preventDefault()

    fetch('http://127.0.0.1:5000/stream_api/v1/stream',
        {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'

            },
            
        })
        .then(res => res.json())
        .catch(error => console.error('Error:',error))
        .then(Response => console.log('Success:',Response))
       alert("Stream Created Succesfully") 
    }
    
    return (
    <div className="div2">
       <div className="container">
        <div className="section1">
       <form onSubmit={submithandler}>
        
        <h2>Stream Info</h2>
        <div>
            <div>
                <label>Stream Name:</label>
            </div>
            <div>
                <input type="text" name="stream_name" value={data.stream_name} placeholder="Enter Stream .." onChange={handler}/>

            </div>
        </div>
            
        
        <div >
            <div>
                <label>Stream Description:</label>
            </div>
            <div>
                <textarea name="description" value={data.description } placeholder="Enter Stream Desc .." onChange={handler}></textarea>
            </div>
        </div>
        
        

        <div>
            <div>
            <input type="radio" name="enabled_stream" id="enable" value="true" checked={data.enabled_stream === true} onChange={handler}/>
            <label>Enable</label>
            <input type="radio" name="enabled_stream" id="enable" value="false" checked={data.enabled_stream === false} onChange={handler}/>
            <label>Disable</label>
            </div>
        </div>
    
    
        <h2>Recorder Info</h2>
        <div>
            <div>
                <label>Video Source Type:</label>
            </div>
            <div>
            <select id="sourcetype" name="video_source_type" onChange={handler} value={data.video_source_type} >
            <option value="MJPEG">MJPEG</option>
            <option value="H264">H264</option>
            <option value="H265">H265</option>
            <option value="OGG">OGG</option>
            </select>
        </div>
        </div>




        <div>
        <div>
            <label>Resolution:</label>
        </div>

        
        <div>
            <select id="resolution" name="resolution" onChange={handler} value={data.resolution}>
            <option value="HIGH(1920x1080)">High(1920x1080)</option>
            <option value="Medium(1280x720)">Medium(1280x720)</option>
            <option value="Low(640x480)">Low(640x480)</option>
        </select>
        </div>
        </div>


        <div>
        <div>
            <label>Frame Rate:</label>
        </div>
        <div>
            <select id="framerate" name="frame_rate" onChange={handler} value={data.frame_rate}>
            <option value="5fps">5fps</option>
            <option value="7fps">7fps</option>
            <option value="9fps">9fps</option>
            <option value="10fps">10fps</option>
            <option value="15fps">15fps</option>
            <option value="20fps">20fps</option>
            <option value="25fps">25fps</option>
            <option value="30fps">30fps</option>


            
        </select>
        </div>
        </div>


        <div>
        <div>
            <label>Recording Quality:</label>
        </div>
        <div>
            <select id="recording_quality" name="recording_quality" onChange={handler} value={data.recording_quality}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
           </select>
        </div>
       
    </div>

    <div>
        <div>
            <label>Video Length:</label>
        </div>
        <div>
            <input type="number" name="video_length" min="30" max="600" onChange={handler} value={data.video_length} placeholder="In seconds"/>
        </div>
    </div>


    <div>
        <div>
            <label>Auto Schedule:</label>
        </div>

        <div>
            <select id="autoschedule" name="auto_schedule" onChange={handler} value={data.auto_schedule}>
            <option value="true">ON</option>
            <option value="false">OFF</option>
            
           </select>
        </div> 
        </div>


        <div>
        <div>
            <label>Auto Schedule Start Time:</label>
        </div>
        <div>
            <input type="text" name="schedule_start" onChange={handler} value={data.schedule_start} placeholder="Schedule Start Time.."/>

        </div>
        </div>

        <div>
        <div>
            <label>Auto Schedule End Time:</label>
        </div>
        <div>
            <input type="text" name="schedule_end" onChange={handler} value={data.schedule_end} placeholder="Schedule End Time.."/>

        </div>
        
    </div>


    <div>
        <label>Enable/Disable Compression</label>
        </div>
        <div>
            <select id="autos_chedule" name="enabled_compression" onChange={handler} value={data.enabled_compression}>
            <option value="true">Enable</option>
            <option value="false">Disable</option>
            
           </select>
        </div> 


    <div>
        <div>
            <label>Compression quality:</label>
        </div>
        <div>
            <input type="number" name="compression_quality" onChange={handler} value={data.compression_quality} min="0" max="100" />
        </div>
    </div>

    <button id="submitbutton">Submit</button>
    
    </form>

    </div>
    </div>
    
    </div>
    
    )
}

export default Createstream
