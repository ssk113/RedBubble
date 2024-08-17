const formatNames = (string) => {
    if (string.length < 35) {
        return string
    }
    let newStr = ""

    for (let i = 0; i < 35; i++) {
        newStr += string[i]
    }
    return newStr + "..."
}



export default formatNames