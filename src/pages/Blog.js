import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import Slider from "../componenets/Slider";
import data from "../blog.json";
import BlogCard from "../componenets/BlogCard";
// import data from '../commercial.json'
const Blog = () => {
  return (
    // <>
    //   <Navbar />
    //   <Slider />
    //   <section className="pages-section">
    //     <nav style={{ bsBreadcrumbDivider: ">" }} aria-label="breadcrumb">
    //       <ol className="breadcrumb">
    //         <li className="breadcrumb-item">
    //           <a href="/">Home</a>
    //         </li>
    //         <li className="breadcrumb-item active" aria-current="page">
    //           Blogs
    //         </li>
    //       </ol>
    //     </nav>
    //     <div class="row row-cols-1 row-cols-md-4 g-4">
    //       {data?.blogs?.map((i) => {
    //         return (
    //           <div class="col">
    //             <BlogCard
    //               title={i.title}
    //               date={i.date}
    //               author={i.author}
    //               image={i.image}
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </section>
    //   <Footer />
    // </>
    <>
    <Navbar/>
    <Slider/>
    <section className='pages-section'>
    <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
   <ol className="breadcrumb">
     <li className="breadcrumb-item"><a href="/">Home</a></li>
     <li className="breadcrumb-item active" aria-current="page">Commercial</li>
   </ol>
 </nav>
 <div class="row row-cols-1 row-cols-md-4 g-4">
     {
         data?.blogs?.map((i) => {
             return (
             <div class="col">
     <div class="card h-100" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
      <img src={i.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{i.title}</h5>
        <p class="card-text">{i.date}</p>
        <p class="card-text">{i.author}</p>
        <p class="card-text">{i.description}</p>
      </div>
    </div>
   </div>
             )
         })
     }
   
 </div>
 </section>
    <Footer/>
    </>
  );
};

export default Blog;
