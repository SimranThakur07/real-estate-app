import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import data from '../residential.json'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Residential = () => {
  const [residentialData, setResidentialData] = useState([]) 
 const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';

  const getResidentialData = async () => {
    try {
     const response = await axios.get(url, {
     headers: {
		'X-RapidAPI-Key': '9051e218e9msh526a21aafe136c7p10594bjsneb4b3c161dd1',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	}
     })
     setResidentialData(response?.data?.hits)
     console.log(response?.data?.hits);
     console.log(response?.data?.hits);
  } catch (error) {
      console.error(error);
  }
  

  }
  useEffect(() => {
    getResidentialData()
  }, [])

  return (
    <>
    <section className='residential-area'> 
        <div className="top-header">
            <h2 style={{textAlign: "center"}}>Project Listing</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur omnis est ut voluptatibus eius?</p>
        </div>
        <div className="resi_project">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {
            residentialData.slice(0, 8)?.map((i) => {
              return (
                <div class="col">
              <ProjectCard
               title={i?.agency?.name}
               location={i?.agency?.product}
               price={i.price}
               BHK={i?.purpose}
               image={i?.coverPhoto?.url}
               purpose={i?.purpose}
               propertyType="residential"
              />
            </div>
             ) })
          }
       </div>
        </div>
        <Link to='/residential' className='view-more'>View More</Link>
    </section>
    </>
  
  )
}

export default Residential