(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{UBO4:function(e,t,a){e.exports={posts:"blog-module--posts--3uQTR",post:"blog-module--post--2PWe7",tags:"blog-module--tags--2s6YB",tag:"blog-module--tag--3ryTs"}},pWLX:function(e){e.exports=JSON.parse('{"data":{"allContentfulBlog":{"edges":[{"node":{"title":"Creating my dream tech blog with Gatsby","tags":["gatsby","contentful","disqus","google-analytics","blog","react","graphql"],"hero":{"file":{"url":"//images.ctfassets.net/wjg1udsw901v/6hjsGXkoyitmyiEuBdeTP2/c77e74af9235ac775f18836e2de07cac/gatsby-logo.jpg"},"title":"Gatsby JS"},"slug":"gatsby-tech-blog-starter","datePublished":"July 7th, 2020","bodym":{"childMarkdownRemark":{"timeToRead":7,"excerpt":"I\'m someone who\'s always had my own tech blog, I\'ve gone through two revisions already with the last revision updating out of a 1997 style book. How much I contribute to the blog has always depended on how much friction and effort it takes to write content, manage and upload photos and paste in code…"}}}},{"node":{"title":"Making a Azure poison queue Slack notifier","tags":["azure","poison queue","monitoring","slack","azure-queues"],"hero":{"file":{"url":"//images.ctfassets.net/wjg1udsw901v/UMa2shO53yjhwxv5PF0go/cbf2e4489e801053a91d77a038dcbde9/tobias-tullius-4dKy7d3lkKM-unsplash.jpg"},"title":"Azure Poison Queues Monitoring"},"slug":"azure-poison-queue-notifier","datePublished":"September 22nd, 2017","bodym":{"childMarkdownRemark":{"timeToRead":6,"excerpt":"I\'m currently working at a place were we are using queue triggered Webjobs to handle the sending of messages like email and SMS (using Send Grid and Twilio). Using a queue based system for this is great because it allows us to replay any queue messages, should one of the 3rd party\'s (or our code…"}}}},{"node":{"title":"Fix poor project structure with Convention Based Programming","tags":["convention","unit-test","project-structure"],"hero":{"file":{"url":"//images.ctfassets.net/wjg1udsw901v/27s4Gn7WXRTKhSaaWBU2RN/c057b731733a4d8943365bdeaeb71147/alain-pham-P_qvsF7Yodw-unsplash.jpg"},"title":"Contention Based Programming"},"slug":"convention-based-programming","datePublished":"August 19th, 2017","bodym":{"childMarkdownRemark":{"timeToRead":5,"excerpt":"Having looked at a number of projects in my lifetime, I always come across classes named something like \\"CustomerService\\" with similar variations (usually in the same project calling each other) ranging from \\"CustomerProvider / Helper /Manager / Store / etc...\\". There are two hard things in computer…"}}}},{"node":{"title":"Splitting NUnit Unit Tests With TeamCity To Decrease CI Time","tags":["nunit","unit-tests","TeamCity","continuous-integration","ci"],"hero":{"file":{"url":"//images.ctfassets.net/wjg1udsw901v/3YSq2wLiYV0f3KvoXUXjXL/19aa4d78b6d63287928c6d40f2e36d99/harshal-desai-0hCIrw8dVfE-unsplash.jpg"},"title":"Unit Test Traffic Light"},"slug":"nunit-test-ci-split","datePublished":"March 31st, 2017","bodym":{"childMarkdownRemark":{"timeToRead":2,"excerpt":"This is a quick guide on how to split unit tests into different categories to decrease the time it takes for your CI build to run. The categories can be used to distinguish different areas of your tests to break down the CI Builds (typically used to run different categories in parallel) or to…"}}}}]}}}')},vx99:function(e,t,a){"use strict";a.r(t);var o=a("pWLX"),s=a("q1tI"),n=a.n(s),i=a("Wbzz"),l=a("Bl7J"),r=a("hIod"),d=a("UBO4"),u=a.n(d);t.default=function(){var e=o.data;return n.a.createElement(l.a,null,n.a.createElement(r.a,{title:"Blog"}),n.a.createElement("h1",null,"Blog"),n.a.createElement("ol",{className:u.a.posts},e.allContentfulBlog.edges.map((function(e){return n.a.createElement("li",{className:u.a.post},n.a.createElement(i.a,{to:"/blog/"+e.node.slug},n.a.createElement("h2",null,e.node.title),n.a.createElement("p",null,n.a.createElement("b",null,"Date Published: "),e.node.datePublished," ",n.a.createElement("b",null,"Reading Time:")," ",e.node.bodym.childMarkdownRemark.timeToRead," minutes"),n.a.createElement("img",{src:e.node.hero.file.url,alt:e.node.hero.title}),n.a.createElement("p",null,e.node.bodym.childMarkdownRemark.excerpt),n.a.createElement("ol",{className:u.a.tags},e.node.tags.map((function(e){return n.a.createElement("li",{className:u.a.tag},e)})))))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-d150bcb78c841cb33704.js.map