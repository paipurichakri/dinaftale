import React, { useEffect, useState } from 'react'

const AddStudent = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get("")
        .then((res)=>{
         setData(res.data);
        })
        .catch((err)=>{
         console.log(err);
        })
    })
  return (
     <>
     <div className='container'>
     <div className='row'>
     <div className='col-lg-12'>
       <div className='table table-responsive'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>SUBJECT</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data)=>{
                        return(
                            <tr>
                            <th>{data.id}</th>
                            <th>{data.name}</th>
                            <th>{data.subject}</th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
       </div>
     </div>
     </div>
     </div>
     </>
  )
}

export default AddStudent