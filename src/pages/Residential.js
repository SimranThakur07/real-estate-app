import React, { useEffect, useState } from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Slider from '../componenets/Slider'
import ProjectCard from '../componenets/ProjectCard'
import data from '../residential.json'
import axios from 'axios'

const Residential = () => {
 const [residentialData, setResidentialData] = useState([]) 
 const [page, setPage] = useState([])
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
     setPage(response?.data?.nbPages)
     console.log(response?.data?.hits);
     console.log(response?.data?.nbPages);
  } catch (error) {
      console.error(error);
  }
  

  }
  useEffect(() => {
    getResidentialData()
  }, [])
  

  return (
   <>
   <Navbar/>
   <Slider/>
   <section className='pages-section'>
   <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Residential</li>
  </ol>
</nav>
<div className="row row-cols-1 row-cols-md-4 g-4">
    {
        residentialData?.map((i) => {
            return (
            <div className="col" key={i.id}>
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
            )
        })
    }
  
</div>
<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</section>
   <Footer/>
   </>
  )
}

export default Residential