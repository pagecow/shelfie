import React from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image1: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg',
            productName1: 'Shoes',
            price1: '$49',
            showInput1: false,

            image2: 'https://www.rei.com/media/product/878986',
            productName2: 'Shirt',
            price2: '$27',
            showInput2: false,

            image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhhSgEvAn-T4m9aLTsFMBUQQ2xXsBZSpz6qFhF9XLS2hQgMC7hg',
            productName3: 'hat',
            price3: '$17',
            showInput3: false,

            image4: '',
            productName4: '',
            price4: '',
            showInput4: false,
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:7777/api/products')
            .then(res => {
                console.log(res)
                const data = res.data;
                this.setState({
                    image4: data.image_url,
                    productName4: data.product_name,
                    price4: data.price
                })
            })
    }

    handleDeleteRequest = () => {
        axios
            .delete(`http://localhost:7777/api/products`)
            .then(res => {
                console.log(res)
                this.setState({
                    image4: res.data.image_url,
                    productName4: res.data.product_name,
                    price4: res.data.price,
                })
            })

    }

    showInput1 = () => {
        if(this.state.showInput1 === false) {
            return this.setState({
                showInput1: true
            })
        } else {
            return this.setState({
                showInput1: false
            })
        }
    }

    showInput2 = () => {
        if(this.state.showInput2 === false) {
            return this.setState({
                showInput2: true
            })
        } else {
            return this.setState({
                showInput2: false
            })
        }
    }

    showInput3 = () => {
        if(this.state.showInput3 === false) {
            return this.setState({
                showInput3: true
            })
        } else {
            return this.setState({
                showInput3: false
            })
        }
    }

    showInput4 = () => {
        if(this.state.showInput4 === false) {
            return this.setState({
                showInput4: true
            })
        } else {
            return this.setState({
                showInput4: false
            })
        }
    }

    handleProductNameChange1 = (value) => {
        this.setState({
            productName1: value
        })
    }

    handlePriceChange1 = (value) => {
        this.setState({
            price1: value
        })
    }

    handleProductNameChange2 = (value) => {
        this.setState({
            productName2: value
        })
    }

    handlePriceChange2 = (value) => {
        this.setState({
            price2: value
        })
    }

    handleProductNameChange3 = (value) => {
        this.setState({
            productName3: value
        })
    }

    handlePriceChange3 = (value) => {
        this.setState({
            price3: value
        })
    }

    handleProductNameChange4 = (value) => {
        this.setState({
            productName4: value
        })
    }

    handlePriceChange4 = (value) => {
        this.setState({
            price4: value
        })
    }



    render() {
        console.log(this.state)

        const image1 = this.state.image1;
        const productName1 = this.state.productName1;
        const price1 = this.state.price1;

        const image2 = this.state.image2;
        const productName2 = this.state.productName2;
        const price2 = this.state.price2;

        const image3 = this.state.image3;
        const productName3 = this.state.productName3;
        const price3 = this.state.price3;

        const image4 = this.state.image4;
        const productName4 = this.state.productName4;
        const price4 = this.state.price4;
        
        
        return (
            <body id='dash-body'>
                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image1}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName1}</p>
                            {this.state.showInput1 && (<input placeholder="New product name..." onChange={e => this.handleProductNameChange1(e.target.value)}/>)}
                            
                            <p className='rb-words'>{price1}</p>
                            {this.state.showInput1 && (<input placeholder="New price..." onChange={e => this.handlePriceChange1(e.target.value)}/>)}

                            <br/>
                            <br/>
                            <br/>
                            

                            <div className='rb-buttons'>
                                <button className='rb-button' onClick={this.handleDeleteRequest}>Delete</button>   
                                <button className='rb-button'
                                onClick={this.showInput1}
                                >Edit</button>
                                
                                {this.state.showInput1 && (<button className='rb-button' onClick={this.showInput1}>Make Change</button>)}  


                            </div>

                        </div>
                    </div>

                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image2}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName2}</p>
                            {this.state.showInput2 && (<input placeholder="New product name..." onChange={e => this.handleProductNameChange2(e.target.value)}/>)}
                            
                            <p className='rb-words'>{price2}</p>
                            {this.state.showInput2 && (<input placeholder="New price..." onChange={e => this.handlePriceChange2(e.target.value)}/>)}

                            <br/>
                            <br/>
                            <br/>
                            

                            <div className='rb-buttons'>
                                <button className='rb-button' onClick={this.handleDeleteRequest}>Delete</button>   
                                <button className='rb-button'
                                onClick={this.showInput2}
                                >Edit</button>
                                {this.state.showInput2 && (<button className='rb-button' onClick={this.showInput2}>Make Change</button>)}   
                            </div>

                        </div>
                    </div>

                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image3}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName3}</p>
                            {this.state.showInput3 && (<input placeholder="New product name..." onChange={e => this.handleProductNameChange3(e.target.value)}/>)}
                            
                            <p className='rb-words'>{price3}</p>
                            {this.state.showInput3 && (<input placeholder="New price..." onChange={e => this.handlePriceChange3(e.target.value)}/>)}

                            <br/>
                            <br/>
                            <br/>
                            

                            <div className='rb-buttons'>
                                <button className='rb-button' onClick={this.handleDeleteRequest}>Delete</button>   
                                <button className='rb-button'
                                onClick={this.showInput3}
                                >Edit</button>  
                                {this.state.showInput3 && (<button className='rb-button' onClick={this.showInput3}>Make Change</button>)} 
                            </div>

                        </div>
                    </div>

                        <div className='red-box'>
                        <img className='dash-img-placeholder'src={image4}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName4}</p>
                            {this.state.showInput4 && (<input placeholder="New product name..." onChange={e => this.handleProductNameChange4(e.target.value)}/>)}
                            
                            <p className='rb-words'>${price4}</p>
                            {this.state.showInput4 && (<input placeholder="New price..." onChange={e => this.handlePriceChange4(e.target.value)}/>)}

                            <br/>
                            <br/>
                            <br/>
                            

                            <div className='rb-buttons'>
                                <button className='rb-button' onClick={this.handleDeleteRequest}>Delete</button>   
                                <button className='rb-button'
                                onClick={this.showInput4}
                                >Edit</button> 
                                {this.state.showInput4 && (<button className='rb-button' onClick={this.showInput4}>Make Change</button>)}  
                            </div>

                        </div>
                    </div>
                </body>
        )
    }
}

export default Product