const cartHelper = {
    list: async (req) => {
        return req.session.cart || [];
    },
    insert: async(req, data) => {
        const cart = await cartHelper.list(req);

        cart.push({
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price.toFixed(2),
            description: data.description
        });
        req.session.cart = cart;
        return await cartHelper.list(req);

    },
    remove: async(req, id) => {
        const cart = await cartHelper.list(req);
        let temp = [];

        for(let item of cart) 
            if (id != item.id)
                temp.push(item)

        req.session.cart = temp;

        return await cartHelper.list(req);
    }
}

module.exports = cartHelper;