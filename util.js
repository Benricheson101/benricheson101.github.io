export function type (txt = '', speed = 100) {
  let i = 0
  const typeEffect = () => {
    document.getElementById('type').innerHTML += txt.charAt(i)
    i++

    if (i >= txt.length) {
      return
    }

    setTimeout(typeEffect, speed)
  }
  setTimeout(typeEffect, speed)
}

export function getBotInfo(id) {
  return fetch(`https://api.red-panda.red/del/guildcount/?id=${id}`)
    .then((res) => res.json())

  // return new Promise((resolve) => {
  //   resolve({
  //     serverCount: 123456,
  //     shardCount: 7890
  //   })
  // })
}
