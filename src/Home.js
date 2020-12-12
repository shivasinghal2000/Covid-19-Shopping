import React from 'react'
import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://cdn.mos.cms.futurecdn.net/WxgePFJHTNAQRBuP3g5hoM.jpg' alt='' />
        <div className='home_row'>
          <Product id='1222' title='Autoridez Mens Fabric Face Mask for Bikers Dust Protection (Black)' price={100} image='https://images-na.ssl-images-amazon.com/images/I/51n8peCP7PL.jpg' rating={3} />

          <Product id='1223' title='Full Finger Off-Road Gloves Hard Case Anti-Slip Motorbike Gloves' price={1299.0} rating={2} image='https://images-na.ssl-images-amazon.com/images/I/91QpCCaPRNL._SL1500_.jpg' />

          <Product id='1323' title='Marc Loire Cotton 6-Layered Washable face mask for men/women' price={399.0} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/71JBpPNOtIL._UL1500_.jpg' />

        </div>
        <div className='home_row'>
          <Product id='1324' title='Gadgets Appliances Filter Face Mask (Random Colour) - Pack of 2' price={399.0} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/31p3CGagA1L.jpg' />
          <Product id='1326' title='Icefeel Instant Hand Sanitizer- 5 liters (Rose)' price={850} rating={3} image='https://images-na.ssl-images-amazon.com/images/I/61lgD-EDrQL._SL1100_.jpg' />
          <Product id='1427' title='Kapiva Wild Amla Juice 1L Made from Pratapgarh Amlas | No Added Sugar' price={350} rating={2} image='https://images-na.ssl-images-amazon.com/images/I/81aU5It9XbL._SL1500_.jpg' />

        </div>
        <div className='home_row'>
          <Product id='1224' title='Buy 3 Fruit & Vegetable Washes 200ml and get 2 SANITIZER 100ml FREE' price={400} rating={3} image='https://images-na.ssl-images-amazon.com/images/I/612FMVgPPdL._SL1100_.jpg' />

          <Product id='1225' title='Savlon Surface Disinfectant Spray Sanitizer, 170g (230ml)' price={136} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71NlobNRhkL._SL1200_.jpg' />

          <Product id='1226' title='Dabur Sanitize γ - Hand Sanitizer | Alcohol Based Sanitizer - 450 ml' price={250} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71TXfCVzd7L._SL1500_.jpg' />

        </div>
        <div className='home_row'>
          <Product id='1424' title='Cureveda™ Herbal Pureprash sugar free Chyawanprash (500gms)' price={700} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71Xem4Vmm-L._SL1500_.jpg' />

          <Product id='1425' title='FARGANIC Ayush Kadha Mix / Kwath Powder - 200 Gm' price={467} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71NlobNRhkL._SL1200_.jpg' />

          <Product id='1426' title='Dabur Tulsi Drops for Natural Immunity Boosting (30ml)' price={200} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/71DwvgKg3cL._SL1500_.jpg' />

        </div>
        <div className='home_row'>
          <Product id='1527' title='WOW Life Science Immunity Booster Capsules - Support Healthy Immune System - 60 Veg Capsules' price={750} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/61p0jMvaZuL._SL1024_.jpg' />
          <Product id='1627' title='ORGANIC INDIA Ayush KWATH Immunity Booster - 25 Tea Bags' price={250} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/81n5Eya2pKL._SL1500_.jpg' />
          <Product id='2127' title='Organic India Immunity - 60 Capsules Bottle' price={450} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71YkLOGRFdL._SL1500_.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Home
