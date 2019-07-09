import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Gallery from '../components/gallery'

// filters : sort, dropdowns, window, viralImageToggle
class SubHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          viralImageToggle: false,
          filter: 'hot',
          sort: 'top',
          window: 'all',
          filterBtnTitle: 'hot',
          sortBtnTitle: 'top',
          windowBtnTitle: 'all'
        }

        this.viralImages = this.viralImages.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.selectSort = this.selectSort.bind(this);
        this.selectWindow = this.selectWindow.bind(this);
      }
      viralImages(e) {
              this.setState(({ viralImageToggle }) => (
                  {
                    viralImageToggle: !viralImageToggle
                  }
              ));
          }
        selectFilter(event) {
            this.setState({filterBtnTitle: event.target.attributes.value.nodeValue}); 
            this.setState({
                filter: event.target.attributes.value.nodeValue
            })
        }
        selectSort(event) {
            this.setState({sortBtnTitle: event.target.attributes.value.nodeValue});
            this.setState({
                sort: event.target.attributes.value.nodeValue
            })
        }
        selectWindow(event) {
            this.setState({windowBtnTitle: event.target.attributes.value.nodeValue});
            this.setState({
                window: event.target.attributes.value.nodeValue
            })
        }

    render() {
        return (
            <div>
            <nav className="navbar">
                <DropdownButton id="dropdown-basic-button" title={this.state.filterBtnTitle}>
                    <Dropdown.Item value="hot" onClick={this.selectFilter}>Hot</Dropdown.Item>
                    <Dropdown.Item value="top" onClick={this.selectFilter}>Top</Dropdown.Item>
                    <Dropdown.Item value="user" onClick={this.selectFilter}>User</Dropdown.Item>
                </DropdownButton>

                 <DropdownButton id="dropdown-basic-button" title={this.state.sortBtnTitle}>
                    <Dropdown.Item value="top" onClick={this.selectSort}>Top</Dropdown.Item>
                    <Dropdown.Item value="viral" onClick={this.selectSort}>Viral</Dropdown.Item>
                    <Dropdown.Item value="time" onClick={this.selectSort}>Time</Dropdown.Item>
                </DropdownButton>
  
                <div>
                <span className="color">Viral</span>
                    <label className="switch">
                        <input type="checkbox" onChange={this.viralImages}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                
                 <DropdownButton id="dropdown-basic-button" title={this.state.windowBtnTitle}>
                    <Dropdown.Item value="day" onClick={this.selectWindow}>Day</Dropdown.Item>
                    <Dropdown.Item value="week" onClick={this.selectWindow}>Week</Dropdown.Item>
                    <Dropdown.Item value="month" onClick={this.selectWindow}>Month</Dropdown.Item>
                    <Dropdown.Item value="year" onClick={this.selectWindow}>Year</Dropdown.Item>
                    <Dropdown.Item value="all" onClick={this.selectWindow}>All</Dropdown.Item>
                </DropdownButton>
                </nav>
                <Gallery viralImages = {this.state.viralImageToggle} 
                        filter={this.state.filter}
                        sort={this.state.sort}
                        window={this.state.window}>

                </Gallery>
            </div>
        );
    }
}

export default SubHeader;