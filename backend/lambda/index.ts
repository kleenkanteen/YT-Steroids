import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { addProduct, getProduct } from "../actions/db";

const app = new Hono();

app.post("/addProduct", async (c) => {
  const body = await c.req.json();
  const productName = body.productName;
  try {
    addProduct(productName);
    return c.text("Product successfully added!");
  } catch (e) {
    console.log("error: ", e);
    return c.text(`Error: ${e}`);
  }
});

app.get("/getProduct", async (c) => {
  const body = await c.req.json();
  const productName = body.productName;

  try {
    const productData = getProduct(productName);
    return c.json({
      data: productData,
    });
  } catch (e) {
    console.log(e);
    return c.text(`Error: ${e}`);
  }
});

export const handler = handle(app);
