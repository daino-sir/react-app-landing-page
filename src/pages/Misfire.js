import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Descritpion, ErrorContent, ErrorHeader, ImgError, LineBreak, MidImg } from '../components';

export default function Misfire () {
    return (
        <ErrorContent>
            <ErrorHeader>
                Ooops..
            </ErrorHeader>
            <ImgError src='./assets/404.png'/>  
            <MidImg src='./assets/not-found.jpg'/>
            <Descritpion>We're still working on this page. <Link to='/'>Go back home</Link></Descritpion>
            <LineBreak/>
        </ErrorContent>
    )
}
