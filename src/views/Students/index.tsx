"use client"
import { Student, dummyData } from '@/models/StudentModel'
import { useRouter } from 'next/navigation'
import React from 'react'

const Students = () => {
  const router = useRouter();
  const columns = ["Position", "Name", "Total Marks"];

  // Sorting the array of students by their position
  const sortedStudents = dummyData.slice().sort((a, b) => a.position - b.position);
  return (
    <div>
      <table>
        <thead>
          {
            columns.map((col: string, i: number) => (
              <th key={i} className='p-2 border-2 text-center'>{col}</th>
            ))
          }
        </thead>
        <tbody>
           {
            sortedStudents.map((stud:Student,index:number)=>(
              <tr onClick={()=>router.push(`/students/${stud.name}`)} className=' cursor-pointer hover:text-blue-700 transition-all duration-300'  key={index}>
                   <td className='p-2 border-2 text-center'>{stud.position}</td>
                   <td className='p-2 border-2 text-center'> {stud.name}</td>
                   <td className='p-2 border-2 text-center'>{stud.totalMarks}</td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default Students