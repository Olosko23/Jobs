import React,{useState, useEffect} from 'react'
import {BiTimeFive} from 'react-icons/bi';

const Jobs = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key' : 'df99ef155emshea78dab7a0f9183p18689djsn969f4f85aba7',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }
    
    const url = ('https://jsearch.p.rapidapi.com/serach?query=Python%20developer%2C%20USA&num_pages=2', options)

    useEffect(() =>{
        const getJobs = async () =>{
            setLoading(true);
            const response = await fetch(url);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                //setLoading(false);
                console.log(filter) 
            }
            return () => {
                componentMounted = false;
            }
        }
        getJobs();
    }, []);

    const Loading = () => {
        return(
            <div>Loading.. Please Wait</div>
        )
    };

  return (
    <div>
      { loading ? <Loading />: (
        <div>
            Jobs are here
        </div>
      ) }
    </div>
  )
}

export default Jobs