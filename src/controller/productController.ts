import {writeFile,readFile} from "fs/promises";
import { Request, Response } from "express";
import productService from "../service/productService";;

class productController{

    public async createProduct(req:Request,res: Response){
        const product= productService.createProductList(req.body);
        return res.status(201).send();
    }

    public async getProduct(req:Request,res:Response){
        const product = await productService.getProducts();
        return res.json(product);
    }

    public async getProductStock(req:Request,res:Response){
        const productList=await productService.getStock();
        return res.json(productList);
    }

    public async getTotalStock(req:Request,res:Response){
        const stockValue=await productService.getStockValue();

        return res.json(stockValue);
    }
}

export default new productController();