import {createClient, flipCoin} from '../../curby';

// Create the client once, outside the handler
const client = createClient();

export async function GET() {
  const result = await flipCoin(client);
  return Response.json({ result });
}