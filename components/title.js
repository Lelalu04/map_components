export default function title(props) {
    let {element, text, className} = props
    const title = document.createElement(element)
    title.textContent = text
    title.className = className
    return title
}