import React, { useEffect, useRef, useState } from 'react';

const Datalist = ({ data }: { data: string[] }) => {
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Optimized debouncing with useCallback and cleanup
  const debouncedGetData = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!inputRef.current) return; // Handle potential unmounted component

      setFilteredData(
        data.filter((item) => item.toLowerCase().includes(e?.target.value.toLowerCase()))
      );
    },
    [data] // Only recalculate if data changes
  );

  useEffect(() => {
    const timeoutId = setTimeout(debouncedGetData, 500);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [debouncedGetData]); // Only run when debouncedGetData changes

  return (
    <div className="container border border-primary my-5">
      <input
        onChange={debouncedGetData}
        className="form-control"
        placeholder="Searchable list"
        type="text"
        ref={inputRef} // Capture input reference
      />
      <div className="container my-1">
        {filteredData.map((item, index) => (
          <li key={`li_${index}`} onClick={(e:any) => console.log(e.target.id)} id={item}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Datalist;
