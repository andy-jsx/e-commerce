import React from 'react'
import './Main.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import Button from '@mui/material/Button';
  
  const divStyle = {
    display: 'flex',
    backgroundSize: 'cover',
    height: '90vh',
    flexDirection:'column',
    paddingLeft:'270px',
    gap:15,
    paddingRight:'64%',
    paddingTop:'330px'
  }

  const divStyleTwo = {
    display: 'flex',
    backgroundSize: 'cover',
    height: '90vh',
    flexDirection:'column',
    paddingRight:'300px',
    gap:15,
    paddingLeft:'60%',
    paddingTop:'300px'
  }

  const slideImagesOne = [
    {
      url: 'https://img.freepik.com/free-photo/couple-winter-cloths-studio_1303-5878.jpg?w=1380&t=st=1697620242~exp=1697620842~hmac=9dae2d8db7eb3fc4cf4c884108f4fb7857bebde49178ac93029f5d73d0e7d830',
      caption: 'Winter Collection',
      text: 'Check out what will warm you up right for the winter'
    },
    {
      url: 'https://img.freepik.com/free-photo/handsome-man-winter-jacket-posing-street_1303-30010.jpg?w=1380&t=st=1697619841~exp=1697620441~hmac=5336501b2a2dffe0abc02c872e3a7935bca4caae64f98eb9c3d21992158a20f1',
      caption: 'Winter for Him',
      text: 'Shop our latest collection for men, see what will warm him other than your hand'
    },
    {
      url: 'https://img.freepik.com/free-photo/girls-friends-meeting-together-winter-time-outside-street_1303-20038.jpg?w=1380&t=st=1697716288~exp=1697716888~hmac=358f0a9f3baffbb8a14f7f2e8ac4f97516714ca8b7c2c8580ca9dd4acc3f55e7',
      caption: 'Winter for Her',
      text:'Find out our latest trends in women jackets, \n see what will warm her other than your hug'
    },
  ];
  
  const slideImagesTwo = [
    {
      url: 'https://img.freepik.com/free-photo/handbag-near-sunglasses-with-wear-plant-twigs_23-2148107978.jpg?w=1380&t=st=1697442079~exp=1697442679~hmac=9a75b862a25d8ad059dba8755c1793707a44097dc64ac22d4728111dcff56b0a',
      caption: 'Summer Collection',
      text:'Explore our Summer 2023 Collection'
    },
    {
      url: 'https://img.freepik.com/free-photo/two-young-stylish-smiling-hippie-brunette-blond-women-models-summer-hipster-clothes-with-penny-skateboard-posing-surprise-face-emotions_158538-15049.jpg?w=1380&t=st=1697713172~exp=1697713772~hmac=578a14f8e5fadf7a43a36335810bf9c629468894efe7460bd490b47fca9f8b43',
      caption: 'Summer for Her',
      text:'Plan out days to visit the beach with her, shop our latest collection now'
    },
    {
      url: 'https://img.freepik.com/free-photo/friends-traveling-discovering-new-places_23-2149124766.jpg?w=1380&t=st=1697713294~exp=1697713894~hmac=a72aefe95b52909c6017ae4f9471ccd8681d306dcc56b96b378629d5f7aeddc6',
      caption: 'Summer for Him',
      text:'Made with think and breathable material, look at what we got to offer'
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
                  <span className='caption-one'>{slideImage.caption}
                  </span>
                  <span className='text-one'>{slideImage.text}
                  </span>
                  <Button variant="contained"
                  style={{
                    width:'120px'
                  }}>Shop Now</Button>
                
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
                    <span className='caption-two'>{slideImage.caption}
                    </span>
                    <span className='text-two'>{slideImage.text}
                    </span>
                    <Button variant="contained"
                    style={{
                      width:'120px'
                    }}>Shop Now</Button>
                  </div>
                
                </div>
              ))} 
            </Slide>
          </section>
          </div>
        </div>
    )
}
