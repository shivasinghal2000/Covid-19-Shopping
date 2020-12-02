import React from 'react'
import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PYA/2020/January/GW/PYA_GW_Herotator._CB425760095_.jpg' alt='' />
        <div className='home_row'>
          <Product id='1222' title='The Lean Startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg' rating={5} />
          <Product id='1223' title='Star Mixer Grinder 500W' price={239.0} rating={3} image='https://dwh39hsbrwe7m.cloudfront.net/media/catalog/product/cache/83d1798589160ed719728cafde2f5745/a/3/a3_borosil_kitchen_appliances_mixer_grinder_mixergrinder_blender_chutney_starmaroon.jpg'/>
        </div>
        <div className='home_row'>
          <Product id='1224' title='New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band' price={500} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg' />
          <Product id='1225' title='Fitkit FT200 Series 2.25HP (4.5HP Peak) Motorized Treadmill With Free Diet & Fitness Plan' price={1600} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/61FcMWEDbLL._SL1100_.jpg' />
          <Product id='1226' title='Dolphy Exercise Spin Bike for Home Gym and Indoor Cycling' price={2500} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/61yLS8KT2nL._SL1000_.jpg' />
        </div>
        <div className='home_row'>
          <Product id='1227' title='boAt Rockerz 400 Bluetooth On-Ear Headphones with Mic, Black & Red' price={150} rating={4} image='https://d2j6dbq0eux0bg.cloudfront.net/images/1107006/983783130.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Home
