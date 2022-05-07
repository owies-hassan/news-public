import React from 'react';
import './SocialMedia.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function SocialMedia() {
    return (
        <div className='socialMedia'>
          {/*<div className='content-social'>*/}
          {/*   <div className='social-faceBook'>*/}
          {/*       <p className='faceBook-p'>faceBook</p>*/}
          {/*       <FacebookIcon color='warning' fontSize='large' />*/}

          {/*   </div>*/}
          {/*    <div  className='social-twitter'>*/}
          {/*        <TwitterIcon/>*/}
          {/*        <p className='faceBook-p'>twitter</p>*/}
          {/*    </div>*/}
          {/*    <div className='social-linked'>*/}
          {/*        <LinkedInIcon/>*/}
          {/*        <p className='faceBook-p'>linked</p>*/}
          {/*    </div>*/}
          {/*    <div className='social-youtube'>*/}
          {/*        <YouTubeIcon/>*/}
          {/*        <p className='faceBook-p'>youtube</p>*/}
          {/*    </div>*/}

          {/*</div>*/}
            <ul>
                <li><a href='#'><i><FacebookIcon  fontSize='large' /></i><span>facebook</span></a></li>
                <li><a href='#'><i><TwitterIcon  fontSize='large' /></i><span>twitter</span></a></li>
                <li><a href='#'><i><LinkedInIcon  fontSize='large' /></i><span>linked</span></a></li>
                <li><a href='#'><i><YouTubeIcon fontSize='large' /></i><span>youtube</span></a></li>

            </ul>
        </div>
    );
}

export default SocialMedia;