const MAX_SIZE = 400

export const imageHelper = {
  resize: (file: File, size = MAX_SIZE): Promise<File> => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()

      reader.onload = (event) => {
        const image_url = event.target!.result as string
        let image = document.createElement("img")
        image.src = image_url
        image.onload = (e) => {
          const canvas = calculateRatio(image)
          let context = canvas.getContext("2d")

          if (context) {
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
            let new_image_url = canvas.toDataURL("image/jpeg", 98)
            let resizedFile = urlToFile(new_image_url)
            resolve(resizedFile)
          } else {
            reject(new Error("Could not create canvas context."))
          }
        }
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file)
    })
  },
}

const calculateRatio = (
  image: HTMLImageElement,
  maxSize: number = MAX_SIZE
): HTMLCanvasElement => {
  let canvas = document.createElement("canvas")
  let imgWidth = image.width
  let imgHeight = image.height

  if (imgWidth > imgHeight) {
    if (imgWidth > maxSize) {
      imgHeight *= maxSize / imgWidth
      imgWidth = maxSize
    }
  } else {
    if (imgHeight > maxSize) {
      imgWidth *= maxSize / imgHeight
      imgHeight = maxSize
    }
  }

  canvas.width = imgWidth
  canvas.height = imgHeight
  return canvas
}

const urlToFile = (url: string): File => {
  let arr = url.split(",")
  let mime = arr[0].match(/:(.*?);/)![1]
  let data = arr[1]
  let dataStr = atob(data)
  let n = dataStr.length
  let dataArr = new Uint8Array(n)
  while (n--) {
    dataArr[n] = dataStr.charCodeAt(n)
  }
  let file = new File([dataArr], "File.jpg", { type: mime })
  return file
}
