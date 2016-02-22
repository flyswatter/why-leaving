"use strict";define("why/app",["exports","ember","why/resolver","ember-load-initializers","why/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("why/components/app-version",["exports","ember-cli-app-version/components/app-version","why/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("why/components/collapse-question",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"section",classNames:["collapsable","clickable"],classNameBindings:["expanded"],expanded:!1,header:"Click to expand",actions:{toggleCollapse:function(){this.toggleProperty("expanded")}}})}),define("why/components/why-im-leaving",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"article"})}),define("why/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("why/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("why/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("why/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("why/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","why/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("why/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("why/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("why/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("why/initializers/export-application-global",["exports","ember","why/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("why/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("why/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("why/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("why/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("why/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("why/router",["exports","ember","why/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType,rootUrl:"/why-leaving-apple/"});n.map(function(){this.route("index",{path:"/why-leaving-apple/"})}),e["default"]=n}),define("why/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("why/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"why/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var n=e.createTextNode("Why I'm Leaving Apple");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,a),n},statements:[["content","why-im-leaving",["loc",[null,[3,0],[3,18]]]]],locals:[],templates:[]}}())}),define("why/templates/components/collapse-question",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:3,column:0},end:{line:7,column:0}},moduleName:"why/templates/components/collapse-question.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","body");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),1,1),n},statements:[["content","yield",["loc",[null,[5,4],[5,13]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"why/templates/components/collapse-question.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","header");var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=new Array(3);return r[0]=e.createElementMorph(n),r[1]=e.createMorphAt(n,0,0),r[2]=e.createMorphAt(t,2,2,a),e.insertBoundary(t,null),r},statements:[["element","action",["toggleCollapse"],[],["loc",[null,[1,20],[1,47]]]],["content","header",["loc",[null,[1,48],[1,58]]]],["block","if",[["get","expanded",["loc",[null,[3,6],[3,14]]]]],[],0,null,["loc",[null,[3,0],[7,7]]]]],locals:[],templates:[e]}}())}),define("why/templates/components/why-im-leaving",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:90,column:0}},moduleName:"why/templates/components/why-im-leaving.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("caption"),n=e.createTextNode("February 21, 2016");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("Hi friends and family, it's true, I'm leaving Apple.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("On hearing this news, people tend to want an explanation, and so here I hope to answer your questions. I made some sections clickable for more detail, because I don't want to bore you.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("details"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("summary"),r=e.createTextNode("Why not Apple?");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("Apple's been awesome. I've learned a ton, made some great friends, saved most of what I earned, eaten the best food of my life, and got to help out in making what I still believe are some of the highest-quality computers in the world, and now I know first hand the kind of care that goes into them.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("There were always tradeoffs. The long commute and the daily hours were among the biggest ones.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("The biggest one, though, was the one thing they could never offer me: freedom to work on what I wanted to.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("I'm a very self-driven person as long as I have the freedom to set my own priorities and pursue them as I like, and I have a long list of things I'd like to do, but that's something I'll probably never get to do in a big corporation.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("The real reason is I have another project I'm too excited to not work on.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("details"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("summary"),r=e.createTextNode("What's the new project?");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("I'll be joining my good friend Aaron Davis at Consensys, building a tool called MetaMask, and generally enhancing the Ethereum ecosystem.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("details"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("summary"),i=e.createTextNode("Who's Aaron Davis?");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createElement("a");e.setAttribute(i,"href","http://aaron.kumavis.me/");var d=e.createTextNode("Aaron");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" is a really brilliant friend of mine who I first met when contributing to the open source project ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","http://voxeljs.com/");var d=e.createTextNode("Voxel.js");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(", which united our common interests in using computers to make cool stuff more accessible to a broader audience (in that case, kids).");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","http://danfinlay.com/why-leaving-apple/aaron.jpg"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("caption"),i=e.createTextNode('Here I am hanging out with Aaron and his son, who calls me "Dino Dan".');e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("While we were working at Apple, Aaron attended a Bitcoin meetup and learned about Ethereum, and after realizing how cool it was potentially, he honed in on a very basic problem in its ecosystem, and the solution was Metamask.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Being a bit of a browser hacker, he quit Apple about a year ago and has been working on Metamask ever since. I've followed along this whole time, and I really love the project, and think I can help him make it better, and help enrich the whole Ethereum ecosystem along the way, so now I'm taking the leap and joining him.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("details"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("summary"),i=e.createTextNode("What's Consensys?");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","http://danfinlay.com/why-leaving-apple/img/consensys.svg"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("I think of Consensys as a sort of digital cooperative, which is both building tools to enhance cooperative tools while using those tools, making them a very unhypocritical and idealistic organization.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("It's presently bankrolled by ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://twitter.com/ethereumjoseph");var d=e.createTextNode("Joseph Lubin");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(", who believes Ethereum has huge potential for mankind, and basically wants to stoke the flames.  You can listen to an interview on a podcast with him ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://letstalkbitcoin.com/blog/post/the-ether-review-1-joseph-lubin");var d=e.createTextNode("here");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(".");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Consensys is dedicated to generally promoting the creation of a more distributed internet. That means peer-to-peer, and less reliant on centralized authorities.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","http://danfinlay.com/why-leaving-apple/img/networktypes.png"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("There are a couple technologies at the heart of these efforts, most notably ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://www.ethereum.org/");var d=e.createTextNode("Ethereum");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" and ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://ipfs.io/");var d=e.createTextNode("IPFS");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(", which are a match made in heaven.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Best of all, I've found in Consensys (and the Ethereum/blockchain communities as a whole) a group of people who are incredibly inspiring and intelligent, and who make it normal to dream the fantastic.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Consensys also gives its members a beautiful and experimental amount of autonomy, allowing me to work from wherever, on my schedule, on the aspects of the ecosystem that I deem the most valuable, which is a kind of mature trust I haven't had since I ran my own business.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("details"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("summary"),i=e.createTextNode("What's Ethereum?");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","http://danfinlay.com/why-leaving-apple/img/ethereum.png"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Ethereum is a ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://simple.wikipedia.org/wiki/Turing_complete");var d=e.createTextNode("turing-complete");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://en.wikipedia.org/wiki/Block_chain_(database)");var d=e.createTextNode("blockchain");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" as described by ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://en.wikipedia.org/wiki/Vitalik_Buterin");var d=e.createTextNode("Vitalik Buterin");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" in this ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/ethereum/wiki/wiki/White-Paper");var d=e.createTextNode("whitepaper");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(". Apparently ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","http://www.wired.com/2014/01/ethereum/");var d=e.createTextNode("Wired did an article on it.");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("What this means is Ethereum is a computer that runs in a completely distributed, public space.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Users can write anything from a simple script, like a monthly rent payment, to anything they can imagine, even something as complicated as ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","http://boardroom.to/");var d=e.createTextNode("a democratic organization");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Unlike normal web sites or applications, no central authority owns the communications.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("No one can censor posts on an Ethereum app, unless that app explicitly makes that legal.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Anyone can read the source code for an Ethereum app, they run in public always.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Ethereum applications do not require any extra infrastructure. Once they are live, they continue to live on their own, on the collective blockchain.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("It's hard to capture the full implications here.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("details"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("summary"),d=e.createTextNode("More examples of Ethereum Applications");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - Uber without uber. Just passengers paying drivers.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - Airbnb without Airbnb. Just people renting space from each other.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - New currencies with new properties. What if inflation didn't go to central banks, ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","https://medium.com/@ConsenSys/basic-income-on-the-blockchain-fair-money-45662889077c#.l9greskm5");var o=e.createTextNode("but was distributed evenly?");e.appendChild(d,o),e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","http://boardroom.to/");var o=e.createTextNode("Transparent organizations");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(" whose entire budget is provably accurate, along with their entire constitution and voting processes.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","http://singularityhub.com/2016/02/16/how-ownerless-firms-will-soon-live-on-the-blockchain/?utm_content=buffer372cf&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer");var o=e.createTextNode("Businesses that have no owners");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(", and only function to serve people.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode(" - ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","https://www.ethereum.org/crowdsale");var o=e.createTextNode("Kickstarter but without a middleman choosing what gets listed");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(", trading real equity, and whatever else you can imagine. ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","https://medium.com/@Digix/where-does-vc-money-come-from-what-is-digix-fighting-for-a7b0b5f31d14");var o=e.createTextNode("Here's a take on how it might disrupt fundraising in general.");e.appendChild(d,o),e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode("You can look for more examples on ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","http://dappstore.io/#/");var o=e.createTextNode("the DAPP Store (Distributed App)");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(". If you can't visit that link, see the next section, \"What's Metamask?\"");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("details"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("summary"),i=e.createTextNode("What's Metamask?");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("You might have noticed something about Ethereum. It doesn't work in your browser.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("In fact, when Aaron first came along, it was thought that people would have to have a second browser to visit Ethereum apps.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Metamask is Aaron's approach to a browser extension that lets you log into an Ethereum account and interact with the Ethereum web like any other website.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"src","http://danfinlay.com/why-leaving-apple/img/metamask.png"),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("In my opinion, this is the kind of convenience that makes the whole thing easier to adopt and get into.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("There is also a blueprint for a version of Metamask that doesn't even require a browser extension, but that's much further on the roadmap. First we want people to be able to actually use Dapps at all.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("details"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("summary"),d=e.createTextNode("I came this far. Give me more Metamask.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode("Besides just letting you access Dapps, Metamask is largely a tool for managing your public identities, in a way you probably haven't ever before.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode("At the moment you always ask someone else to verify your identity. You go to the DMV to get a license, you sign in with Facebook on other sites, you hope nobody learns your social security number which you write on the application for every job you apply to.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode("Metamask is going to be a convenient way for you to manage your own secured identities, allowing you to be logged in with your browser (or eventually phone) across all sites on this new web. In essence, Metamask will let you manage ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","https://medium.com/@danfinlay/basic-modern-cryptography-a590cea3165b#.3q33e0xpv");var o=e.createTextNode("your cryptographic keychain");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(".");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),d=e.createTextNode("For a big old thinkpiece on the future of online identity that will be made possible by managing it yourself, you should check out ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","https://medium.com/@ConsenSys/tell-me-who-you-are-258268bf3180");var o=e.createTextNode("Tell Me Who You Are");e.appendChild(d,o),e.appendChild(i,d);var d=e.createTextNode(" by Vinay Gupta, another Consensys member.");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("So, those are my reasons. I'll hopefully be bettering society. I'll have greater personal freedom. I'll get to work on more exciting topics. And of course, I'll be allowed to talk about what I do again!");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("So yeah, that's why I'm leaving Apple. Maybe I'll go back someday once I'm done with these other interests. It has been a great time, and I'm leaving an awesome team of friends behind.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("Hopefully this has answered your big questions, and of course, I'm happy to answer any others you might have.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("why/config/environment",["ember"],function(e){var t="why";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("why/app")["default"].create({name:"why",version:"0.0.0+0d0d38cf"});
//# sourceMappingURL=why.map