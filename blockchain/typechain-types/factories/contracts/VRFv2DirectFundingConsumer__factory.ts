/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VRFv2DirectFundingConsumer,
  VRFv2DirectFundingConsumerInterface,
} from "../../contracts/VRFv2DirectFundingConsumer";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRequestStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_requests",
    outputs: [
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fulfilled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052620aae60600560006101000a81548163ffffffff021916908363ffffffff1602179055506003600560046101000a81548161ffff021916908361ffff1602179055506001600560066101000a81548163ffffffff021916908363ffffffff16021790555073779877a7b0d9e8603169ddbd7836e478b46247896005600a6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073ab18414cd93297b0d12ac29e63ca20f515b3db46600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156200011f57600080fd5b50338060006005600a9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000246576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023d9062000466565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620002cd57620002cc81620002d660201b60201c565b5b505050620004fa565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000347576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200033e90620004d8565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b60006200044e60188362000405565b91506200045b8262000416565b602082019050919050565b6000602082019050818103600083015262000481816200043f565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000620004c060178362000405565b9150620004cd8262000488565b602082019050919050565b60006020820190508181036000830152620004f381620004b1565b9050919050565b60805160a0516116f26200053c600039600081816101de0152818161076501528181610a3301528181610a540152610b74015260006109f701526116f26000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a168fa8911610066578063a168fa8914610121578063d8a4676f14610152578063e0c8628914610184578063f2fde38b146101a2578063fc2a88c3146101be5761009e565b80631fe543e3146100a357806379ba5097146100bf5780638796ba8c146100c95780638da5cb5b146100f95780638dc654a214610117575b600080fd5b6100bd60048036038101906100b89190610f43565b6101dc565b005b6100c7610278565b005b6100e360048036038101906100de9190610f9f565b61040d565b6040516100f09190610fdb565b60405180910390f35b610101610431565b60405161010e9190611037565b60405180910390f35b61011f61045a565b005b61013b60048036038101906101369190610f9f565b6105c2565b60405161014992919061106d565b60405180910390f35b61016c60048036038101906101679190610f9f565b6105f3565b60405161017b93929190611154565b60405180910390f35b61018c61070d565b6040516101999190610fdb565b60405180910390f35b6101bc60048036038101906101b791906111be565b610945565b005b6101c6610959565b6040516101d39190610fdb565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461026a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026190611248565b60405180910390fd5b610274828261095f565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610308576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ff906112b4565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b6003818154811061041d57600080fd5b906000526020600020016000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610462610963565b60006005600a9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104df9190611037565b602060405180830381865afa1580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052091906112e9565b6040518363ffffffff1660e01b815260040161053d929190611316565b6020604051808303816000875af115801561055c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610580919061136b565b6105bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b6906113e4565b60405180910390fd5b50565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b60008060606000600260008681526020019081526020016000206000015411610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890611450565b60405180910390fd5b600060026000868152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a900460ff16151515158152602001600282018054806020026020016040519081016040528092919081815260200182805480156106e557602002820191906000526020600020905b8154815260200190600101908083116106d1575b5050505050815250509050806000015181602001518260400151935093509350509193909250565b6000610717610963565b610756600560009054906101000a900463ffffffff16600560049054906101000a900461ffff16600560069054906101000a900463ffffffff166109f3565b905060405180606001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354600560009054906101000a900463ffffffff166040518263ffffffff1660e01b81526004016107ce919061148f565b602060405180830381865afa1580156107eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080f91906112e9565b8152602001600015158152602001600067ffffffffffffffff81111561083857610837610e00565b5b6040519080825280602002602001820160405280156108665781602001602082028036833780820191505090505b50815250600260008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160020190805190602001906108c3929190610d36565b509050506003819080600181540180825580915050600190039060005260206000200160009091909190915055806004819055507fcc58b13ad3eab50626c6a6300b1d139cd6ebb1688a7cced9461c2f7e762665ee81600560069054906101000a900463ffffffff1660405161093a9291906114aa565b60405180910390a190565b61094d610963565b61095681610c0a565b50565b60045481565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e89061151f565b60405180910390fd5b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634306d354886040518263ffffffff1660e01b8152600401610aab919061148f565b602060405180830381865afa158015610ac8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aec91906112e9565b878787604051602001610b019392919061155c565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610b2e93929190611612565b6020604051808303816000875af1158015610b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b71919061136b565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc2a88c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0191906112e9565b90509392505050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6f9061169c565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b828054828255906000526020600020908101928215610d72579160200282015b82811115610d71578251825591602001919060010190610d56565b5b509050610d7f9190610d83565b5090565b5b80821115610d9c576000816000905550600101610d84565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610dc781610db4565b8114610dd257600080fd5b50565b600081359050610de481610dbe565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e3882610def565b810181811067ffffffffffffffff82111715610e5757610e56610e00565b5b80604052505050565b6000610e6a610da0565b9050610e768282610e2f565b919050565b600067ffffffffffffffff821115610e9657610e95610e00565b5b602082029050602081019050919050565b600080fd5b6000610ebf610eba84610e7b565b610e60565b90508083825260208201905060208402830185811115610ee257610ee1610ea7565b5b835b81811015610f0b5780610ef78882610dd5565b845260208401935050602081019050610ee4565b5050509392505050565b600082601f830112610f2a57610f29610dea565b5b8135610f3a848260208601610eac565b91505092915050565b60008060408385031215610f5a57610f59610daa565b5b6000610f6885828601610dd5565b925050602083013567ffffffffffffffff811115610f8957610f88610daf565b5b610f9585828601610f15565b9150509250929050565b600060208284031215610fb557610fb4610daa565b5b6000610fc384828501610dd5565b91505092915050565b610fd581610db4565b82525050565b6000602082019050610ff06000830184610fcc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061102182610ff6565b9050919050565b61103181611016565b82525050565b600060208201905061104c6000830184611028565b92915050565b60008115159050919050565b61106781611052565b82525050565b60006040820190506110826000830185610fcc565b61108f602083018461105e565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6110cb81610db4565b82525050565b60006110dd83836110c2565b60208301905092915050565b6000602082019050919050565b600061110182611096565b61110b81856110a1565b9350611116836110b2565b8060005b8381101561114757815161112e88826110d1565b9750611139836110e9565b92505060018101905061111a565b5085935050505092915050565b60006060820190506111696000830186610fcc565b611176602083018561105e565b818103604083015261118881846110f6565b9050949350505050565b61119b81611016565b81146111a657600080fd5b50565b6000813590506111b881611192565b92915050565b6000602082840312156111d4576111d3610daa565b5b60006111e2848285016111a9565b91505092915050565b600082825260208201905092915050565b7f6f6e6c792056524620563220777261707065722063616e2066756c66696c6c00600082015250565b6000611232601f836111eb565b915061123d826111fc565b602082019050919050565b6000602082019050818103600083015261126181611225565b9050919050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b600061129e6016836111eb565b91506112a982611268565b602082019050919050565b600060208201905081810360008301526112cd81611291565b9050919050565b6000815190506112e381610dbe565b92915050565b6000602082840312156112ff576112fe610daa565b5b600061130d848285016112d4565b91505092915050565b600060408201905061132b6000830185611028565b6113386020830184610fcc565b9392505050565b61134881611052565b811461135357600080fd5b50565b6000815190506113658161133f565b92915050565b60006020828403121561138157611380610daa565b5b600061138f84828501611356565b91505092915050565b7f556e61626c6520746f207472616e736665720000000000000000000000000000600082015250565b60006113ce6012836111eb565b91506113d982611398565b602082019050919050565b600060208201905081810360008301526113fd816113c1565b9050919050565b7f72657175657374206e6f7420666f756e64000000000000000000000000000000600082015250565b600061143a6011836111eb565b915061144582611404565b602082019050919050565b600060208201905081810360008301526114698161142d565b9050919050565b600063ffffffff82169050919050565b61148981611470565b82525050565b60006020820190506114a46000830184611480565b92915050565b60006040820190506114bf6000830185610fcc565b6114cc6020830184611480565b9392505050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006115096016836111eb565b9150611514826114d3565b602082019050919050565b60006020820190508181036000830152611538816114fc565b9050919050565b600061ffff82169050919050565b6115568161153f565b82525050565b60006060820190506115716000830186611480565b61157e602083018561154d565b61158b6040830184611480565b949350505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115cd5780820151818401526020810190506115b2565b60008484015250505050565b60006115e482611593565b6115ee818561159e565b93506115fe8185602086016115af565b61160781610def565b840191505092915050565b60006060820190506116276000830186611028565b6116346020830185610fcc565b818103604083015261164681846115d9565b9050949350505050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006116866017836111eb565b915061169182611650565b602082019050919050565b600060208201905081810360008301526116b581611679565b905091905056fea2646970667358221220d14da02eda2a0c7f32186712649e6e67f2ca297a07229511d5b41b7d5e027d9d64736f6c63430008120033";

type VRFv2DirectFundingConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFv2DirectFundingConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFv2DirectFundingConsumer__factory extends ContractFactory {
  constructor(...args: VRFv2DirectFundingConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VRFv2DirectFundingConsumer> {
    return super.deploy(overrides || {}) as Promise<VRFv2DirectFundingConsumer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VRFv2DirectFundingConsumer {
    return super.attach(address) as VRFv2DirectFundingConsumer;
  }
  override connect(signer: Signer): VRFv2DirectFundingConsumer__factory {
    return super.connect(signer) as VRFv2DirectFundingConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFv2DirectFundingConsumerInterface {
    return new utils.Interface(_abi) as VRFv2DirectFundingConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFv2DirectFundingConsumer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFv2DirectFundingConsumer;
  }
}