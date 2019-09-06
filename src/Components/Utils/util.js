

const msToTime = ms => {
    const sec = ms / 1000
    return `${Math.floor(sec / 60 / 60) } : ${Math.floor(sec / 60)} : ${Math.floor(sec)}`
}

export default msToTime