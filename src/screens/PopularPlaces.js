import React from 'react'

let arr = []
function getCity(index, data) {
    let city = data.seoLinks.poi.sections[0]['name']
    let info = city.split(" ")
    city = info[3]
    console.log(city)

    arr.push({ city, index })
    // console.log(arr)
    return city
}

const handleGet = () => {
    for (let index = 400; index < 450; index++) {
        try {
            fetch(`https://travelers-api.getyourguide.com/locations/${index}/seo-links`, {
                "credentials": "omit",
                "headers": {
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "en-US",
                    "accept-currency": "INR",
                    "geo-ip-country": "IN",
                    "x-gyg-geoip-country": "IN",
                    "x-gyg-app-type": "Web",
                    "x-allow-cache": "true",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-site"
                },
                "referrer": "https://www.getyourguide.com/",
                "method": "GET",
                "mode": "cors"
            }).then((res) => {
                return res.json();
            })
                .then((data) =>
                    getCity(index, data))
        }
        catch {
            console.log("err")
        }
    }

    console.log(arr)
}

const PopularPlaces = () => {
    return (
        <div>

        </div>
    )
}

export default PopularPlaces