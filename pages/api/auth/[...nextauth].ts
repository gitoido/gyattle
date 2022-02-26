// import { DynamoDB, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
// import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { DynamoDBAdapter } from '@next-auth/dynamodb-adapter';

// const config: DynamoDBClientConfig = {
//   credentials: {
//     accessKeyId: process.env.NEXTAUTH_AWS_ACCESS_KEY as string,
//     secretAccessKey: process.env.NEXTAUTH_AWS_SECRET_KEY as string,
//   },
//   region: process.env.NEXTAUTH_AWS_REGION,
// };

// const client = DynamoDBDocument.from(new DynamoDB(config), {
//   marshallOptions: {
//     convertEmptyValues: true,
//     removeUndefinedValues: true,
//     convertClassInstanceToMap: true,
//   },
// });

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // adapter: DynamoDBAdapter(client),
});
