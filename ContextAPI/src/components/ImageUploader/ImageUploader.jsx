import React,{useState} from "react";
import "./ImageUploader.css";

function ImageUploader() {
    const [imageUrl, setImageUrl] = useState(null);

    const imageStyle = {
        width : "100%",
        height : "100%",
        objectFit : "cover"
    }

    const handleUpload = (event) => {
        const images = event.target.files[0];
        if (images) {
          const reader = new FileReader();//DOnt ever pass argument to the filereader part
          reader.onload = function (e) {
            const image = e.target.result;
            setImageUrl(image);
          };
          reader.readAsDataURL(images); 
        }
      };
      
  return (
    <>
      <div className="main-box">
        <input  id="imageSubmiter" onChange={handleUpload} type="file" accept="*/image" />
        <div className="image-container">
            <img src={imageUrl} style={imageStyle} alt="" />
        </div>
      </div>
    </>
  );
}

export default ImageUploader;
