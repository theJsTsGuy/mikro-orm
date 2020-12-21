(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1086:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(1086)),r={title:"Transactions and Concurrency"},c={unversionedId:"transactions",id:"version-4.1/transactions",isDocsHomePage:!1,title:"Transactions and Concurrency",description:"Starting v3.4, transactions are also supported in MongoDB driver.",source:"@site/versioned_docs/version-4.1/transactions.md",slug:"/transactions",permalink:"/docs/4.1/transactions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/transactions.md",version:"4.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1608573748,sidebar:"version-4.1/docs",previous:{title:"Using EntityRepository instead of EntityManager",permalink:"/docs/4.1/repositories"},next:{title:"Inheritance Mapping",permalink:"/docs/4.1/inheritance-mapping"}},s=[{value:"Transaction Demarcation",id:"transaction-demarcation",children:[{value:"Approach 1: Implicitly",id:"approach-1-implicitly",children:[]},{value:"Approach 2: Explicitly",id:"approach-2-explicitly",children:[]},{value:"Exception Handling",id:"exception-handling",children:[]}]},{value:"Locking Support",id:"locking-support",children:[{value:"Why we need concurrency control?",id:"why-we-need-concurrency-control",children:[]},{value:"Optimistic Locking",id:"optimistic-locking",children:[]},{value:"Pessimistic Locking",id:"pessimistic-locking",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Starting v3.4, transactions are also supported in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/4.1/usage-with-mongo"}),"MongoDB driver"),".")),Object(i.b)("h2",{id:"transaction-demarcation"},"Transaction Demarcation"),Object(i.b)("p",null,"Transaction demarcation is the task of defining your transaction boundaries. Proper\ntransaction demarcation is very important because if not done properly it can negatively\naffect the performance of your application. Many databases and database abstraction\nlayers by default operate in auto-commit mode, which means that every single SQL statement\nis wrapped in a small transaction. Without any explicit transaction demarcation from your\nside, this quickly results in poor performance because transactions are not cheap. "),Object(i.b)("p",null,"For the most part, MikroORM already takes care of proper transaction demarcation for you:\nAll the write operations (INSERT/UPDATE/DELETE) are queued until ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),"\nis invoked which wraps all of these changes in a single transaction."),Object(i.b)("p",null,"However, MikroORM also allows (and encourages) you to take over and control transaction\ndemarcation yourself."),Object(i.b)("p",null,"These are two ways to deal with transactions when using the MikroORM and are now described\nin more detail."),Object(i.b)("h3",{id:"approach-1-implicitly"},"Approach 1: Implicitly"),Object(i.b)("p",null,"The first approach is to use the implicit transaction handling provided by the MikroORM\n",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),". Given the following code snippet, without any explicit transaction\ndemarcation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const user = new User(...);\nuser.name = 'George';\nawait orm.em.persistAndFlush(user);\n")),Object(i.b)("p",null,"Since we do not do any custom transaction demarcation in the above code, ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),"\nwill begin and commit/rollback a transaction. This behavior is made possible by the\naggregation of the DML operations by the MikroORM and is sufficient if all the data\nmanipulation that is part of a unit of work happens through the domain model and thus\nthe ORM."),Object(i.b)("h3",{id:"approach-2-explicitly"},"Approach 2: Explicitly"),Object(i.b)("p",null,"The explicit alternative is to use the transactions API directly to control the boundaries.\nThe code then looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"await orm.em.transactional(em => {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  em.persist(user);\n});\n")),Object(i.b)("p",null,"Or you can use ",Object(i.b)("inlineCode",{parentName:"p"},"begin/commit/rollback")," methods explicitly. Following example is\nequivalent to the previous one:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const em = orm.em.fork(false);\nawait em.begin();\n\ntry {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  em.persist(user);\n  await em.commit(); // will flush before making the actual commit query\n} catch (e) {\n  await em.rollback();\n  throw e;\n}\n")),Object(i.b)("p",null,"Explicit transaction demarcation is required when you want to include custom DBAL operations\nin a unit of work or when you want to make use of some methods of the EntityManager API\nthat require an active transaction. Such methods will throw a ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError")," to inform\nyou of that requirement."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"em.transactional(cb)")," will flush the inner ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," prior to transaction commit."),Object(i.b)("h3",{id:"exception-handling"},"Exception Handling"),Object(i.b)("p",null,"When using implicit transaction demarcation and an exception occurs during\n",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),", the transaction is automatically rolled back."),Object(i.b)("p",null,"When using explicit transaction demarcation and an exception occurs, the transaction should\nbe rolled back immediately as demonstrated in the example above. This can be handled elegantly\nby the control abstractions shown earlier. Note that when catching Exception you should\ngenerally re-throw the exception. If you intend to recover from some exceptions, catch them\nexplicitly in earlier catch blocks (but do not forget to rollback the transaction). All\nother best practices of exception handling apply similarly (i.e. either log or re-throw,\nnot both, etc.)."),Object(i.b)("p",null,"As a result of this procedure, all previously managed or removed instances of the ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nbecome detached. The state of the detached objects will be the state at the point at which the\ntransaction was rolled back. The state of the objects is in no way rolled back and thus the\nobjects are now out of sync with the database. The application can continue to use the detached\nobjects, knowing that their state is potentially no longer accurate."),Object(i.b)("p",null,"If you intend to start another unit of work after an exception has occurred you should do\nthat with a new ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),". Simply use ",Object(i.b)("inlineCode",{parentName:"p"},"em.fork()")," to obtain fresh copy\nwith cleared identity map. "),Object(i.b)("h2",{id:"locking-support"},"Locking Support"),Object(i.b)("h3",{id:"why-we-need-concurrency-control"},"Why we need concurrency control?"),Object(i.b)("p",null,"If transactions are executed serially (one at a time), no transaction concurrency exists.\nHowever, if concurrent transactions with interleaving operations are allowed, you may easily\nrun into one of those problems:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The lost update problem"),Object(i.b)("li",{parentName:"ol"},"The dirty read problem"),Object(i.b)("li",{parentName:"ol"},"The incorrect summary problem")),Object(i.b)("p",null,"To mitigate those problems, MikroORM offers support for Pessimistic and Optimistic locking\nstrategies natively. This allows you to take very fine-grained control over what kind of\nlocking is required for your entities in your application."),Object(i.b)("h3",{id:"optimistic-locking"},"Optimistic Locking"),Object(i.b)("p",null,'Database transactions are fine for concurrency control during a single request. However, a\ndatabase transaction should not span across requests, the so-called "user think time". Therefore\na long-running "business transaction" that spans multiple requests needs to involve several\ndatabase transactions. Thus, database transactions alone can no longer control concurrency\nduring such a long-running business transaction. Concurrency control becomes the partial\nresponsibility of the application itself.'),Object(i.b)("p",null,"MikroORM has integrated support for automatic optimistic locking via a version field. In\nthis approach any entity that should be protected against concurrent modifications during\nlong-running business transactions gets a version field that is either a simple number\n(mapping type: integer) or a timestamp (mapping type: datetime). When changes to such an\nentity are persisted at the end of a long-running conversation the version of the entity\nis compared to the version in the database and if they don't match, a ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError"),"\nis thrown, indicating that the entity has been modified by someone else already."),Object(i.b)("p",null,"You designate a version field in an entity as follows. In this example we'll use an integer."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class User {\n  // ...\n  @Property({ version: true })\n  version!: number;\n  // ...\n}\n")),Object(i.b)("p",null,"Alternatively a datetime type can be used (which maps to a SQL timestamp or datetime):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"export class User {\n  // ...\n  @Property({ version: true })\n  version!: Date;\n  // ...\n}\n")),Object(i.b)("p",null,"Version numbers (not timestamps) should however be preferred as they can not potentially\nconflict in a highly concurrent environment, unlike timestamps where this is a possibility,\ndepending on the resolution of the timestamp on the particular database platform."),Object(i.b)("p",null,"When a version conflict is encountered during ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError"),"\nis thrown and the active transaction rolled back (or marked for rollback). This exception\ncan be caught and handled. Potential responses to a ",Object(i.b)("inlineCode",{parentName:"p"},"ValidationError")," are to present the\nconflict to the user or to refresh or reload objects in a new transaction and then retrying\nthe transaction."),Object(i.b)("p",null,"The time between showing an update form and actually modifying the entity can in the worst\nscenario be as long as your applications session timeout. If changes happen to the entity\nin that time frame you want to know directly when retrieving the entity that you will hit\nan optimistic locking exception:"),Object(i.b)("p",null,"You can always verify the version of an entity during a request either when calling\n",Object(i.b)("inlineCode",{parentName:"p"},"em.findOne()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const theEntityId = 1;\nconst expectedVersion = 184;\n\ntry {\n  const entity = await orm.em.findOne(User, theEntityId, { lockMode: LockMode.OPTIMISTIC, lockVersion: expectedVersion });\n\n  // do the work\n\n  await orm.em.flush();\n} catch (e) {\n  console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),Object(i.b)("p",null,"Or you can use ",Object(i.b)("inlineCode",{parentName:"p"},"em.lock()")," to find out:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const theEntityId = 1;\nconst expectedVersion = 184;\nconst entity = await orm.em.findOne(User, theEntityId);\n\ntry {\n    // assert version\n    await orm.em.lock(entity, LockMode.OPTIMISTIC, expectedVersion);\n} catch (e) {\n    console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),Object(i.b)("h4",{id:"important-implementation-notes"},"Important Implementation Notes"),Object(i.b)("p",null,"You can easily get the optimistic locking workflow wrong if you compare the wrong versions.\nSay you have Alice and Bob editing a hypothetical blog post:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Alice reads the headline of the blog post being "Foo", at optimistic lock version 1 (GET Request)'),Object(i.b)("li",{parentName:"ul"},'Bob reads the headline of the blog post being "Foo", at optimistic lock version 1 (GET Request)'),Object(i.b)("li",{parentName:"ul"},'Bob updates the headline to "Bar", upgrading the optimistic lock version to 2 (POST Request of a Form)'),Object(i.b)("li",{parentName:"ul"},'Alice updates the headline to "Baz", ... (POST Request of a Form)')),Object(i.b)("p",null,"Now at the last stage of this scenario the blog post has to be read again from the database\nbefore Alice's headline can be applied. At this point you will want to check if the blog\npost is still at version 1 (which it is not in this scenario)."),Object(i.b)("p",null,"Using optimistic locking correctly, you ",Object(i.b)("strong",{parentName:"p"},"have")," to add the version as an additional hidden\nfield (or into the session for more safety). Otherwise you cannot verify the version is still\nthe one being originally read from the database when Alice performed her GET request for the\nblog post. If this happens you might see lost updates you wanted to prevent with Optimistic\nLocking."),Object(i.b)("p",null,"See the example code (frontend):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const res = await fetch('api.example.com/book/123');\nconst book = res.json();\nconsole.log(book.version); // prints the current version\n\n// user does some changes and calls the PUT handler\nconst changes = { title: 'new title' };\nawait fetch('api.example.com/book/123', {\n  method: 'PUT',\n  body: {\n    ...changes,\n    version: book.version,\n  },\n});\n")),Object(i.b)("p",null,"And the corresponding API endpoints:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// GET /book/:id\nasync findOne(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id);\n  res.json(book);\n}\n\n// PUT /book/:id\nasync update(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id, { lockMode: LockMode.OPTIMISTIC, lockVersion: req.body.version });\n  wrap(book).assign(req.body);\n  await this.em.flush();\n\n  res.json(book);\n}\n")),Object(i.b)("p",null,"Your frontend app loads an entity from API, the response includes the version property.\nUser makes some changes and fires PUT request back to the API, with version field included\nin the payload. The PUT handler of the API then reads the version and passes it to the\n",Object(i.b)("inlineCode",{parentName:"p"},"em.findOne()")," call."),Object(i.b)("h3",{id:"pessimistic-locking"},"Pessimistic Locking"),Object(i.b)("p",null,"MikroORM supports Pessimistic Locking at the database level. No attempt is being made to implement\npessimistic locking inside MikroORM, rather vendor-specific and ANSI-SQL commands are used to\nacquire row-level locks. Every Entity can be part of a pessimistic lock, there is no special\nmetadata required to use this feature."),Object(i.b)("p",null,'However for Pessimistic Locking to work you have to disable the Auto-Commit Mode of your Database\nand start a transaction around your pessimistic lock use-case using the "Approach 2: Explicit\nTransaction Demarcation" described above. MikroORM will throw an Exception if you attempt to\nacquire an pessimistic lock and no transaction is running.'),Object(i.b)("p",null,"MikroORM currently supports two pessimistic lock modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pessimistic Write (",Object(i.b)("inlineCode",{parentName:"li"},"LockMode.PESSIMISTIC_WRITE"),"), locks the underlying database rows for concurrent Read and Write Operations."),Object(i.b)("li",{parentName:"ul"},"Pessimistic Read (",Object(i.b)("inlineCode",{parentName:"li"},"LockMode.PESSIMISTIC_READ"),"), locks other concurrent requests that attempt to update or lock rows in write mode.")),Object(i.b)("p",null,"You can use pessimistic locks in three different scenarios:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"em.findOne(className, id, { lockMode: LockMode.PESSIMISTIC_WRITE })")," or ",Object(i.b)("inlineCode",{parentName:"li"},"em.findOne(className, id, { lockMode: LockMode.PESSIMISTIC_READ })")),Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"em.lock(entity, LockMode.PESSIMISTIC_WRITE)")," or ",Object(i.b)("inlineCode",{parentName:"li"},"em.lock(entity, LockMode.PESSIMISTIC_READ)")),Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"QueryBuilder.setLockMode(LockMode.PESSIMISTIC_WRITE)")," or ",Object(i.b)("inlineCode",{parentName:"li"},"QueryBuilder.setLockMode(LockMode.PESSIMISTIC_READ)"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/transactions-and-concurrency.html"}),"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0}}]);