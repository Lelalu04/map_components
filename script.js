import container_wrapper from "./components/container_wrapper.js"
import title from "./components/title.js"
import shop_list from "./components/shop_list.js"
import iframe from "./components/map.js"
const root = document.querySelector(`#root`)

const container = container_wrapper(`container`)

const content_wrapper = container_wrapper("content-wrapper")
const shops_wrapper = container_wrapper("shops-wrapper")
const titleh2 = title({
    element: `h2`,
    text: `Find Us`,
    className: `shops-section-title`
})

const shopList = shop_list()

shops_wrapper.append(titleh2,shopList)

const mapWrapper = container_wrapper("map-wrapper")
const map = iframe()

mapWrapper.append(map)
content_wrapper.append(shops_wrapper,mapWrapper)
container.append(content_wrapper)
root.append(container)