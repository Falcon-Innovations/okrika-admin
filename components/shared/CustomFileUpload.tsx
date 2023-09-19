import React, {useState, useEffect} from 'react'
import {Upload} from 'lucide-react';
import cn from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  uploadIcon?: JSX.Element;
  name: string;
  classNames?: string;
}

type CustomInputProps = Omit<InputProps, 'className'>

const CustomFileUpload = ({uploadIcon, classNames, name, ...props}: CustomInputProps) => {
  const [fileSelected, setFileSelected] = React.useState<File>()


  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
    }
  };

  return (
    <div className='w-full h-[48px] cursor-pointer relative bg-[#f6f6f6] border-none focus-within:border-deluge-600 focus-within:ring-deluge-600 rounded-md outline-none p-2 ' tabIndex={100}>
      <input
        accept="image/* pdf"
        name={name}
        id={name}
        type="file"
        multiple={false}
        onChange={handleImageChange}
        className={cn(' opacity-0 border-none w-full z-10 absolute left-0 top-0 h-full outline-none block p-2 bg-[#f6f6f6] text-black', classNames)}
        {...props}
      />
      <span className='absolute text-gray-500 top-[50%] translate-y-[-50%] left-2 capitalize'>{fileSelected?.name ? fileSelected.name.length > 50 ? fileSelected.name.substring(0, 50) + "..." : fileSelected.name : props?.placeholder}</span>
      {
        uploadIcon ? uploadIcon : (
          <Upload className="h-5 w-5 text-gray-400 absolute right-5 top-[50%] translate-y-[-50%]" aria-hidden="true" onClick={uploadFile} />
        )
      }
    </div>
  )
}

export default CustomFileUpload