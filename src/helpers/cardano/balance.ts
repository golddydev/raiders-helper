import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

interface Utxo {
  address: string;
  txHash: string;
  outputIndex: number;
  assets: Record<string, bigint>;
}

const getAddressUtxos = async (
  blockfrost: BlockFrostAPI,
  address: string,
  page: number
) => {
  try {
    return await blockfrost.addressesUtxos(address, { page });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "status_code" in error &&
      error.status_code === 404
    ) {
      return [];
    }

    throw error;
  }
};

const getUtxos = async (
  blockfrost: BlockFrostAPI,
  address: string
): Promise<Utxo[]> => {
  let page = 1;
  const addressUtxos: Utxo[] = [];

  while (true) {
    const response = await getAddressUtxos(blockfrost, address, page);

    response.forEach(({ address, tx_hash, output_index, amount }) => {
      const assets = amount.reduce(
        (acc, { unit, quantity }) => ({ ...acc, [unit]: BigInt(quantity) }),
        {}
      );
      addressUtxos.push({
        address,
        txHash: tx_hash,
        outputIndex: output_index,
        assets,
      });
    });

    if (response.length < 100) break;
    page++;
  }

  return addressUtxos;
};

const getAddressBalance = async (
  blockfrost: BlockFrostAPI,
  address: string
): Promise<Record<string, bigint>> => {
  const utxos = await getUtxos(blockfrost, address);
  const balances: Record<string, bigint> = {};
  return utxos.reduce((balances, utxo) => {
    Object.entries(utxo.assets).forEach(([assetId, balance]) => {
      balances[assetId] = (balances[assetId] || 0n) + balance;
    });

    return balances;
  }, balances);
};

export { getAddressBalance, getAddressUtxos, getUtxos };
