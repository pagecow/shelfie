import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Components/Header/Header';

class AddInventory extends React.Component {
    constructor(){
        super();

        this.state = {
            image: 'https://static.thenounproject.com/png/1425669-200.png',
            productName: '',
            price: ''
        }
    }

    handleImageChange = (value) => {
        this.setState({
            image: value
        })
    }

    handleProductNameChange = (value) => {
        this.setState({
            productName: value
        })
    }

    handlePriceChange = (value) => {
        this.setState({
            price: value
        })
    }
    
    render() {
        const image = this.state.image;
        
        return (
            <div>
                <header><Header /></header>

                <body id='ai-body'>
                    <div className='green-box'>
                        <img className='img-placeholder'src={image}/>

                        <div className='gb-input-area'>
                            <p className='gb-text' >Image URL:</p>
                            <input onChange={e => this.handleImageChange(e.target.value)}/>

                            <p className='gb-text'>Product Name:</p>
                            <input onChange={e => this.handleProductNameChange(e.target.value)}/>

                            <p className='gb-text'>Price:</p>
                            <input type='number' placeholder='0' onChange={e => this.handlePriceChange(e.target.value)}/>

                        </div>

                        <div className='gb-buttons'>
                            <button className='gb-button-1'>Cancel</button>
                            <button className='gb-button-2' >Add to Inventory</button>
                        </div>

                    </div>
                </body>
            </div>
        )
    }
}



export default AddInventory