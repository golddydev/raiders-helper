import {
  AddressDetails,
  Credential,
  getAddressDetails,
} from "@lucid-evolution/lucid";
import { Err, Ok, Result } from "ts-res";

const getAddressDetail = (address: string): Result<AddressDetails, string> => {
  try {
    const detail = getAddressDetails(address);
    return Ok(detail);
  } catch {
    return Err(`Not a valid address: ${address}`);
  }
};

const getPaymentCred = (address: string): Result<Credential, string> => {
  try {
    const detail = getAddressDetails(address);
    if (detail.paymentCredential) return Ok(detail.paymentCredential);

    return Err(`Payment Credential is missing in address: ${address}.`);
  } catch {
    return Err(`Not a valid address: ${address}`);
  }
};

const getPaymentKey = (address: string): Result<string, string> => {
  try {
    const detail = getAddressDetails(address);
    if (detail.paymentCredential && detail.paymentCredential?.hash)
      return Ok(detail.paymentCredential.hash);

    return Err(`Payment Credential is missing in address: ${address}.`);
  } catch {
    return Err(`Not a valid address: ${address}`);
  }
};

const getStakeCred = (address: string): Result<Credential, string> => {
  try {
    const detail = getAddressDetails(address);
    if (detail.stakeCredential) return Ok(detail.stakeCredential);

    return Err(`Stake Credential is missing in address: ${address}.`);
  } catch {
    return Err(`Not a valid address: ${address}`);
  }
};

const getStakeKey = (address: string): Result<string, string> => {
  try {
    const detail = getAddressDetails(address);
    if (detail.stakeCredential && detail.stakeCredential?.hash)
      return Ok(detail.stakeCredential.hash);

    return Err(`Stake Credential is missing in address: ${address}.`);
  } catch {
    return Err(`Not a valid address: ${address}`);
  }
};

export {
  getAddressDetail,
  getPaymentCred,
  getPaymentKey,
  getStakeCred,
  getStakeKey,
};
