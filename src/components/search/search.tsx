import React, { useCallback, useState } from 'react'
const Search = () => {
    const [searchQuery,setSearchQuery] = useState('')
    const [flag,setFlag] = useState(true);
    const [timer,setTimer] = useState<undefined | number >(undefined);
    const handleSearch = (e:any)=>{
        setSearchQuery(e?.target.value.trim())
    }
    const optHandleSearch = (e:any)=>{
        console.log('dddd')
        if(flag){
            handleSearch(e);
            setFlag(false);
            return 1;
        }
        clearTimeout(timer);
        const timerId = setTimeout(()=>handleSearch(e),500);
        // @ts-ignore
        setTimer(timerId)
    }
    
  return (
    <div className={`container`}>
      <input 
        onChange={optHandleSearch} 
        className={`form-control`} 
        type="text" 
        placeholder='Search'
        />
        your result is {searchQuery}
    </div>
  )
}

export default Search
