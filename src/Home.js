import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YTY1OTIxNzgt-w1500._CB417541669_.jpg"/>
                <div className="home__row">
                    <Product 
                        id="123457"
                        title="GEAR4 Icebox Designed for Samsung Galaxy S7 Edge Case, Advanced Impact Protection by D3O - Orange" 
                        price={10.77} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41UvFbVNOtL._AC_SX425_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="7438734"
                        title="Morphy Richards Coffee On The Go Filter Coffee Machine 162740 Black and Brushed Stainless Steel Coffee Maker" 
                        price={39.96} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81B5FwpivTL._AC_SX466_.jpg" 
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="909080"
                        title="Razer Blade Stealth 13: The 1st gaming ultrabook in the world with 13.3 Inch Full HD 120 Hz, Intel Core 7 11th Gen Tigerlake NVIDIA GeForce GTX 1650 Ti 16 GB RAM Chroma RGB lighting | Qwerty UK Layout" 
                        price={549.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71LWtKkTs0L._AC_SX425_.jpg" 
                        rating={3}
                    />
                    <Product 
                        id="343434"
                        title="Anker AK-UBA 2.4G Wireless Vertical Ergonomic Optical Mouse, 800 / 1200 /1600 DPI, 5 Buttons for Laptop, Desktop, PC, Macbook - Black" 
                        price={15.29} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51j0zidX0VL._AC_SX425_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="323232"
                        title="APEMAN Dual Lens Dash Cam for Cars Front and Rear with Night Vision and SD Card Included, 1080P FHD Mini Car Camera, 170°Wide Angle Driving Recorder with G-Sensor, Parking Monitor, Loop Recording, WDR" 
                        price={28.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71mo1euvaQL._AC_SX425_.jpg" 
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="444323"
                        title="Vamvo Outdoor Indoor Projector Screen with Stand Foldable Portable Movie Screen 120 Inch (16:9) Full-Set Bag for Home Theater Camping and Recreational Events" 
                        price={99.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71zObZaeKtL._AC_SX425_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="445323"
                        title="Turtle Beach Stealth 600 White 2nd Generation Wireless Gaming Headset for PS4 and PS5" 
                        price={99.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61gsYpuZecL._AC_SX569_.jpg" 
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg