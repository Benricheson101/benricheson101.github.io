export function type (txt = '', speed = 100) {
  let i = 0
  const typeEffect = () => {
    document.getElementById('type').innerHTML += txt.charAt(i)
    i++
    setTimeout(typeEffect, speed)
  }
  setTimeout(typeEffect, speed)
}
