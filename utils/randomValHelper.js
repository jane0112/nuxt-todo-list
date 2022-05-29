export const getRandomVal = () => {
  const randomBuffer = new Uint32Array(1)
  window.crypto.getRandomValues(randomBuffer)
  return randomBuffer[0].toString()
}
