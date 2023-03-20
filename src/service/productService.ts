import {writeFile,readFile} from "fs/promises";

class ProductService{

    async createProductList(data){
        try{
            await writeFile("products.json", JSON.stringify(data));
        }catch(err){
            throw new Error("Falha ao salvar a lista de produtos");
        }
    }

    async getProducts(){
        
        try {
            const readProduct = await readFile("products.json","utf-8");
            return JSON.parse(readProduct);
        } catch (error) {
            throw new Error("Erro na leitura do arquivo");
        }
    }

    async getStock(){
        try {
            const product = await this.getProducts();
            const productList = product.map((item)=>{
                return{
                    name: item.name,
                    qtd: item.qtd,
                    price: item.price,
                    valueStock: item.price*item.qtd
                }
            })
            return productList; 
        } catch (error) {
            throw new Error("Erro na leitura do arquivo");
        }
    }

    async getStockValue(){
        try {
            const product = await this.getStock();
            const productList = product.reduce((totalValue, value)=>{
                return totalValue + value.valueStock;
            }, 0
            ).toFixed(2);
        return JSON.parse(productList);
        } catch (error) {
            
        }
    }
}

export default new ProductService();