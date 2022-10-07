import ProductMessage from "../modules/Products.js"

export const getProducts = async (req, res) => {
    try {
        const productMessage = await ProductMessage.find();

        res.status(200).json(productMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createProducts = async (req, res) => {
    const product = req.bodyParser

    const newProduct = new ProductMessage(product)

    try {
        await newProduct.save();

        res.status(201).json(productMessage)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}