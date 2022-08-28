import { useState, useEffect, FormEvent } from 'react'
import * as Component from './App.styles'
import './App.css'
import * as Photos from './services/photos'
import { Photo } from './types/photo'
import { PhotoItem } from './components/photoItem/index'

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
    //calling the function here is a recomendation from react
  }, [])

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setUploading(true)

      //send file
      let result = await Photos.insert(file)
      setUploading(false)

      //verifying errors

      //intance of example

      //var color1 = new String("green");
      //color1 instanceof String; // returns true
      //var color2 = "coral"; //no type specified
      //color2 instanceof String; // returns false (color2 is not a String object)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Public Gallery</Component.Header>

        <Component.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Send" />
          {uploading && 'Uploading...'}
        </Component.UploadForm>

        {/* loading */}
        {loading /*inline if statement*/ && (
          <Component.ScreenWarning>
            <div className="emoji">🔃</div>
            <div>Loading...</div>
          </Component.ScreenWarning>
        )}

        {/* pictures */}
        {loading === false && photos.length > 0 && (
          <Component.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </Component.PhotoList>
        )}
        {/* no pictures in the database */}
        {loading === false && photos.length === 0 && (
          <Component.ScreenWarning>
            <div className="emoji">❗</div>
            <div>No images found.</div>
          </Component.ScreenWarning>
        )}
      </Component.Area>
    </Component.Container>
  )
}

export default App
