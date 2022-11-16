import container_wrapper from "./container_wrapper.js"
import title from "./title.js"
import info from "./info.js"
export default function shop(props) {
    let {titleText, phoneNumber, emailText, addressText, addresslink} = props
    const shop = container_wrapper(`shop`)
    const shopTitle = title({
        element: `h3`,
        text: titleText, 
        className: `shop-title`
    })

    const ul = document.createElement(`ul`)
    // if(phoneNumber && emailText && addressText){
        const phone = info(`Phone: `,phoneNumber, `tel:${phoneNumber}`)
        const email = info(`Email: `,emailText, `mailto:${emailText}`)
        const address = info(`Address: `,addressText, addresslink)
        address.setAttribute(`target`, "_blank")
    
        ul.append(phone,email,address)
    // }
    shop.append(shopTitle,ul)
    return shop
}
