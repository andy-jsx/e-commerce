import React from 'react'
import './Main.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const spanStyle = {
    paddingLeft: '200px',
    paddingBottom:'200px',
    background: 'transparent',
    color: 'white',
    fontSize:'48px',
    fontWeight:'bold'
  }

  const spanStyleTwo = {
    paddingRight: '200px',
    paddingBottom:'200px',
    background: 'transparent',
    color: 'white',
    fontSize:'48px',
    fontWeight:'bold'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundSize: 'cover',
    height: '90vh',
  }

  const divStyleTwo = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundSize: 'cover',
    height: '90vh',
  }

  const slideImagesOne = [
    {
      url: 'https://img.freepik.com/free-photo/couple-winter-cloths-studio_1303-5878.jpg?w=1380&t=st=1697620242~exp=1697620842~hmac=9dae2d8db7eb3fc4cf4c884108f4fb7857bebde49178ac93029f5d73d0e7d830',
      caption: 'Winter Collection'
    },
    {
      url: 'https://img.freepik.com/free-photo/handsome-man-winter-jacket-posing-street_1303-30010.jpg?w=1380&t=st=1697619841~exp=1697620441~hmac=5336501b2a2dffe0abc02c872e3a7935bca4caae64f98eb9c3d21992158a20f1',
      caption: 'Winter Clothes for Him'
    },
    {
      url: 'https://img.freepik.com/free-photo/young-pretty-woman-warm-coat-by-house_1303-20089.jpg?w=1380&t=st=1697620200~exp=1697620800~hmac=aaa85061c4d033fc445672dea62570f1a89d8404dc97bfdf90997cbf080d2510',
      caption: 'Winter Clothes for Her'
    },
  ];
  
  const slideImagesTwo = [
    {
      url: 'https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers_23-2149366016.jpg?w=1380&t=st=1697442034~exp=1697442634~hmac=469ddb9e2e056c5795c5de5d31d20cadaf7f2353878a6744dbcbb4735e899766',
      caption: 'Special Sales'
    },
    {
      url: 'https://img.freepik.com/free-photo/handbag-near-sunglasses-with-wear-plant-twigs_23-2148107978.jpg?w=1380&t=st=1697442079~exp=1697442679~hmac=9a75b862a25d8ad059dba8755c1793707a44097dc64ac22d4728111dcff56b0a',
      caption: 'Special Sales'
    },
    {
      url: 'https://img.freepik.com/free-photo/clothes-tickets-table_23-2147652044.jpg?w=1380&t=st=1697442119~exp=1697442719~hmac=4898cd9c0d266fad619eedc1285f5d9733f990a75eadc5425de045c7daedb3a5',
      caption: 'Special Sales'
    },
  ];


export default function Main(){
    return(
        <div>
          <div className='scroll-container'>
            <section>
              <Slide>
              {slideImagesOne.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
            </Slide>
          </section>
          
          <section>
            <Slide>
                {slideImagesTwo.map((slideImage, index)=> (
                <div key={index}>
                  <div style={{ ...divStyleTwo, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyleTwo}>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
          </section>
          </div>
        </div>
    )
}
