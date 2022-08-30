import {
  getContractAddress,
  getcurrentNetworkId,
} from "../CONTRACT-ABI/connect";

import { getContractTransctionListAPI } from "../config";

export async function frtchAccounttransction() {
  const networkIddarta = await getcurrentNetworkId();
  const cureentAccress = getContractAddress(networkIddarta);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(getContractTransctionListAPI(cureentAccress), requestOptions);
}
