import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css';
import {FiUpload} from 'react-icons/fi';

interface Props {
  onFileUploaded:(file: File) => void; 
}

const Dropzone: React.FC<Props> = ({ onFileUploaded })=> {

const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    //console.log(acceptedFiles);
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,accept:'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
        {selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Point thumbnail" /> 
        : <p>
            {
            isDragActive ?
            <p><FiUpload />Arraste seu arquivo para cá ...</p> :
            <p><FiUpload />Insira aqui uma imagem do seu estabelecimento.</p>
            }
        </p>  }
      
    </div>
  )
}

export default Dropzone;