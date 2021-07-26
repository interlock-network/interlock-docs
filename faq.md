---
label: FAQ
icon: question
---

# FAQ

## Is this a new blockchain?

No, this is a distributed application built on top of an existing blockchain.


## What blockchain are you built on?

We are building our smart-contracts on top of Solana, but we are minting out tokens on Ethereum, and we bridge the two worlds using Wormhole.


## Why did you choose Solana/Ethereum?

The Solana platform has addressed many of the outstanding problems found in similar popular blockchains like Ethereum (i.e. transaction-speed energy-efficiency infinite-smart-contract-loops etc). Our idea is not feasible without fast and cheap transactions and that is exactly what Solana provides. We chose to mint out tokens on Ethereum because that chain has a large ecosystem and we would like to be compatible with it. To that end we use Wormhole to allow people to transfer their INTER tokens between chains.


## What problem are you trying to solve?

We are trying to democratize and decentralize *trust* on the internet.

We believe that the new paradigm for the internet/web is hyper-decentralization. The web is decentralizing the media and the news and the publishing industry. The web is decentralizing geography &mdash;  two people a million miles away can interact with each other over video-chat or VR. The web is decentralizing finance &mdash;  even stuffy old banks want to get in on the DeFi bandwagon. The web is decentralizing the nation-state &mdash;  people often times have more in common with globally dispersed like-minded individuals than their fellow neighbors and citizens. The web is decentralizing employment &mdash;  the number of people working in the gig-economy and the creator-economy is increasing.

We believe that this accelerating trend of hyper-decentralization will also decentralize the parts of the web that have to do with *trust*. Right now, the intermediary institutions (i.e. Facebook, Twitter, Reddit, HN, and so on) that ascribe credibility and trustworthiness do so in ways that are *opaque*. We do not know *why* certain tweets appear in our feeds and others do not &mdash;  and even if we did, there is nothing we can do *customize* our feed(aside from following/unfollowing various accounts). We can see a Reddit user's karma-score as well as the score of their individual posts &mdash;  which is slightly less opaque than Hacker News's ranking system &mdash;  but we cannot see *who* up-voted or down-voted that user's posts. In fact, we have no way of knowing if that karma score has not been accidentally inflated by a random bit-flip on Reddit's servers &mdash;  let alone if it has been manipulated by an insider or inflated by a voting ring. Similar logic applies to Twitter and Hacker News. Hacker News has surprisingly insightful discussions, in spite of its concealment of vote-metadata for posts, but it is still suseptible to insider manipulation and voting rings.


## Why should I care about the problem you are trying to solve?

The gatekeepers of trust on the internet are single points of failure that, unfortunately, seek to profit from your activities on the internet and from your personal data. Their ranking algorithms and aggregation algorithms are opaque and the user never knows if another user's content has been recommended because it is good or because it will help the gatekeepers sell more advertisements or because the user paid the gatekeeper to propagate their message.


## What is the difference between you and MSFT ION?

Microsoft'S ION project is a decentralized P2P identity network &mdash;  it does not yet have features pertaining to *trust*.


## Are you a social network?

We are not a social network. We are a network(Interlock Network) that allows anonymous users to share and vote for each other in a way that is censorship free. We make client-side tools that allow users to use this **public** and **transparent** historical data to filter and rank other user accounts. We also integrate the Interlock Network with various security in-house security tools that can passively or actively protect users from threats on the Web.


## How did you implement this trust-network?

Please see our technical-whitepaper and Github for implementation details.


## Are you a security company?

Interlock is not a security company &mdash;  we are a web3 company founded by people that have years of experience in the security-space. You could think of us as a *next generation* security company, or a security company for the web3 era.


## How does your network secure its users?

Aside from the various user-to-user trust-building aspects of our blockchain powered network, we also provide an extension that uses advanced heuristics to protect users from phishing attacks. As far as we know, we are the only providers of such an extension that has been proven to work in the industry over the last six years or so.


## What kind of anonymity do you offer?

The interlock network is built around anonymouse accounts &mdash;  we never require you to identify yourself with a phone number or an email address. You can have as many accounts as you want, and if **you** want to link any of those accounts to your real-world identity, that is up to you.


## How does your network do scoring/ranking?

Whereas most trust-networks &mdash;  or what passes for a trust-network anyway &mdash;  use secret algorithms for ranking and recommendation of accounts and content, we actually allow users to do *their own* ranking client-side. We call this edge-based ranking and filtering. We do provide a few customizable tools for doing this, but they are completely open source and optional. We encourage our community to build their own edge-based tools if they find ours wanting or imperfect.


## Why is this edge-based scoring preferrable to the centralized models used by twitter, facebook, google, reddit, and hacker-news?

Primarily because they are not transparent and because these corporate entities are constrained by their shareholders to bias their scoring algorithms in a way that prioritizes their respective bottom-lines &mdash;  this results in hostile and insulting user experience design that seeks to monetize the users instead of enriching the lives of users. Our method puts the user in total control.


## Isn'T it faster to do aggregate a score into a single integer -- why don't you do that?

Well, yes it is faster, but this kind of scoring is lossy and quite opaque. Who voted/liked for whom and in what context is very valuable information that is lost &mdash;  or at least hidden &mdash;  when we reduce a score to a single integer. Presenting the user with a history of fine-grained interactions empowers the user to derive or compute scores based on their own preferrances and on their own weighting of accounts &mdash;  if a curious user were so inclined, they could *explore the score-space* by tuning various knobs and weighting factors.


## It sounds like the edge-based method mean that scoring is not same from user-to-user -- I thought the point of a score/rating is to provide a single, authoritative, and objective source of truth about how good something is?

Objectivity is important when dealing with things that are unambiguously objective. However, trustworthiness, credibility, and preferrances are to a very large degree subjective things. It makes sense that users should be able to customize scoring in a way that reflects their personal subjective assumptions about humanity. While this ability can be used to create a filter-bubble, we already have social networks creating filter-bubbles on their own &mdash;  except they do it without transparency and without accountability. At least with Interlock the user is responsible for their own bubble. And besides, this same mechanism can be used to break out of a filter-bubble &mdash;  just change some settings.


## What interactions are possible on the network?

We allow the following actions.
* upvoting accounts
* downvoting accounts
* vouching for accounts
* favor-exchange between accounts




## What happens when a user upvotes?

When a user upvotes another user, the recipient of an upvote receives a fraction(two-thirds) of the upvotes &mdash;  which they can then use to in turn upvote/downvote other users &mdash;  and the giver of the upvotes receives an equivalent number of vote-receipts. These receipts can be redeemed &mdash;  at various &mdash;  times for Inter Tokens. Each upvote is recorded in the transaction-log-database and can be used a signal to amplify the recipient's score.


## What happens when a user downvotes?

When a user downvotes another user, the recipient of a downvote does **note** lose any votes, but the downvoter still gets a redeemable vote-receipt. Each downvote is recorded in the transaction-log-database and can be used a signal to dampen the recipient's score.


## What happens when a user vouches?

When a user vouches for another user, the vouchee gets a temporary boost to their ranking, and the voucher can either gain or lose Inter Tokens based on whether the vouchee receives upvotes or downvotes. It is basically a way to give someone exposure but at a personal risk.


## What happens when a user exchanges a favor?

One can use the Interlock Network to implement a *favor exchange*. Think of it this way &mdash;  you want someone to do you a favor (i.e. you want them to farm potato-cactuses on Runescape) so you give them an NFT Inter Token and they do you a solid favor. Now that the favor is complete, the favor-doer has an NFT token that is directly linked to you that indicates that *you* owe *them* a favor. Once you do them a favor, they will give you a corresponding NFT token that will cancel out your original token. The cool thing about this, is that it encourages the development of long-lived bilateral relationships between accounts and people &mdash;  whereas the exchange of money generally encourages us to treat other human beings as vending-machines that do things for us because we we inserted money into them.


## How do you verify that exchanges occurred as agreed?

Clearly it is possible for the two users to never reach an agreement on whether a favor was ever actually completed, in which case the NFT can be reclaimed by the issuer &mdash;  whether or not this is true is not nearly as important as it being permanently recorded in the transaction-log-database, and the page-rank algorithm can do its magic.


## What interfaces do you offer for accessing the network?

We try to make the network as accessible as possible. Initially we plan to offer a Web Interface and a Browser Extension. These two interfaces are not interchangeable and serve different purposes.


## How does the Interlock Extension differ from the Interlock Web Interface?

The web-interface lets you access and query the data collected from the interlock network &mdash;  it is basically a web interface to a data-base. The interlock-extension actively protects you from phishing attacks and block advertisements &mdash;  you can also use it to interact with the interlock-network.


## How do people earn money on your network?

Simply put, people earn money by using their votes to upvote or downvote other accounts. Each time they do this they get vote-receipts that are stored in their blockchain account. Interlock will periodically buy those receipts back with our Inter currency minted on the Ethereum blockchain. The votes get airdropped to accounts periodically and users can also purchase more votes if they are so inclined. When people get upvoted they receive a fraction of those votes in their account. So if a user gets a million upvotes, they would then have to upvote/downvote other users in order to convert their own received upvotes into receipts and then into cash.

Users can also earn money via vouching.


## Why is this money-making-method so complicated?

We want to reward people for being pro-social but we also want to discourage people from hoarding votes. So we had to create this complex method which creates a kind of feedback loop, because people need to vote in order to turn those votes into cash. This method also rewards people for creating and running popular accounts. We also had to add fractional-vote-transfer so that users cannot create voting-rings that mint infinite money.


## This sounds cool and i would like to be involved -- are you accepting any kind of investment?

We plan on pursuing a variety of fund-raising strategies. For starters we plan on doing a DAICO.


## This sounds cool and i would like to be involved -- are you accepting any kind of coding contributions?

We are fully open source and will happily accept coding contributions. We are considering financing bug-bounty programs using our Inter Token.


## This sounds cool and i would like to be involved -- are you accepting any kind of writing contributions?

We would appreciate any kind of documentation or evangelism in the form of writing. We would happily compensate you using the Inter Token.


## This sounds cool and i would like to be involved -- is there a place where I can ask questions and particpate discussions?

We have a discord channel, a twitter, and a github. We may add more venues for discussions in the future.


## Is this project open source?

Yes this project is open source.


## Does this project have a specific governance model?

Regarding technical contribution we will follow an RFD/RFC model where project design documents are proposed and discussed on various community channels (i.e. github, discord, and others). If the project and community get large enough we will likely adopt a governance model akin to Rust's. We diverge from the traditional RFC process in that we (a) adopt proposals by voting via smart-contract and (b) developers can show their support and affinity for each-other and their ideas by using the upvote/downvote mechanism that is already in place. We do not require separete personal and developer accounts, but we also do not require the same account. Keeping with the theme of privacy and anonymity a developer can have as many accounts as they want and the project/community would have no way of knowing &mdash;  which is *already* the situation in the real world (i.e. one can make as many github accounts as they want). Voting is consensus-driven &mdash;  proposals require unanimous approval. Unanimous consensus is meant to eliminate the competitive nature of voting &mdash;  all disagreements should be resolved at the *discussion* phase before a proposal comes to a vote. We believe that there are very few *true* and *unresolvable* contradictions in engineering. Proposals can be resubmitted for voting.


## I am already invested in existing social networks, how do I get involved in your network without losing the friends and connections I have made?

Just as you can link your blog to your twitter stream or YouTube channel or Patreon, you can also refer to you Interlock Network account on any other social media or vice-versa. You can even sign your contents using a cryptographic key as a way to prove that the account belongs to you and vice-versa.

