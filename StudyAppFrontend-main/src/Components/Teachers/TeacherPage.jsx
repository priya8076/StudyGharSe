import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Utils/Loading.jsx'
import TeacherProfile from './TeacherPageComponent.jsx'

function TeacherPage() {

  const {id}= useParams();
  const [teacher, setTeacher] = useState({});
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_BASE_URL;


  useEffect(()=>{
    const fetchTeachers = async ()=>{
      try{
        const res = await axios.get(`${baseUrl}teacher/${id}`);
        if(res.status === 200){
          setTeacher(res.data);
          setLoading(false);
        }else{
          alert("something went wrong");
          window.location.href = "/";
        }
      }
      catch(e){
        console.error(e);
      }
    }
    fetchTeachers();
  },[])

  if(loading){
    return <Loading />
  }

 if(!loading){
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <TeacherProfile teacher={teacher} />
    </div>
  )
}
 } 

export default TeacherPage
