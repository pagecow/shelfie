let product = {image_url: '', product_name: '', price: ''};


module.exports = {
    create: (req, res) => {
        let {image_url, product_name, price} = req.body;
        product.image_url = image_url;
        product.product_name = product_name;
        product.price = price;
        res.status(200).send(product);
    },
    read: (req, res) => {
        res.status(200).send(product);
    },
    update: (req, res) => {
        console.log(req.body);
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

