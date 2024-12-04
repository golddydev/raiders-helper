import { Blockfrost, Lucid, LucidEvolution } from "@lucid-evolution/lucid";

import { getLucidNetwork, getNetwork } from "../blockfrost/index.js";

const getLucid = async (blockfrostApiKey: string): Promise<LucidEvolution> => {
  const network = getNetwork(blockfrostApiKey);
  return await Lucid(
    new Blockfrost(
      `https://cardano-${network}.blockfrost.io/api/v0`,
      blockfrostApiKey
    ),
    getLucidNetwork(blockfrostApiKey)
  );
};

export { getLucid };
