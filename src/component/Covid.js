import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
export default function Covid() {
 const [confirmed, setConfirmed] = useState()
 const [recovered, setRecovered] = useState()
 const [deaths, setDeaths] = useState()

 useEffect(() => {
     Axios.get('https://covid19.mathdro.id/api')
     .then(res=>{
         console.log(res)
         setConfirmed(res.data.confirmed.value)
         setRecovered(res.data.recovered.value)
         setDeaths(res.data.deaths.value)
     })
 }, [])
    return (
        <div>
    <MediaCard  text='Confirmed Cases' value ={confirmed} color='mediumPurple' />
    <MediaCard  text='Recovered Cases' value ={recovered} color='green' />
    <MediaCard  text='Death Cases' value ={deaths} color='red' />
    
        </div>
    )
}
