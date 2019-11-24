export default src => {
  const partes = src.split("upload/")
  return partes[0] + "upload/w_192/" + partes[1]
}