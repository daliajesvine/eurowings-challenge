import React from 'react'
import equal from 'fast-deep-equal'
import loading from '../assets/wait_please.gif'
import { Player } from 'video-react';
import { Link } from 'react-router-dom'

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      imageData: [],
      sort: 'top',
      gallerySelection: 'hot',
      window: 'all',
      showViralImage: false,
      isLoading: true
    }
    this.fetchImageData = this.fetchImageData.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchImageData();
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props, prevProps)) {
      this.setState(
        {
          sort: this.props.sort,
          gallerySelection: this.props.filter,
          window: this.props.window,
          showViralImage: this.props.viralImages
        },
        this.fetchImageData
      );
    }

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  //API call to fetch the images and image data
  fetchImageData() {
    fetch('http://localhost:3001/api/getImageData?sort=' + this.state.sort+'&section='+this.state.gallerySelection+'&showViral='+this.state.showViralImage+'&window='+this.state.window)
      .then((data) => data.json())
      .then((res) => {
        this.setState({ imageData: res.data })
        if (this._isMounted) {
          this.setState({ isLoading: false })
        }
      } 
      );
  };

  //display only the first image from images on start page, on click navigate to image detail page
  //on click navigation not implemented for videos
  getImageHtml(imageData) {
    if (imageData.images && imageData.images[0]) {
      let link = imageData.images[0].link;
      let description = imageData.images[0].description? imageData.images[0].description : "I don't think I need a description, do you?";
      if (link.substring(link.length - 3) === 'mp4') {
        return (
           <figure>
          <Player playsInline poster={link.replace('mp4','png')} src={link}/>
          <figcaption> {description}</figcaption>
          </figure>)
      }
      else {
        return (
        <Link to= {{pathname:"/imagedetail", state: {imageData: imageData} }}>
          <figure>
            <img id="photos" className='images' src={link} alt="This is not available" />
            <figcaption> {description}</figcaption>
          </figure>
        </Link>)
      }
    }
  }

  render() {

    if (!this.state.imageData.length)
      return null;
    let contents = [];
    if (this.state.isLoading) {
      return (<img id="photos" src={loading} alt="This is not available" />)
    }
    else {
      let images = this.state.imageData.map((data, i) => (
        data.images ? this.getImageHtml(data) : 
      <Link to= {{pathname:"/imagedetail", state: {imageData: data.images} }}>
       <figure>
        <img id="photos" src={data.link} alt="This is not available" />
        <figcaption>{data.description? data.description: data.title}</figcaption>
        </figure>
        </Link>
      ));

      contents = images.map((image, i) => {
        return (<div key={i}>{image}</div>)
      });
    }
    console.log(contents);

    return (
      <section id="photos">
        {contents}
      </section>

    );
  }
}
export default Gallery;