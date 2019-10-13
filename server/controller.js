let product = {image_url: '', product_name: '', price: ''};


module.exports = {
    create: (req, res) => {
        // console.log(req.body)
        let {image_url, product_name, price} = req.body;
        // console.log(image_url, product_name, price)
        product.image_url = image_url;
        product.product_name = product_name;
        product.price = price;
        res.status(200).send(product);
        console.log(product)
    },
    read: (req, res) => {
        console.log(product)
        res.status(200).send(product);
    },
    update: (req, res) => {
        let {image_url, product_name, price} = req.body;
        product.image_url = image_url;
        product.product_name = product_name;
        product.price = price;
        res.status(200).send(product)
    },
    delete: (req, res) => {
        product = {image_url: '', product_name: '', price: ''};
        res.status(200).send(product)
    }
}

