import React from 'react';

class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image1: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg',
            productName1: 'Shoes',
            price1: '$49',

            image2: 'https://www.rei.com/media/product/878986',
            productName2: 'Shirt',
            price2: '$27',

            image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhhSgEvAn-T4m9aLTsFMBUQQ2xXsBZSpz6qFhF9XLS2hQgMC7hg',
            productName3: 'hat',
            price3: '$17',
        }
    }

    



    
    render() {
        const image1 = this.state.image1;
        const productName1 = this.state.productName1;
        const price1 = this.state.price1;

        const image2 = this.state.image2;
        const productName2 = this.state.productName2;
        const price2 = this.state.price2;

        const image3 = this.state.image3;
        const productName3 = this.state.productName3;
        const price3 = this.state.price3;
        
        
        return (
            <body id='dash-body'>
                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image1}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName1}</p>
                            <p className='rb-words'>{price1}</p>

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

                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image2}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName2}</p>
                            <p className='rb-words'>{price2}</p>

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

                    <div className='red-box'>
                        <img className='dash-img-placeholder'src={image3}/>

                        <div className='rb-right-stuff'>
                            <p className='rb-words'>{productName3}</p>
                            <p className='rb-words'>{price3}</p>

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
        )
    }
}

export default Product