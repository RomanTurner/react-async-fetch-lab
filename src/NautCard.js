import React from 'react'
const imgISS =
  "https://cdn.vox-cdn.com/thumbor/CySJFj6hDWFkLeFssZb95Yg-zxk=/0x0:1050x700/1200x800/filters:focal(443x319:611x487)/cdn.vox-cdn.com/uploads/chorus_image/image/66137681/lego_iss_international_space_station_007_32.5.jpg";

export default function NautCard(props) {
   console.log(props);
         return (
           <div>
             <h1>{props.data.name}</h1>
             <h3>Craft: {props.data.craft}</h3>
             {props.data.craft === "ISS" ? (
               <img src={imgISS} alt='ISS' />
             ) : null}
           </div>
         );
    
}





