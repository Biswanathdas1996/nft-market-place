import EthIcon from "../assets/icons/eth_icon.svg";
import MaticIcon from "../assets/icons/polygon_icon.png";

export const getIcon = () => {
  const getcurrentNetworkId = sessionStorage.getItem("currentyNetwork");
  if (getcurrentNetworkId === "80001") {
    return MaticIcon;
  } else {
    return EthIcon;
  }
};
