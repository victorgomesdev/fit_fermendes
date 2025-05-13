export function imageToBase64(event: Event) {

  const file = (<HTMLInputElement>event.target).files![0]

  return new Promise<{
    base64: string,
    file: File,
    imageName: string
  }>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => resolve({ base64: reader.result as string, file: file, imageName: file.name })
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

}