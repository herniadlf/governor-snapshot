import { AbiItem } from "web3-utils";

const abi: AbiItem[] = [
  {
    "constant": false,
    "inputs": [{ "name": "_metaEvidence", "type": "string" }],
    "name": "setMetaEvidence",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_loserMultiplier", "type": "uint256" }],
    "name": "changeLoserMultiplier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "arbitratorExtraData",
    "outputs": [{ "name": "", "type": "bytes" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_session", "type": "uint256" }],
    "name": "getSubmittedLists",
    "outputs": [{ "name": "submittedLists", "type": "uint256[]" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "executionTimeout",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_withdrawTimeout", "type": "uint256" }],
    "name": "changeWithdrawTimeout",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_submissionBaseDeposit", "type": "uint256" }],
    "name": "changeSubmissionDeposit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_disputeID", "type": "uint256" },
      { "name": "_ruling", "type": "uint256" }
    ],
    "name": "rule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_winnerMultiplier", "type": "uint256" }],
    "name": "changeWinnerMultiplier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_target", "type": "address[]" },
      { "name": "_value", "type": "uint256[]" },
      { "name": "_data", "type": "bytes" },
      { "name": "_dataSize", "type": "uint256[]" },
      { "name": "_description", "type": "string" }
    ],
    "name": "submitList",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_beneficiary", "type": "address" },
      { "name": "_session", "type": "uint256" },
      { "name": "_round", "type": "uint256" },
      { "name": "_submissionID", "type": "uint256" }
    ],
    "name": "withdrawFeesAndRewards",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "_session", "type": "uint256" },
      { "name": "_round", "type": "uint256" },
      { "name": "_contributor", "type": "address" }
    ],
    "name": "getContributions",
    "outputs": [{ "name": "contributions", "type": "uint256[]" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCurrentSessionNumber",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "arbitrator",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "metaEvidenceUpdates",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_listID", "type": "uint256" },
      { "name": "_cursor", "type": "uint256" },
      { "name": "_count", "type": "uint256" }
    ],
    "name": "executeTransactionList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "reservedETH",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "", "type": "uint256" }],
    "name": "sessions",
    "outputs": [
      { "name": "ruling", "type": "uint256" },
      { "name": "disputeID", "type": "uint256" },
      { "name": "sumDeposit", "type": "uint256" },
      { "name": "status", "type": "uint8" },
      { "name": "durationOffset", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "shadowWinner",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "_session", "type": "uint256" },
      { "name": "_round", "type": "uint256" }
    ],
    "name": "getRoundInfo",
    "outputs": [
      { "name": "paidFees", "type": "uint256[]" },
      { "name": "hasPaid", "type": "bool[]" },
      { "name": "feeRewards", "type": "uint256" },
      { "name": "successfullyPaid", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_metaEvidence", "type": "string" }],
    "name": "changeMetaEvidence",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "executeSubmissions",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_submissionTimeout", "type": "uint256" }],
    "name": "changeSubmissionTimeout",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_sharedMultiplier", "type": "uint256" }],
    "name": "changeSharedMultiplier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "loserMultiplier",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "winnerMultiplier",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "withdrawTimeout",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "_listID", "type": "uint256" },
      { "name": "_transactionIndex", "type": "uint256" }
    ],
    "name": "getTransactionInfo",
    "outputs": [
      { "name": "target", "type": "address" },
      { "name": "value", "type": "uint256" },
      { "name": "data", "type": "bytes" },
      { "name": "executed", "type": "bool" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_submissionID", "type": "uint256" }],
    "name": "fundAppeal",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "", "type": "uint256" }],
    "name": "submissions",
    "outputs": [
      { "name": "submitter", "type": "address" },
      { "name": "deposit", "type": "uint256" },
      { "name": "listHash", "type": "bytes32" },
      { "name": "submissionTime", "type": "uint256" },
      { "name": "approved", "type": "bool" },
      { "name": "approvalTime", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getExpendableFunds",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_submissionID", "type": "uint256" },
      { "name": "_listHash", "type": "bytes32" }
    ],
    "name": "withdrawTransactionList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNumberOfCreatedLists",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_arbitrator", "type": "address" },
      { "name": "_arbitratorExtraData", "type": "bytes" }
    ],
    "name": "changeArbitrator",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "submissionBaseDeposit",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "submissionTimeout",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "_executionTimeout", "type": "uint256" }],
    "name": "changeExecutionTimeout",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "sharedMultiplier",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "deployer",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MULTIPLIER_DIVISOR",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_listID", "type": "uint256" }],
    "name": "getNumberOfTransactions",
    "outputs": [{ "name": "txCount", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lastApprovalTime",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_session", "type": "uint256" }],
    "name": "getSessionRoundsNumber",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "_arbitrator", "type": "address" },
      { "name": "_extraData", "type": "bytes" },
      { "name": "_submissionBaseDeposit", "type": "uint256" },
      { "name": "_submissionTimeout", "type": "uint256" },
      { "name": "_executionTimeout", "type": "uint256" },
      { "name": "_withdrawTimeout", "type": "uint256" },
      { "name": "_sharedMultiplier", "type": "uint256" },
      { "name": "_winnerMultiplier", "type": "uint256" },
      { "name": "_loserMultiplier", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  { "payable": true, "stateMutability": "payable", "type": "fallback" },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "_listID", "type": "uint256" },
      { "indexed": true, "name": "_submitter", "type": "address" },
      { "indexed": true, "name": "_session", "type": "uint256" },
      { "indexed": false, "name": "_description", "type": "string" }
    ],
    "name": "ListSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "_metaEvidenceID", "type": "uint256" },
      { "indexed": false, "name": "_evidence", "type": "string" }
    ],
    "name": "MetaEvidence",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "_arbitrator", "type": "address" },
      { "indexed": true, "name": "_disputeID", "type": "uint256" },
      { "indexed": false, "name": "_metaEvidenceID", "type": "uint256" },
      { "indexed": false, "name": "_evidenceGroupID", "type": "uint256" }
    ],
    "name": "Dispute",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "_arbitrator", "type": "address" },
      { "indexed": true, "name": "_evidenceGroupID", "type": "uint256" },
      { "indexed": true, "name": "_party", "type": "address" },
      { "indexed": false, "name": "_evidence", "type": "string" }
    ],
    "name": "Evidence",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "_arbitrator", "type": "address" },
      { "indexed": true, "name": "_disputeID", "type": "uint256" },
      { "indexed": false, "name": "_ruling", "type": "uint256" }
    ],
    "name": "Ruling",
    "type": "event"
  }
];

export default abi;
