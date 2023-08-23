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
          const canvas = imageHelper.calculateRatio(image)
          let context = canvas.getContext("2d")

          if (context) {
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
            let new_image_url = canvas.toDataURL(file.type, 98)
            let resizedFile = imageHelper.urlToFile(new_image_url, file.name)
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

  calculateRatio: (
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
  },

  urlToFile: (url: string, fileName): File => {
    let arr = url.split(",")
    let mime = arr[0].match(/:(.*?);/)![1]
    let data = arr[1]
    let dataStr = atob(data)
    let n = dataStr.length
    let dataArr = new Uint8Array(n)
    while (n--) {
      dataArr[n] = dataStr.charCodeAt(n)
    }
    return new File([dataArr], fileName, { type: mime })
  },

  toBase64: (file: File | Blob): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result as string)
      }

      reader.readAsDataURL(file)
      reader.onerror = reject
    }),
}
