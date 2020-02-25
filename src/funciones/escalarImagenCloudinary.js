export default (src,w=448) => {
  let result = src
  if (w < 600) {
    const partes = src.split("upload/")
    result = partes[0] + "upload/w_"+448+"/" + partes[1]

  }
  return result
}