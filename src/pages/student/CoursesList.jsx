import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/students/searchbar';
import CourseCard from '../../components/students/coursecard';
import { assets } from '../../Assets/assets';

function CoursesList() {
  const {navigate,allCourses} =useContext(AppContext);
  const {input} = useParams();
  const [filteredCourse,setFilteredCourse]=useState([])
  useEffect(()=>{
    if (allCourses && allCourses.length>0){
      const tempCourses = allCourses.slice()
      input?
      setFilteredCourse(
        tempCourses.filter(
          item=>item.courseTitle.toLowerCase().includes(input.toLowerCase())
        ) : setFilteredCourse(tempCourses)
        )
      )
    },[allCourses,input]

  return ( 
<>
<div className='relative md:px-36 px-8 pt-20 text-left'>
<div className='flex md:flex-row flex-col gap-6 items-start justify-between
w-full'>
<div>
<h1 className='text-4x1 font-semibold text-gray-800'>Course List</h1>
<p className='text-gray-500'>
<span className='text-blue-600 cursor-pointer'
onClick={()=> navigate('/')}>Home</span> / <span>Course List</span></p>
</div>
<SearchBar data={input} />
</div>
<div>
    {allCourses.map(()=>)}
</div>
</div>

</>

  )
}

export default CoursesList