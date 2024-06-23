# How to set up the backend

1. follow this aws's get started on aws cdk: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
2. follow hono's get started guide on aws lambda → https://hono.dev/docs/getting-started/aws-lambda
3. if when doing cdk deploy you come across this error: → Error: spawnSync docker ENOENT do `npm i -D esbuild`
4. do

- `npm install @aws-sdk/client-dynamodb`
- `npm install @aws-sdk/lib-dynamodb`
- `npm install @aws-sdk/util-dynamodb`

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
