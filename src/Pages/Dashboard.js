import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Components/Header/Header';
import AddInventory from './AddInventory';
import Product from '../Components/Product/Product';


class Dashboard extends React.Component {
    
    render(){
        return(
            <div>
                <Header/>
                <Product/>
                
            </div>
        )
    }
}


export default Dashboard;