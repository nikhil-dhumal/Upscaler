import { useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload } from "@fortawesome/free-solid-svg-icons"

const UploadButton = ({ setImages, imgPairUrls, size }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleImageUploads = (e) => {
    const files = e.target.files
    const uniqueFiles = Array.from(files).filter(
      file => !imgPairUrls.some(existingFile => existingFile.name === file.name)
    )

    const fileObjs = uniqueFiles.map((file) => ({ file, enhancing: false }))

    setImages(prev => [...prev, ...fileObjs])

    if (location.pathname !== '/enhance') {
      navigate("/enhance")
    }
  }

  let button

  if (size === 1) {
    button = (
      <>
        <label
          className="btn"
          htmlFor="img-uploader"
        >
          <FontAwesomeIcon className="btn-icon" icon={faUpload} />
          Select Images
        </label>
        <input
          type="file"
          id="img-uploader"
          multiple
          hidden
          onChange={handleImageUploads}
        />
      </>
    )
  } else if (size === 2) {
    button = (
      <>
        <label
          className="btn large-btn dark-btn"
          htmlFor="img-uploader"
        >
          <FontAwesomeIcon className="btn-icon" icon={faUpload} />
          Select Images
        </label>
        <input
          type="file"
          id="img-uploader"
          multiple
          hidden
          onChange={handleImageUploads}
        />
      </>
    )
  } else {
    button = (
      <>
        <label
          className="btn x-large-btn dark-btn"
          htmlFor="img-uploader"
        >
          <FontAwesomeIcon className="btn-icon" icon={faUpload} />
          Select Images
        </label>
        <input
          type="file"
          id="img-uploader"
          multiple
          hidden
          onChange={handleImageUploads}
        />
      </>
    )
  }

  return button
}

export default UploadButton