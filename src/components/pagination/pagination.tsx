import React, { useEffect, useRef, useState } from 'react'

const Pagination = ({pageNo,setPageNo,totalPages}:any) => {
    const inputRef:any = useRef<HTMLInputElement>();

    const handlePagination = (action:string)=>{
        switch(action){
            case 'go':
                console.log(inputRef?.current?.value);
                if(inputRef.current.value > totalPages || inputRef.current.value < 1) return null
                    return setPageNo(Number(inputRef?.current?.value))
            case 'prev':
                return setPageNo(pageNo - 1)
            case 'next':
                return setPageNo(pageNo + 1)
        }

    }


  return (
    <div className='border border-1 row m-3   '>
      <div className="col-4 col-sm-4 d-flex">
        <input className='form-control me-2' ref={inputRef} type="text" /> <button className='btn btn-primary' onClick={()=>handlePagination("go")}>go</button>  
      </div>

      <div className="col-4 col-sm-4 text-center">
        <button className='btn btn-primary me-1' disabled={pageNo===1} onClick={()=>handlePagination('prev')}>&lt;</button>
        <button className='btn btn-light me-1' >{`${pageNo}/${totalPages}`}</button>
        <button className='btn btn-primary' disabled={pageNo===totalPages} onClick={()=>handlePagination('next')}>&gt;</button>
      </div>

      <div className="col-4 col-sm-4 text-end">
        <div className='d-flex justify-content-end'>
        {`${pageNo}/${totalPages}`}
        </div>
      </div>
    </div>
  )
}

export default Pagination
