(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{411:function(t,a,e){"use strict";e.r(a);var s=e(11),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("To develop for MetaMask, install MetaMask in the browser of your choice on your development machine. "),e("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("A quick note...")]),t._v(" "),e("p",[t._v("This guide assumes intermediate knowledge of HTML, CSS, and JavaScript.")])]),t._v(" "),e("p",[t._v("Once MetaMask is installed and running (make sure you back up your Secret Recovery Phrase), you should find that new browser tabs have a "),e("code",[t._v("window.ethereum")]),t._v(" object available in the developer console.\nThis is how your website will interact with MetaMask.")]),t._v(" "),e("p",[t._v("You can review the full API for that object "),e("RouterLink",{attrs:{to:"/guide/ethereum-provider.html"}},[t._v("here")]),t._v(".\nNote that "),e("strong",[t._v("over the course of 2020")]),t._v(", we introduced significant changes to this API, and we recommend that you refer to its documentation.")],1),t._v(" "),e("h2",{attrs:{id:"basic-considerations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-considerations"}},[t._v("#")]),t._v(" Basic Considerations")]),t._v(" "),e("h3",{attrs:{id:"web3-browser-detection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web3-browser-detection"}},[t._v("#")]),t._v(" Web3 Browser Detection")]),t._v(" "),e("p",[t._v("To verify if the browser is running MetaMask, copy and paste the code snippet below in the developer console of your web browser:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MetaMask is installed!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You can review the full API for the "),e("code",[t._v("window.ethereum")]),t._v(" object "),e("RouterLink",{attrs:{to:"/guide/ethereum-provider.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"running-a-test-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-a-test-network"}},[t._v("#")]),t._v(" Running a Test Network")]),t._v(" "),e("p",[t._v("In the top right menu of MetaMask, select the network that you are currently connected to. Among several popular defaults, you'll find "),e("code",[t._v("Custom RPC")]),t._v(" and "),e("code",[t._v("Localhost 8545")]),t._v(". These are both useful for connecting to a test blockchain, like "),e("a",{attrs:{href:"https://www.trufflesuite.com/ganache",target:"_blank",rel:"noopener noreferrer"}},[t._v("ganache"),e("OutboundLink")],1),t._v(". You can quickly install and start Ganache if you have "),e("code",[t._v("npm")]),t._v(" installed with "),e("code",[t._v("npm i -g ganache-cli && ganache-cli")]),t._v(".")]),t._v(" "),e("p",[t._v("Ganache has some great features for starting your application with different states. If your application starts with the "),e("code",[t._v("-m")]),t._v(" flag, you can feed it the same seed phrase you have in your MetaMask, and the test network will give each of your first 10 accounts 100 test ether, which makes it easier to start work.")]),t._v(" "),e("p",[t._v("Since your seed phrase has the power to control all your accounts, it is probably worth keeping at least one seed phrase for development, separate from any that you use for storing real value. One easy way to manage multiple seed phrases with MetaMask is with multiple browser profiles, each of which can have its own clean extension installations.")]),t._v(" "),e("h4",{attrs:{id:"resetting-your-local-nonce-calculation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resetting-your-local-nonce-calculation"}},[t._v("#")]),t._v(" Resetting Your Local Nonce Calculation")]),t._v(" "),e("p",[t._v("If you're running a test blockchain and restart it, you can accidentally confuse MetaMask because it calculates the next "),e("RouterLink",{attrs:{to:"/guide/sending-transactions.html#nonce-ignored"}},[t._v("nonce")]),t._v("\nbased on both the network state "),e("em",[t._v("and")]),t._v(" the known sent transactions.")],1),t._v(" "),e("p",[t._v("To clear MetaMask's transaction queue, and effectively reset its nonce calculation, you can use the "),e("code",[t._v("Reset Account")]),t._v(" button in "),e("code",[t._v("Settings")]),t._v(" (available in the top-right identicon menu).")]),t._v(" "),e("h3",{attrs:{id:"detecting-metamask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detecting-metamask"}},[t._v("#")]),t._v(" Detecting MetaMask")]),t._v(" "),e("p",[t._v("If you want to differentiate MetaMask from other Ethereum-compatible browsers, you can detect MetaMask using "),e("code",[t._v("ethereum.isMetaMask")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"user-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-state"}},[t._v("#")]),t._v(" User State")]),t._v(" "),e("p",[t._v("Currently there are a few stateful things to consider when interacting with this API:")]),t._v(" "),e("ul",[e("li",[t._v("What is the current network?")]),t._v(" "),e("li",[t._v("What is the current account?")])]),t._v(" "),e("p",[t._v("Both of these are available synchronously as "),e("code",[t._v("ethereum.networkVersion")]),t._v(" and "),e("code",[t._v("ethereum.selectedAddress")]),t._v(".\nYou can listen for changes using events too, see ("),e("RouterLink",{attrs:{to:"/guide/ethereum-provider.html"}},[t._v("the API reference")]),t._v(").")],1),t._v(" "),e("h3",{attrs:{id:"connecting-to-metamask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-metamask"}},[t._v("#")]),t._v(" Connecting to MetaMask")]),t._v(" "),e("p",[t._v('"Connecting" or "logging in" to MetaMask effectively means "to access the user\'s Ethereum account(s)".')]),t._v(" "),e("p",[t._v("You should "),e("strong",[t._v("only")]),t._v(" initiate a connection request in response to direct user action, such as clicking a button.\nYou should "),e("strong",[t._v("always")]),t._v(' disable the "connect" button while the connection request is pending.\nYou should '),e("strong",[t._v("never")]),t._v(" initiate a connection request on page load.")]),t._v(" "),e("p",[t._v("We recommend that you provide a button to allow the user to connect MetaMask to your dapp.\nClicking this button should call the following method:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("ethereum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("EthConnectButton"),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"HTML"}},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enableEthereumButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Enable Ethereum"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"JavaScript"}},[e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ethereumButton "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.enableEthereumButton'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nethereumButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Will Start the metamask extension")]),t._v("\n  ethereum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1),t._v(" "),e("p",[t._v("This promise-returning function resolves with an array of hex-prefixed Ethereum addresses, which can be used as general account references when sending transactions.")]),t._v(" "),e("p",[t._v("Over time, this method is intended to grow to include various additional parameters to help your site request everything it needs from the user during setup.")]),t._v(" "),e("p",[t._v("Since it returns a promise, if you're in an "),e("code",[t._v("async")]),t._v(" function, you may log in like this:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ethereum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" accounts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We currently only ever provide a single account,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but the array gives us some room to grow.")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("EthAsyncConnectButton"),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"HTML"}},[e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("enableEthereumButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Enable Ethereum"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Account: "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showAccount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"JavaScript"}},[e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ethereumButton "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.enableEthereumButton'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" showAccount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.showAccount'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nethereumButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAccount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAccount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ethereum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_requestAccounts'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" accounts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  showAccount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" account"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),e("h2",{attrs:{id:"choosing-a-convenience-library"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-convenience-library"}},[t._v("#")]),t._v(" Choosing a Convenience Library")]),t._v(" "),e("p",[t._v("Convenience libraries exist for a variety of reasons.")]),t._v(" "),e("p",[t._v("Some of them simplify the creation of specific user interface elements, some entirely manage the user account onboarding, and others give you a variety of methods of interacting with smart contracts, for a variety of API preferences, from promises, to callbacks, to strong types, and on.")]),t._v(" "),e("p",[t._v("The provider API itself is very simple, and wraps\n"),e("a",{attrs:{href:"https://eth.wiki/json-rpc/API#json-rpc-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereum JSON-RPC"),e("OutboundLink")],1),t._v("\nformatted messages, which is why developers usually use a convenience library for interacting\nwith the provider, like "),e("a",{attrs:{href:"https://www.npmjs.com/package/ethers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethers"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://www.npmjs.com/package/web3",target:"_blank",rel:"noopener noreferrer"}},[t._v("web3.js"),e("OutboundLink")],1),t._v(",\n"),e("a",{attrs:{href:"https://www.trufflesuite.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("truffle"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://framework.embarklabs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Embark"),e("OutboundLink")],1),t._v(", or others. From those tools,\nyou can generally find sufficient documentation to interact with the provider, without reading this lower-level API.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);