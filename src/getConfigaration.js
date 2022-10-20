import { decode } from "js-base64";
import swal from "sweetalert";

const mockToken =
  "eyJpZCI6IjEiLCJibG9ja2NoYWluIjoiRXRoZXJldW0iLCJuZXR3b3JrX2lkIjoiNSIsIm5ldHdvcmtfbmFtZSI6ImdvZXJsaSIsImN1cnJlbmN5X3N5bWJvbCI6IkVUSCIsIm5ldHdvcmtfdXJsIjoiaHR0cHM6XC9cL2dvZXJsaS5ldGhlcnNjYW4uaW8iLCJDaGFpbkV4cGxvcmVyQVBJS0VZIjoiV0NWRFU1Mjc0OFdXNEY3RUtERURCODlIS0g0MUJJQTROMiIsIldhbGxldFByaXZhdGVLZXkiOiI4YzU5NDhlMGRiYzQxNjNiMTc2ZWE4Y2ZiN2NhNmEzZDJlOWM1MmQyZDFkZjdjMzYzZmFiYWJiOGYyZWI2ZjQyIiwiSW5mdXJhUHJvamVjdElkIjoiMjQwMjJmZGE1NDVmNDFiZWI1OTMzNGJkYmFmM2VmMzIiLCJJbmZ1cmFOb2RlVVJMIjoiaHR0cHM6XC9cL2dvZXJsaS5pbmZ1cmEuaW9cL3YzXC8yNDAyMmZkYTU0NWY0MWJlYjU5MzM0YmRiYWYzZWYzMiIsIldlYjNTdG9yYWdlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKa2FXUTZaWFJvY2pvd2VERXpNa1JoTmpFMk4yVTBPVFkyWTJNMk9EQmxNak5sTnpkak1tTTVOakkyWVdaRlFqa3lOek1pTENKcGMzTWlPaUozWldJekxYTjBiM0poWjJVaUxDSnBZWFFpT2pFMk5qQXhPVEl4TmpJM01ERXNJbTVoYldVaU9pSjBaWE4wSW4wLm5yV3lHLVJQQ3R5MjhHUUxQT2ZqQ2FjWW9Pb1VSYXJDeW82bmgzdDBRQ1kiLCJhd3NBY2Nlc3NLZXlJZCI6bnVsbCwiYXdzU2VjcmV0QWNjZXNzS2V5IjpudWxsLCJzdGF0dXMiOiIxIiwiYmxvY2tjaGFpbl9iYXNlX2FwaSI6Imh0dHBzOlwvXC9hcGktZ29lcmxpLmV0aGVyc2Nhbi5pb1wvYXBpIiwib3BlbnNlYV9iYXNlX3VybCI6Imh0dHBzOlwvXC90ZXN0bmV0cy5vcGVuc2VhLmlvIiwibXNfZHluYW1pY3NfYmFzZV91cmwiOiJodHRwczpcL1wvZHluYW1pY3N3cmFwcGVyLmF6dXJld2Vic2l0ZXMubmV0XC9hcGkiLCJtc19keW5hbWljc19jbGllbnRfaWQiOiI2NTk5YjI2Yi05NTFiLTRhNWItODg3Yy00YWY1N2M1N2Y2M2YifQ==";

export function configMapping(token) {
  return JSON.parse(decode(token));
}

export function getConfigData(configs) {
  return configs;
}

export async function fetchConfigData() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  // if (!sessionStorage.getItem("x-nft-config-token")) {
  return fetch("https://sosal.in/endpoints/GetConfig.php", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      // sessionStorage.setItem("x-nft-config-token", result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      swal("Configration failed!", "Please contact admin", "warning").then(
        (value) => {
          // sessionStorage.setItem("x-nft-config-token", mockToken);
          // return mockToken;
          return false;
        }
      );
    });
  // } else {
  //   return false;
  // }
}
