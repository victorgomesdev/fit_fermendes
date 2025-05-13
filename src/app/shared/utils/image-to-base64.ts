export function imageToBase64Util(event: Event) {

  const target = (<HTMLInputElement>event.target)
  const file = target.files![0]

  target.value = ''
  
  return new Promise<{
    base64: string,
    imageName: string
  }>((resolve, reject) => {

    if (!file) {
      reject(null)
    }

    const reader = new FileReader()

    reader.onload = () => resolve({ base64: reader.result as string, imageName: file.name })
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

}