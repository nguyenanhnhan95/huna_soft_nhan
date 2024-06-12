import { useRef, useState } from "react";
import "../../css/composite/uploadImg.css"
import { convertFileToImg } from "../../common/product";
function UploadImg() {
    const [selectedFile, setSelectedFile] = useState(null);
    const maxSize = 10240 * 1024;
    const fileUploadRef = useRef(null);
    const handleFileUpload = () => {
        fileUploadRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        let images= convertFileToImg(event.target.files)
        console.log(images)
        if (file) {
            if (file.size > maxSize) {
                alert('File size exceeds the maximum limit of 10 MB');
            } else if (!['image/png', 'image/jpeg'].includes(file.type)) {
                alert('Only .png and .jpg files are accepted');
            } else {
                setSelectedFile(URL.createObjectURL(file));
            }
        }
    };

    return (
        <div className="col-12 card-upload-img">
            <label>Hình ảnh</label>
            <input type="file" id="file" style={{ display: 'none' }} ref={fileUploadRef} onChange={handleFileChange} accept=".png,.jpg" />
            <div className="card-upload-img-upload">
                <button className="card-upload-img-upload-button" value="Upload" onClick={handleFileUpload}><i className="fa-solid fa-upload" />Chọn hình ảnh</button>
                {selectedFile ? (
                    <img
                        style={{ width: '200px', height: '100px' }}
                        src={selectedFile}
                        alt="Selected"
                    />
                ) : (
                    <img style={{ display: 'none' }} />)}
            </div>
        </div>
    )
}
export default UploadImg;