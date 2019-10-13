import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Product from '../Components/Product/Product';
import axios from 'axios';

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

    refreshPage(){ 
        window.location.reload(); 
    }

    handlePost = () => {
        axios   
            .post('http://localhost:7777/api/products', {
                image_url: this.state.image,
                product_name: this.state.productName,
                price: this.state.price
            })
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
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
                            <button className='gb-button-1' onClick={ this.refreshPage }>Cancel</button>
                            <Link to='/'><button className='gb-button-2' onClick={this.handlePost}>Add to Inventory</button></Link>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}



export default AddInventory