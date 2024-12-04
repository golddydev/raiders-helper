import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

const getBlockfrostApi = (apiKey: string): BlockFrostAPI => {
  return new BlockFrostAPI({ projectId: apiKey });
};

export { getBlockfrostApi };
