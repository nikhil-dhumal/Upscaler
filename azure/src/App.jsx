import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { Bounce, ToastContainer, toast } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css'

import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Pricing from "./pages/Princing"
import Enhance from "./pages/Enhance"

import enhanceApi from "./api/modules/enhance.module"

const App = () => {
  const [images, setImages] = useState([])
  const [imgPairUrls, setImgPairUrls] = useState([])

  useEffect(() => {
    const enhanceImage = async (image) => {
      if (image.enhancing) return

      setImages((prev) => {
        return prev.map((img) => {
          if (img.name === image.name) {
            return { ...img, enhancing: true }
          }

          return img
        }).filter(Boolean)
      })

      const { response, err } = await enhanceApi.enhance({ image: image.file })

      setImages((prev) => {
        return prev.map((img) => {
          if (img.name === image.name) {
            return null
          }

          return img
        }).filter(Boolean)
      })

      if (response) {
        toast.success(`${image.file.name} was enhanced successfully!`, { transition: Bounce })
        const reader = new FileReader()
        reader.onload = (e) => {
          const dataUrl = e.target.result
          const imgPair = ({ name: image.file.name, original: dataUrl, enhanced: response.image })
          setImgPairUrls((prev) => [...prev, imgPair])
        }
        reader.readAsDataURL(image.file)
      }

      if (err) {
        toast.error(`Enhancement of ${image.file.name} failed!`, { transition: Bounce })
      }
    }

    if (images.length > 0) {
      images.map(enhanceImage)
    }
  }, [images, setImages])

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="enhance" element={<Enhance images={images} setImages={setImages} imgPairUrls={imgPairUrls} setImgPairUrls={setImgPairUrls} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App