# How to set up the backend

1. follow this aws's get started on aws cdk: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
2. follow hono's get started guide on aws lambda → https://hono.dev/docs/getting-started/aws-lambda
3. if when doing cdk deploy you come across this error: → Error: spawnSync docker ENOENT do `npm i -D esbuild`
4. do:

- `npm install @aws-sdk/client-dynamodb`
- `npm install @aws-sdk/lib-dynamodb`
- `npm install @aws-sdk/util-dynamodb`

5. do `cdk deploy`

# 0 bloat version of how to setup aws

1. go to [aws cdk installing guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), open the dropdown section of your OS. run the commands they prompt you to. done, aws cdk is installed.
2. Create an IAM User with the permission named: AdministratorAccess
3. In the dashboard of such user create an access key, copy the key and secret key somewhere safe
4. in your cli do `aws configure`
5. enter your access key and secret access key accordingly
6. for region enter the default: us-west-2 (or any other you wish)
7. for default output do: json
8. open an new terminal and cd to your project’s folder.
9. do `npm install -g aws-cdk`
10. do `cdk —version` to check if it got properly installed
11. done

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
