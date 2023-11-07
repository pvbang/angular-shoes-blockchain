## Blockchain 
- Angular
- NodeJS
- Truffle
- IPFS

### References
```bash
# fork from: 
https://github.com/tanchindn24/blockchain-chuyende-3

# original code:
https://github.com/shamil-t/ehr-blockchain

# video tutorial:
https://www.youtube.com/playlist?list=PL54V-i7zW55d1VKxEkp9DCPt5k_zE6m3X
```

### Requirements
```bash
# Install nodeJs: 
https://nodejs.org/en/download/

# Install Ganache
https://www.trufflesuite.com/ganache
  - New Workspace
  - AddProject
  - Select truffle-config.js in Project Directory
  - Save Workspace

# Download IPFS
https://docs.ipfs.tech/install/ipfs-desktop/

  ## IPFS -> Setting -> System Config: 
    ###
    "API": {
      "HTTPHeaders": {
        "Access-Control-Allow-Methods": [
          "GET",
          "POST"
        ],
        "Access-Control-Allow-Origin": [
          "*"
        ]
      }
    }

    ###
    "Gateway": {
      "APICommands": [],
      "DeserializedResponses": null,
      "DisableHTMLErrors": null,
      "ExposeRoutingAPI": null,
      "HTTPHeaders": {
        "Access-Control-Allow-Headers": [
          "X-Requested-With",
          "Range",
          "User-Agent"
        ],
        "Access-Control-Allow-Methods": [
          "GET",
          "POST"
        ],
        "Access-Control-Allow-Origin": [
          "*"
        ]
      },
      "NoDNSLink": false,
      "NoFetch": false,
      "PathPrefixes": [],
      "PublicGateways": null,
      "RootRedirect": ""
    }

# Add Metamask Extension in Browser
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US
```

### Setup Project
```bash
npm install --force
npm install -g truffle
truffle migrate
```

### Run server
```bash
npm start
```


