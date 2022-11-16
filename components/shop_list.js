import container_wrapper from "./container_wrapper.js"
import shop from "./shop.js"
export default function shopList() {
    
    const shopList = container_wrapper(`shops-list`)
    const shop1 = shop({
        titleText: `Parduotuve 1`, 
        phoneNumber: `+370456464564`, 
        emailText: `shop2@parduotuve.lt`,
        addressText: `Arsenalo g. 5, Vilnius 01143`, 
        addresslink:`https://goo.gl/maps/mLds4bsZazJgdbk19`
    })
    const shop2 = shop({
        titleText: `Parduotuve 2`, 
        phoneNumber: `+370456464564`, 
        emailText: `shop2@parduotuve.lt`,
        addressText: `Arsenalo g. 5, Vilnius 01143`, 
        addresslink:`https://goo.gl/maps/mLds4bsZazJgdbk19`
    })
    const shop3 = shop({
        titleText: `Parduotuve 3`, 
        phoneNumber: `+370456464564`, 
        emailText: `shop2@parduotuve.lt`,
        addressText: `Arsenalo g. 5, Vilnius 01143`, 
        addresslink:`https://goo.gl/maps/mLds4bsZazJgdbk19`
    })
    const shop4 = shop({
        titleText: `Parduotuve 4`, 
        phoneNumber: `+370456464564`, 
        emailText: `shop2@parduotuve.lt`,
        addressText: `Arsenalo g. 5, Vilnius 01143`, 
        addresslink:`https://goo.gl/maps/mLds4bsZazJgdbk19`
    })
    shopList.append(shop1,shop2,shop3,shop4)
    return shopList
}

