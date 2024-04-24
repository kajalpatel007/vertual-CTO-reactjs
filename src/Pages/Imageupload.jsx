// import React, {useState, useRef} from 'react'
// import DefaultImage from "../assets/react.svg";
// import { Link, useNavigate } from 'react-router-dom'

// // import EditIcon from "../assets/edit.svg";
// import UploadingAnimation from "../assets/react.svg";

// const ImageUpload = () => {
//      const[image, setimage]= useState()
//      const [avatarURL, setAvatarURL] = useState(DefaultImage);

//      //  const[image, setimage]= useState(null)
     
 
 
//       const navigate = useNavigate()
//      //  const inputref = useRef(null);
 
 
//       const handleSubmit = (e) => {
//            e.preventDefault()
//            axios.post('http://localhost:3001/register', {image
//          })
//            .then(result => console.log(result))
//            .catch(err => console.log(err))
//            navigate('/login')
   
//       };

//   const fileUploadRef = useRef();

//   const handleImageUpload = (event) => {
//     event.preventDefault();
//     fileUploadRef.current.click();
//   }

//   const uploadImageDisplay = async () => {
//     try {
//       setAvatarURL(UploadingAnimation);
//       const uploadedFile = fileUploadRef.current.files[0];
//       // const cachedURL = URL.createObjectURL(uploadedFile);
//       // setAvatarURL(cachedURL);
//       const formData = new FormData();
//       formData.append("file", uploadedFile);

//       const response = await fetch("http://localhost:3001/getImage", {
//         // https://api.escuelajs.co/api/v1/files/upload
//         method: "post",
//         body: formData
//       });

//       if (response.status === 201) {
//         const data = await response.json();
//         setAvatarURL(data?.location);
//       }
//     } catch(error) {
//       console.error(error);
//       setAvatarURL(DefaultImage);
//     }
//   }

//   return (
//     <div className="relative h-40 w-40 m-8">
//       <img 
//         src={avatarURL}
//         alt ="Avatar"
//         className="h-40 w-40 rounded-full" />

//       <form id="form" encType='multipart/form-data'  onSubmit={handleSubmit}>
//         <button
//           type='submit'
//           onClick={handleImageUpload}
//           className='flex-center absolute bottom-4 right-2 h-9 w-9 rounded-full'>
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/000/643/711/original/download-icon-upload-button-vector.jpg"
//             alt="Edit"
//             className='object-cover'  />
//         </button>
//         <input 
//           type="file"
//           accept='.png, .jpg, .jpeg'
//           id="file"
//           ref={fileUploadRef}
//           onChange={uploadImageDisplay}
//           hidden />
//       </form> 
 
//     </div>
//   )
// }

// export default ImageUpload;



















import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const Imageupload = () => {
  const[file, setfile]= useState()
  const [users, setusers] = useState([]);
  const navigate = useNavigate()

  const handleupload = (e) => {
    const formdata = new FormData()
    formdata.append("file", file)
    axios.post('http://localhost:3001/upload', formdata)
    .then(res => alert("image upload successful"))
    .catch(err => console.log(err))
    navigate('/login')
   }

   useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((users) => setusers(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='flex items-center content-center' >
   
       <input type='file' onChange={e => setfile(e.target.files[0])}/>
        <button onClick={handleupload}>upload</button>
        <br/>
        <img src={`http://localhost:3001/images/`+Image}></img>
    </div>
  )
}

export default Imageupload

