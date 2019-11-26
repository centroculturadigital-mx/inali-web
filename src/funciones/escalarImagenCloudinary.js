export default (src,w=192) => {
  const partes = src.split("upload/")
  return partes[0] + "upload/w_"+w+"/" + partes[1]
}