import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Components/Header/Header';
import AddInventory from './AddInventory';


class Dashboard extends React.Component {
    render(){
        console.log({AddInventory})
        return(
            <div>
                <header><Header/></header>


            </div>
        )
    }
}


export default Dashboard;