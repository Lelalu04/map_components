export default function createLiInsideA(liText,aText, href) {
    const li = document.createElement(`li`)
    li.textContent = liText
    const a = document.createElement(`a`)
    a.textContent = aText
    a.setAttribute(`href`, href)
    li.append(a)
    return li
}