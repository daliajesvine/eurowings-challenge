import React from 'react'
import Header from './header'
import FontAwesome from 'react-fontawesome'

//This class is for displaying all the images included in the album
//Also displays number of upvotes, downvotes and views for the album
//TODO: Implement upvotes, downvotes functionality

class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.image = this.props.location.state;
    }
    getImageHtml(imageData) {
        if (imageData) {
            let link = imageData.link;
            let description = imageData.description ? imageData.description : "";
            return (
                <figure>
                    <img className="image" src={link} alt="This is not available" />
                    <figcaption> {description}</figcaption>
                </figure>
            )
        }
    }
    render() {
        if (!this.image)
            return null;
        let contents = [];
        console.log("this.image",this.image)
        let images = this.image.imageData.map((data, i) => (
            data ? this.getImageHtml(data) :
                <figure>
                    <img src={data.link} alt="This is not available" />
                    <figcaption>{data.description ? data.description : data.title}</figcaption>
                </figure>
        ));
        contents = images.map((image, i) => {
            return (<div key={i}>{image}</div>)
        });
        return (
            <div className="container">
                <Header></Header>
                <section id="images">
                    {contents}
                </section>
                <div>
                    <FontAwesome className="fas fa-thumbs-up" />
                    <span className="color">{this.image.imageData ? this.image.imageData.ups : '0'}</span>

                    <FontAwesome className="fas fa-thumbs-down" />
                    <span className="color">{this.image.imageData ? this.image.imageData.downs : '0'}</span>
                    <FontAwesome className="fas fa-eye" />
                    <span className="color">{this.image.imageData ? this.image.imageData.views : '0'} views</span>
                </div>
            </div>

        );
    }
}

export default ImageDetail;