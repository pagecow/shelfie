import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Components/Header/Header';
import AddInventory from './AddInventory';


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg',
            productName: 'Shoes',
            price: '$49'
        }
    }
    
    render(props){
        const image = this.state.image;
        const productName = this.state.productName;
        const price = this.state.price;

        return(
            <div>
                <header><Header/></header>

                <body id='dash-body'>
                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName}</p>
                            <p className='rb-words'>{price}</p>

                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <div className='rb-buttons'>
                                <button className='rb-button'>Delete</button>   
                                <button className='rb-button'>Edit</button>  
                            </div>

                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}


export default Dashboard;