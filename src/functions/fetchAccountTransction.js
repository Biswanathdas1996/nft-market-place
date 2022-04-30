import Address from "../CONTRACT-ABI/Address.json";

export function frtchAccounttransction() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    `https://api-rinkeby.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${Address}&page=1&offset=10000&sort=asc&apikey=WCVDU52748WW4F7EKDEDB89HKH41BIA4N2`,
    requestOptions
  );
}
