import { ethers } from "ethers";
import ContractABI from "./abi.json";
import dotenv from "dotenv";

dotenv.config();
const BlogContractAddress = process.env.DEPLOYED_COUNTER_CONTRACT_ADDRESS! || "0xed0ca7FE76Db093BE2291C9Ee7AaA0d556790C39";

const getBlogContract = (providerOrSigner: ethers.Signer) => {
    console.log(BlogContractAddress);
    return new ethers.Contract(
        BlogContractAddress,
        ContractABI,
        providerOrSigner
    );
};

export default getBlogContract;