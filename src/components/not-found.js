import React from 'react'
import image from '../assets/under-construction-website.gif'

//Displays this page on invalid routes  
class NotFound extends React.Component {
    render() {
        return (
            <div> 
                <img src={image} alt='This page is not yet developed'/>
            </div>
        );
    }
}

export default NotFound;