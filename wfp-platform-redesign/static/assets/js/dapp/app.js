var accounts;
var account;
var balance;
var htmlstr = "";
var docHash;
var docHashVerify;
var myContractInstance;
var WAD = 1000000000000000000;
var modalShow = false;
var contract_address  = "0xc31bb1098bb9d5d6d41f72a31128350cc810dfa9";
var contract_abi=[  {   "constant": true,   "inputs": [     {       "name": "",       "type": "bytes32"     }   ],    "name": "documentHashMap",    "outputs": [      {       "name": "owner",        "type": "address"     },      {       "name": "hash",       "type": "bytes32"     },      {       "name": "code",       "type": "bytes32"     },      {       "name": "title",        "type": "string"      },      {       "name": "author",       "type": "string"      },      {       "name": "isbn",       "type": "string"      },      {       "name": "publisher",        "type": "string"      },      {       "name": "blockTimestamp",       "type": "uint256"     }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [     {       "name": "hash",       "type": "bytes32"     }   ],    "name": "getDocumentByHash",    "outputs": [      {       "name": "code",       "type": "bytes32"     },      {       "name": "owner",        "type": "address"     },      {       "name": "blockTimestamp",       "type": "uint256"     },      {       "name": "title",        "type": "string"      },      {       "name": "author",       "type": "string"      },      {       "name": "isbn",       "type": "string"      },      {       "name": "publisher",        "type": "string"      }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [],   "name": "numDocuments",   "outputs": [      {       "name": "",       "type": "uint256"     }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [     {       "name": "code",       "type": "bytes32"     }   ],    "name": "documentCodeExists",   "outputs": [      {       "name": "exists",       "type": "bool"      }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [     {       "name": "hash",       "type": "bytes32"     }   ],    "name": "documentHashExists",   "outputs": [      {       "name": "exists",       "type": "bool"      }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": false,    "inputs": [],   "name": "destroy",    "outputs": [],    "payable": false,   "stateMutability": "nonpayable",    "type": "function"  },  {   "constant": false,    "inputs": [     {       "name": "code",       "type": "bytes32"     },      {       "name": "hash",       "type": "bytes32"     },      {       "name": "title",        "type": "string"      },      {       "name": "author",       "type": "string"      },      {       "name": "isbn",       "type": "string"      },      {       "name": "publisher",        "type": "string"      }   ],    "name": "newDocument",    "outputs": [],    "payable": false,   "stateMutability": "nonpayable",    "type": "function"  },  {   "constant": true,   "inputs": [],   "name": "owner",    "outputs": [      {       "name": "",       "type": "address"     }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [     {       "name": "code",       "type": "bytes32"     }   ],    "name": "getDocumentByCode",    "outputs": [      {       "name": "hash",       "type": "bytes32"     },      {       "name": "owner",        "type": "address"     },      {       "name": "blockTimestamp",       "type": "uint256"     },      {       "name": "title",        "type": "string"      },      {       "name": "author",       "type": "string"      },      {       "name": "isbn",       "type": "string"      },      {       "name": "publisher",        "type": "string"      }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": true,   "inputs": [     {       "name": "",       "type": "uint256"     }   ],    "name": "documents",    "outputs": [      {       "name": "owner",        "type": "address"     },      {       "name": "hash",       "type": "bytes32"     },      {       "name": "code",       "type": "bytes32"     },      {       "name": "title",        "type": "string"      },      {       "name": "author",       "type": "string"      },      {       "name": "isbn",       "type": "string"      },      {       "name": "publisher",        "type": "string"      },      {       "name": "blockTimestamp",       "type": "uint256"     }   ],    "payable": false,   "stateMutability": "view",    "type": "function"  },  {   "constant": false,    "inputs": [     {       "name": "newOwner",       "type": "address"     }   ],    "name": "transferOwnership",    "outputs": [],    "payable": false,   "stateMutability": "nonpayable",    "type": "function"  },  {   "inputs": [],   "payable": false,   "stateMutability": "nonpayable",    "type": "constructor" },  {   "anonymous": false,   "inputs": [     {       "indexed": false,       "name": "code",       "type": "bytes32"     },      {       "indexed": false,       "name": "hash",       "type": "bytes32"     },      {       "indexed": false,       "name": "owner",        "type": "address"     },      {       "indexed": false,       "name": "timestamp",        "type": "uint256"     },      {       "indexed": false,       "name": "title",        "type": "string"      },      {       "indexed": false,       "name": "author",       "type": "string"      },      {       "indexed": false,       "name": "isbn",       "type": "string"      },      {       "indexed": false,       "name": "publisher",        "type": "string"      }   ],    "name": "NewDocument",    "type": "event" }];

// Initialize
function initializeContract() {  
  console.log(contract_address);
  myContractInstance = web3.eth.contract(contract_abi).at(contract_address);
  $("#cf_address").html(contract_address);
  $("#cb_address").html(account);
  refreshDataNew();
}


function refreshDataNew() {
  getDataPromise(myContractInstance.numDocuments).then(
    function(numDocuments) {      
      console.log("numDocuments = " + numDocuments.toNumber());
      $("#numDocuments").html(numDocuments.toNumber());
      return getDataPromise(myContractInstance.owner);
    }).then(
    function(owner) {
      console.log("owner = " + owner);     
      $("#owner").html(owner);      
      if(owner==account){
      
      }else{
        $("#admincontainer").hide();
        $("#statuscontainer").html("<h4>You are not authorized to perform admin actions</h4>");
      }
    });
}



function getDataPromise(varname) {
  return new Promise(function(resolve, reject) {
    varname.call(function(error, result) {
      if (!error) {
        resolve(result);
      }
    })
  })
}

function getDataPromiseWithArgs(varname, args) {
  return new Promise(function(resolve, reject) {
    varname.call(args, function(error, result) {
      if (!error) {
        resolve(result);
      }
    })
  })
}

function getDataPromiseWithTwoArgs(varname, arg1, arg2) {
  return new Promise(function(resolve, reject) {
    varname.call(arg1, arg2, function(error, result) {
      if (!error) {
        resolve(result);
      }
    })
  })
}

function getBalancePromise(addr) {
  return new Promise(function(resolve, reject) {

    web3.eth.getBalance(addr, function(error, result) {
      if (!error) {
        resolve(result);
      }
    })

  })
}

function getDataNum(varname, divtag) {
  varname.call(function(error, result) {
    if (!error) {
      $(divtag).html(result.toNumber());
    } else {
      console.log(error);
    }
  })
}

function getDataStr(varname, divtag) {
  varname.call(function(error, result) {
    if (!error) {
      $(divtag).html(result);
    } else {
      console.log(error);
    }
  })
}

function setStatus(message) {
  $("#status").html(message);
}



function progress (p) {
  var w = ((p*100).toFixed(0));
}

function setStatus(message) {
  $("#status").html(message);
};

function finished(result) {
  console.log(result.toString(CryptoJSH.enc.Hex))
  docHash = "0x" + result.toString(CryptoJSH.enc.Hex);
  //docHash = result;
  $("#docHash").html(docHash);
  setStatus("Status: Hash calculaton done");  
}

function calculateHash() {
  setStatus("Status: Calculating Hash");    
    var file = document.getElementById('fileUpload').files[0]
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        var res = CryptoJSH.SHA256(data,progress,finished);
      };
    reader.readAsBinaryString(file)
}

function finishedverify(result) {
  console.log(result.toString(CryptoJSH.enc.Hex))
  docHashVerify = "0x" + result.toString(CryptoJSH.enc.Hex);
  //docHash = result;
  $("#docHashVerify").html(docHashVerify);
  setStatus("Status: Hash calculaton done");  
}

function calculateHashVerify() {
  setStatus("Status: Calculating Hash");    
    var file = document.getElementById('fileUploadVerify').files[0]
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        var res = CryptoJSH.SHA256(data,progress,finishedverify);
      };
    reader.readAsBinaryString(file)
}

function alphanumeric_unique() {
    return Math.random().toString(36).split('').filter( function(value, index, self) { 
        return self.indexOf(value) === index;
    }).join('').substr(2,8);
}

function getDocumentByHashGenerate(){
  getDataPromiseWithArgs(myContractInstance.getDocumentByHash, docHashVerify.valueOf()).then(
    function(result) {      
      console.log(result);
      code=web3.toAscii(result[0].valueOf());
      owner=result[1];
      blockTimestamp=result[2].toNumber();
      title=result[3];
      author=result[4];
      isbn=result[5];
      publisher=result[6];
      //$("#docHashVerify").html(code);
      console.log(code);
      console.log(blockTimestamp);
      console.log(title);
      console.log(author);
      console.log(isbn);
      console.log(publisher);   
      if(blockTimestamp>0){
        $("#myModal").modal();
        //codeurl="http://wfps.in/"+code; 
        $("#myModalTitle").html("Book found by hash");
        $("#myModalText").html("Code: " + code + "<br>Timestamp: " + blockTimestamp + "<br>Title: " + title + "<br>Author: " + author + "<br>ISBN: " + isbn + "<br>Publisher: " + publisher);   
     }else{
        $("#myModal").modal();
        $("#myModalTitle").html("Book not found");
        $("#myModalText").html("No book found with the hash provided.");   
     }
    });
}

function getDocumentByHash(){
  hashvalue=$("#hashvalue").val();
  getDataPromiseWithArgs(myContractInstance.getDocumentByHash, hashvalue.valueOf()).then(
    function(result) {      
      console.log(result);
      code=web3.toAscii(result[0].valueOf());
      owner=result[1];
      blockTimestamp=result[2].toNumber();
      title=result[3];
      author=result[4];
      isbn=result[5];
      publisher=result[6];
      //$("#docHashVerify").html(code);
      console.log(code);
      console.log(blockTimestamp);
      console.log(title);
      console.log(author);
      console.log(isbn);
      console.log(publisher);   
      if(blockTimestamp>0){
        $("#myModal").modal();
        //codeurl="http://wfps.in/"+code;  
        $("#myModalTitle").html("Book found by hash");
        $("#myModalText").html("Code: " + code + "<br>Timestamp: " + blockTimestamp + "<br>Title: " + title + "<br>Author: " + author + "<br>ISBN: " + isbn + "<br>Publisher: " + publisher);   
     }else{
        $("#myModal").modal();
        $("#myModalTitle").html("Book not found");
        $("#myModalText").html("No book found with the hash provided.");   
     }
    });
}

function getDocumentByCode(){
  shortcode=$("#shortcode").val();
  getDataPromiseWithArgs(myContractInstance.getDocumentByCode, shortcode).then(
    function(result) {      
      console.log(result);
      hash=result[0];
      owner=result[1];
      blockTimestamp=result[2].toNumber();
      title=result[3];
      author=result[4];
      isbn=result[5];
      publisher=result[6];
      //$("#docHashVerify").html(code);
      console.log(hash);
      console.log(blockTimestamp);
      console.log(title);
      console.log(author);
      console.log(isbn);
      console.log(publisher);   
      if(blockTimestamp>0){
        $("#myModal").modal();
        $("#myModalTitle").html("Book found by code");
        codeurl="http://wfps.in/"+shortcode;  
        $("#myModalText").html("Hash: " + hash + "<br>Timestamp: " + blockTimestamp + "<br>Title: " + title + "<br>Author: " + author + "<br>ISBN: " + isbn + "<br>Publisher: " + publisher+"<br>"+"<img src=\"https://chart.googleapis.com/chart?cht=qr&chs=350&chl="+codeurl+"\" height=\"350\"/>");   
     }else{
        $("#myModal").modal();
        $("#myModalTitle").html("Book not found");
        $("#myModalText").html("No book found with the code provided.");   
     }
    });
}

function putTxRecord(shortcode, txhash, blockNumber, title, author, isbn, publisher, hash){
  console.log("Putting tx record");
  console.log(shortcode);
  console.log(txhash);
  console.log(blockNumber);
  blockTimestamp=Math.floor(Date.now() / 1000);

  var datadir = {
    code: shortcode,
    publisher: publisher,
    hash: hash,
    title: title,
    timestamp: blockTimestamp,
    author: author,
    blockNumber: blockNumber,
    txhash: txhash,
    isbn: isbn
    };

  $.ajax({
              url: 'http://platform.self-publish.in/record-tx-receipt',
              method: 'POST',
              crossDomain: true,
              dataType: 'json',
              contentType: "application/json; charset=utf-8",
              success: function(data) {
                console.log(data);                    
              },
              error: function(data) {
                  console.log(data);  
              },
              data: JSON.stringify(datadir)
          });

  /*web3.eth.getBlock(blockNumber, (error, result) => {
      if (error) {
        reject(error);
      } else {
          console.log("======================");
          console.log(result.timestamp);
          blockTimestamp=result.timestamp;

          var datadir = {
            code: shortcode,
            publisher: publisher,
            hash: hash,
            title: title,
            timestamp: blockTimestamp,
            author: author,
            blockNumber: blockNumber,
            txhash: txhash,
            isbn: isbn
            };

    
      }
    });

  /*getDataPromiseWithArgs(myContractInstance.getDocumentByCode, shortcode).then(
    function(result) {      
      console.log(result);
      hash=result[0];
      owner=result[1];
      blockTimestamp=result[2].toNumber();
      title=result[3];
      author=result[4];
      isbn=result[5];
      publisher=result[6];
  
      if(blockTimestamp>0){
        var datadir = {
        code: shortcode,
        publisher: publisher,
        hash: hash,
        title: title,
        timestamp: blockTimestamp,
        author: author,
        blockNumber: blockNumber,
        txhash: txhash,
        isbn: isbn
    };

  $.ajax({
            url: 'http://platform.self-publish.in/record-tx-receipt',
            method: 'POST',
            crossDomain: true,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
              console.log(data);                    
            },
            error: function(data) {
                console.log(data);  
            },
            data: JSON.stringify(datadir)
        });
     }else{
        console.log("Error");
     }
    });
*/
  
}

function newDocument() {
  $("#homeload").show();  
  //calculateHash();
  var bookTitle = $("#bookTitle").val();
  var authorNames = $("#authorNames").val();
  var isbn = $("#isbn").val();
  var publisher = $("#publisher").val();
  var shortcode = alphanumeric_unique();
  shortcode=shortcode.toString();
  console.log("shortcode = " + shortcode);
  var code=web3.fromAscii(shortcode);
  hash=docHash.valueOf();

  var error=false;
  console.log("code = " + code);
  console.log("hash = " + hash);
  console.log("bookTitle = " + bookTitle);
  console.log("authorNames = " + authorNames);
  console.log("isbn = " + isbn);
  console.log("publisher = " + publisher);

  //if(!error){
    //myContractInstance.newDocument(code, hash, bookTitle, authorNames, isbn, publisher, {from: account, gas: 5000000}, function(error, result) {
      myContractInstance.newDocument(code, hash, bookTitle, authorNames, isbn, publisher, function(error, result) {
      //console.log(error);
      //console.log(result);
    //  if (!error) {
        getTransactionReceiptMined(result).then(
          function(receipt) {
            console.log(receipt.transactionHash);
            $("#homeload").hide();  
            $("#myModal").modal();
            $("#myModalTitle").html("Transaction Successful");
            codeurl="http://wfps.in/"+shortcode;            
            $("#myModalText").html("Your transaction to certify a book has been processed successfully.<br><br>Transaction hash: " + receipt.transactionHash+"<br>Code: <a target=\"_blank\" href=\""+codeurl+"\">"+shortcode + "<br>Code Hash: "+code +"<br>Document Hash: "+hash +"<br>Title: "+bookTitle+"<br>Author: "+authorNames+"<br>ISBN: "+isbn+"<br>Publisher: "+publisher+"<br>"+"<img src=\"https://chart.googleapis.com/chart?cht=qr&chs=350&chl="+codeurl+"\" height=\"350\"/>");
            putTxRecord(shortcode, receipt.transactionHash, receipt.blockNumber, bookTitle, authorNames, isbn, publisher, hash);
          });
  //    }
    });
//  }
}

var loadPage = () => {
  setTimeout(() => {
    if (!window.web3 || !window.web3.eth.accounts[0]) {
      $("#votingcontractcontainer").hide();
      $("#admincontainer").hide();
      $("#status").html(`
       <div>
         <div class="pane before-error">
           <h2>Could not connect to Ethereum</h2>
           <p>

             Consider installing <a href=https://metamask.io>MetaMask</a> or another Ethereum client.

             If you are using MetaMask, you may need to unlock your account and connect to the Ethereum network. You can also try disabling and re-enabling
             the MetaMask plugin by going to <a href=chrome://extensions>chrome://extensions</a>.
           </p>

           <p>Please reload this page and try again.</p>
         </div>
       </div>
     `);
    } else {
      //initializeContract();
      account = web3.eth.accounts[0];
      console.log(account);
      initializeContract();

      web3.eth.getBalance(account, function(error, result) {
        if (!error) {
          console.log(result);
          $("#cb_balance").html(web3.fromWei(result, "ether").toFixed(5));

        } else {
          console.error(error);
        }
      });

    }
  }, 500)
}

// Inital loading of the page
if (document.readyState !== 'complete') {
  // Document has not finished loaded yet, load the page when it is complete
  window.addEventListener('load', function() {
    loadPage();
  })
} else {
  // Document has finished loaded, load the page
  loadPage();
}

function getTransactionReceiptMined(txHash, interval) {
  var transactionReceiptAsync;
  interval = interval ? interval : 500;
  transactionReceiptAsync = function(txHash, resolve, reject) {
    web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
      if (error) {
        reject(error);
      } else {
        if (receipt == null) {
          setTimeout(function() {
            transactionReceiptAsync(txHash, resolve, reject);
          }, interval);
        } else {
          resolve(receipt);
        }
      }
    });
  };

  if (Array.isArray(txHash)) {
    var promises = [];
    txHash.forEach(function(oneTxHash) {
      promises.push(web3.eth.getTransactionReceiptMined(oneTxHash, interval));
    });
    return Promise.all(promises);
  } else {
    return new Promise(function(resolve, reject) {
      transactionReceiptAsync(txHash, resolve, reject);
    });
  }
};

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ', ' + year + ' at ' + hour + ':' + min + ':' + sec;
  return time;
}