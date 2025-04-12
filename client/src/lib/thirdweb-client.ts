import { createThirdwebClient, ThirdwebClient } from 'thirdweb';

export const client: ThirdwebClient = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});
