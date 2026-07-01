import {test,expect} from "../fixtures/baseFixture";
import { ProductsPage } from "../pages/ProductsPage";
import testData from "../testData/LoginData.json";

test.describe("Product And Cart",()=>{
    test.beforeEach(async({loginPage})=>{

    await loginPage.loginAction(
        testData.username,
        testData.password
    );
})
test("Adding a product to the cart",async({productsPage})=>{
    await productsPage.clickingProducts();
    await expect(productsPage.addtocart)
    productsPage.page.on('dialog',async(dialog)=>{
            expect(dialog.message()).toBe("Product added.");
        });
    await productsPage.addedToCart();
})

})
