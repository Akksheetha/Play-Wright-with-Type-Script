import {Page, Locator} from "@playwright/test";

export class ProductsPage{
    readonly page:Page;
    readonly laptops:Locator;
    readonly macbook:Locator;
    readonly addtocart:Locator;

    constructor(page:Page){
        this.page = page;
        this.laptops=page.getByRole('link', { name: 'Laptops' });
        this.macbook=page.getByRole('link', { name: 'MacBook Pro' });
        this.addtocart=page.getByRole('link', { name: 'Add to cart' });
    }
    async clickingProducts(){
        await this.laptops.click();
        await this.macbook.scrollIntoViewIfNeeded();
        await this.macbook.click();
    }
    async addedToCart(){
        await this.addtocart.click();
    }
}