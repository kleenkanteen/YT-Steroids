const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});

const docClient = DynamoDBDocumentClient.from(client);

export async function addProduct(productName: string) {
  const params = {
    TableName: "products",
    Item: {
      id: productName,
      description: "Hiking Boots",
      category: "footwear",
      sku: "hiking-sku-01",
      size: 9,
    },
  };

  try {
    const data = await docClient.send(new PutCommand(params));
    console.log("result : " + JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getProduct(productName: string) {
  const params = {
    TableName: "products",
    Key: {
      id: productName,
    },
  };

  try {
    const data = await docClient.send(new GetCommand(params));
    return data.Item ? data.Item : null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
