"use client"
import { Student, Subject, dummyData } from '@/models/StudentModel';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaFileDownload } from "react-icons/fa";


const StudentDetails = () => {
    const params = useParams();
    const templateRef = useRef(null);
    const columns = ["Subject", "Total Marks", "Obtained Marks"];

    //setting the targetStudent by url slug 
    const [targetStudent, setTargetStudent] = useState<Student>();
    useEffect(() => {
        const student = dummyData.find((stud: Student) => stud.name === params.slug);
        setTargetStudent(student);
    }, [params.slug])

    //generate pdf function 
    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            format: 'a4',
        }) as any;
    
        //custom table design
        if (targetStudent) {
            doc.text(`Name: ${targetStudent.name}`, 20, 20);
            doc.text(`Roll: ${targetStudent.roll}`, 20, 30);
            doc.line(20, 35, 190, 35);
    
            doc.autoTable({
                html: '#studentTable',
                startY: 50,
                didDrawPage: function (data:any) {
                    data.doc.setFontSize(12);
                    data.doc.setTextColor(40);
                    data.doc.text("Subject", data.settings.margin.left, 45);
                    data.doc.text("Total Marks", data.settings.margin.left + 80, 45);
                    data.doc.text("Obtained Marks", data.settings.margin.left + 130, 45);
                },
            });
    
            //saving the doc by student name
            doc.save(`${params.slug}'s_result.pdf`);
        }
    };
    
    
    

    return (
        <div ref={templateRef} className=' flex flex-row justify-center items-center w-full h-screen'>
            <div className='flex flex-col gap-6'>
                {/* Name , roll & Download button container */}
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-6'>
                        <p>
                            <span className='text-lg font-bold'>Name: </span> {targetStudent?.name}
                        </p>
                        <p>
                            <span className='text-lg font-bold'>Roll: </span>  {targetStudent?.roll}
                        </p>
                    </div>
                    <div className='text-xl hover:text-blue-700 cursor-pointer w-fit h-fit' onClick={handleGeneratePdf}>
                        <FaFileDownload />
                    </div>
                </div>

                <table id="studentTable">
                    <thead>
                        {
                            columns.map((col: string, i: number) => (
                                <th key={i} className='p-2 border-2 text-center'>{col}</th>
                            ))
                        }
                    </thead>
                    <tbody>
                        {
                            targetStudent?.subjectsWithMarks.map((sub: Subject, index: number) => (
                                <tr key={index}>
                                    <td className='p-2 border-2 text-center'>{sub.name}</td>
                                    <td className='p-2 border-2 text-center'> {sub.totalMarks}</td>
                                    <td className='p-2 border-2 text-center'>{sub.obtainedMarks}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default StudentDetails