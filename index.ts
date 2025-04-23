import bs58 from "bs58";
import { writeFileSync } from "fs";

// Get secret key from command line arguments
const secretKeyBase58 = process.argv[2];

if (!secretKeyBase58) {
  console.error("Please provide a secret key as a command line argument");
  process.exit(1);
}

const secretKey = bs58.decode(secretKeyBase58);
writeFileSync("my-wallet.json", JSON.stringify(Array.from(secretKey)));
