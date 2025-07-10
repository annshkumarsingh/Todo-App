import React from 'react'
import "./Tasks.css"

const Tasks = (props) => {
  const { text, onDelete, onEdit, onCheck, checked } = props;

  return (
    <div className={`h-[50px] flex justify-between text-lg font-medium w-full rounded-sm ${checked ? 'bg-emerald-400' : 'bg-gray-200'} my-[10px] shadow-lg group transition-colors duration-300`}>

      <input type="checkbox" onChange={onCheck} checked={checked}className='mx-[10px]' />

      <div className={`relative my-auto mx-[10px] w-[60%]`}>

        <div onDoubleClick={onEdit} className={`overflow-x-auto w-[100%] scrollbar-hide pr-8 whitespace-nowrap ${checked ? 'line-through' : ''}`}>
          {text}
        </div>

        <div className={`pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l ${checked ? 'from-emerald-400' : 'from-gray-200'} to-transparent transition-colors duration-300`}></div>
      </div>

      <button onClick={onDelete} className='text-white group-hover:shadow-xl rounded-tl-sm rounded-bl-sm h-[100%] p-[10px] opacity-0 w-[0] group-hover:w-[50px] group-hover:opacity-100 delay-75 duration-300 bg-red-500 hover:bg-red-600'>
        <lord-icon
        src="https://cdn.lordicon.com/xyfswyxf.json"
        trigger="hover"
        colors="primary:#ffffff"
        className="h-[27px]">
      </lord-icon>
      </button>

    </div>
  );
}

export default Tasks;