import { test, expect } from '@playwright/test';

test.describe("E-commerce",()=>{
    test.describe("Authentication",()=>{
        test("Login",async({page})=>{
            expect("error");
        });
        test("Logout",async({page})=>{
        });
    })

test.describe("Shopping",()=>{
    test.describe("Authentication",()=>{
        test("Search",async({page})=>{
        });
        test("Cart",async({page})=>{
        });
    });
});
})