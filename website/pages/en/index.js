/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props;
		const { baseUrl, docsUrl } = siteConfig;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

		const SplashContainer = (props) => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		);

		const Logo = (props) => (
			<div className="projectLogo">
				<img src={props.img_src} alt="Project Logo" />
			</div>
		);

		const ProjectTitle = (props) => (
			<h2 className="projectTitle">
				{props.title}
				<small>{props.tagline}</small>
			</h2>
		);

		const PromoSection = (props) => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		);

		const Button = (props) => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		);

		//<Button href={docUrl('doc1.html')}>Example Link</Button>

		return (
			<SplashContainer>
				<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
				<div className="inner">
					<ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
					<PromoSection>
						<Button href="" target="_blank">Try It Out</Button>
					</PromoSection>
				</div>
			</SplashContainer>
		);
	}
}

class Content extends React.Component {
	render() {
		return(
			<div className="wrapper homeWrapper" style={{display:"flex",flexDirection:"col"}}>
				<div style={{width:"25%"}}>
					<ul id="page-toc">
						<li id="toc-item-messages"><a href="#messages">Messages</a></li>
						<li id="toc-item-flow-control"><a href="#flow-control">Flow control</a></li>
						<li id="toc-item-error-handling"><a href="#error-handling">Error handling</a></li>
						<li id="toc-item-working-with-data-formats"><a href="#working-with-data-formats">Working with data formats</a></li>
						<li id="toc-item-http-endpoints"><a href="#http-endpoints">HTTP endpoints</a></li>
						<li id="toc-item-http-requests"><a href="#http-requests">HTTP requests</a></li>
						<li id="toc-item-mqtt"><a href="#mqtt">MQTT</a></li>
						<li id="toc-item-odata"><a href="#odata">OData</a></li>
						<li id="toc-item-sequelize"><a href="#sequelize">Sequelize</a></li>
					</ul>
				</div>
				<div style={{width:"75%"}}>
					<div className="docs-content">
						<h1 style={{margin:"0px"}}>Ignite Cookbook</h1>
						<hr style={{width:"100%",border:"1px solid #F46224"}}></hr>
						<p>This is a collection of recipes for how to use Ignite to solve many common programming tasks.</p>
						<p>Each recipe addresses a specific problem and shows by example how it can be solved using the capabilities of the platform.</p>
						<h2 id="table-of-contents">Table of Contents</h2>
						<h3 id="messages">Messages</h3>
						<ul>
							<li><a href="docs/messages/set-message-property-fixed">Set a message property to a fixed value</a></li>
							<li><a href="docs/messages/set-message-property-fixed">Delete a message property</a></li>
							<li><a href="docs/messages/move-property">Move a message property</a></li>
							<li><a href="docs/messages/map-range">Map a property between different numeric ranges</a></li>
						</ul>
						<h3 id="flow-control">Flow control</h3>
						<ul>
							<li><a href="docs/flow control/trigger-on-start">Trigger a flow whenever Ignite starts</a></li>
							<li><a href="docs/flow control/trigger-at-interval">Trigger a flow at regular intervals</a></li>
							<li><a href="docs/flow control/trigger-at-time">Trigger a flow at a specific time</a></li>
							<li><a href="docs/flow control/route-on-property">Route a message based on one of its properties</a></li>
							<li><a href="docs/flow control/route-on-context">Route a message based on a context value</a></li>
							<li><a href="docs/flow control/operate-on-array">Perform an operation on each element in an array</a></li>
							<li><a href="docs/flow control/trigger-timeout">Trigger a flow if a message isn’t received after a defined time</a></li>
							<li><a href="docs/flow control/trigger-placeholder">Send placeholder messages when a stream stops sending</a></li>
							<li><a href="docs/flow control/rate-limit-messages">Slow down messages passing through a flow</a></li>
							<li><a href="docs/flow control/rate-limit-message-stream">Handle messages at a regular rate</a></li>
							<li><a href="docs/flow control/report-by-exception">Drop messages that have not changed value</a></li>
							<li><a href="docs/flow control/join-streams">Create a single message from separate streams of messages</a></li>
						</ul>
						<h3 id="error-handling">Error handling</h3>
						<ul>
							<li><a href="docs/error handling/retry-on-error">Trigger a flow when a node throws an error</a></li>
							<li><a href="docs/error handling/trigger-on-error">Automatically retry an action after an error</a></li>
						</ul>
						<h3 id="working-with-data-formats">Working with data formats</h3>
						<ul>
							<li><a href="docs/data formats/convert-json">Convert to/from JSON</a></li>
							<li><a href="docs/data formats/convert-xml">Convert to/from XML</a></li>
							<li><a href="docs/data formats/convert-yaml">Convert to/from YAML</a></li>
							<li><a href="docs/data formats/generate-csv">Generate CSV output</a></li>
							<li><a href="docs/data formats/parse-csv">Parse CSV input</a></li>
							<li><a href="docs/data formats/simple-get-request">Extracting data from an HTML page</a></li>
							<li><a href="docs/data formats/split-text">Split text into one message per line</a></li>
						</ul>
						<h3 id="http-endpoints">HTTP endpoints</h3>
						<ul>
							<li><a href="docs/http endpoints/create-endpoint">Create an HTTP Endpoint</a></li>
							<li><a href="docs/http endpoints/handle-query-parameters">Handle query parameters passed to an HTTP endpoint</a></li>
							<li><a href="docs/http endpoints/handle-url-parameters">Handle url parameters in an HTTP endpoint</a></li>
							<li><a href="docs/http endpoints/access-request-headers">Access HTTP request headers</a></li>
							<li><a href="docs/http endpoints/serve-json-file">Serve JSON content</a></li>
							<li><a href="docs/http endpoints/serve-local-file">Serve a local file</a></li>
							<li><a href="docs/http endpoints/post-raw-data">Post raw data to a flow</a></li>
							<li><a href="docs/http endpoints/post-form-data">Post form data to a flow</a></li>
							<li><a href="docs/http endpoints/post-json-data">Post JSON data to a flow</a></li>
							<li><a href="#docs/http endpoints/work-with-cookies">Work with cookies</a></li>
						</ul>
						<h3 id="http-requests">HTTP requests</h3>
						<ul>
							<li><a href="docs/http requests/get-request">Simple GET request</a></li>
							<li><a href="docs/http requests/set-request-url">Set the url of a request</a></li>
							<li><a href="docs/http requests/set-url-using-template">Set the url of a request using a template</a></li>
							<li><a href="docs/http requests/set-query-string-params">Set query string parameters</a></li>
							<li><a href="docs/http requests/get-parsed-JSON">Get a parsed JSON response</a></li>
							<li><a href="docs/http requests/get-binary-response">Get a binary response</a></li>
							<li><a href="docs/http requests/set-request-headers">Set a request header</a></li>
						</ul>
						<h3 id="mqtt">MQTT</h3>
						<ul>
							<li><a href="docs/mqtt/connect-to-broker">Connect to an MQTT broker</a></li>
							<li><a href="docs/mqtt/connect-to-broker">Publish messages to a topic</a></li>
							<li><a href="docs/mqtt/set-topic">Set the topic of a published message</a></li>
							<li><a href="docs/mqtt/publish-retained-message">Publish a retained message to a topic</a></li>
							<li><a href="docs/mqtt/subscribe">Subscribe to a topic</a></li>
							<li><a href="docs/mqtt/parsed-json">Receive a parsed JSON message</a></li>
						</ul>
						<h3 id="odata">OData</h3>
						<ul>
							<li><a href="docs/odata/define-metadata-model">Define a Metadata Model</a></li>
							<li><a href="docs/odata/convert-req-to-query">Convert Request to Query</a></li>
							<li><a href="docs/odata/read-only-odata-service">Read Only OData Service</a></li>
							<li><a href="docs/odata/create-an-odata-service">Create an OData Service</a></li>
						</ul>
						<h3 id="sequelize">Sequelize</h3>
						<ul>
							<li><a href="docs/sequelize/execute-a-query">Execute a Query</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props;
		const { baseUrl } = siteConfig;

		const Block = (props) => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align="center"
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Feature Callout</h2>
				<MarkdownBlock>These are features of this project</MarkdownBlock>
			</div>
		);

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content:
							'To make your landing page more attractive, use illustrations! Check out ' +
							'[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
							'The illustrations you see on this page are from unDraw.',
						image: `${baseUrl}img/undraw_code_review.svg`,
						imageAlign: 'left',
						title: 'Wonderful SVG Illustrations',
					},
				]}
			</Block>
		);

		const Description = () => (
			<Block background="dark">
				{[
					{
						content:
							'This is another description of how this project is useful',
						image: `${baseUrl}img/undraw_note_list.svg`,
						imageAlign: 'right',
						title: 'Description',
					},
				]}
			</Block>
		);

		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content:
							'Each new Docusaurus project has **randomly-generated** theme colors.',
						image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
						imageAlign: 'right',
						title: 'Randomly Generated Theme Colors',
					},
				]}
			</Block>
		);

		const Features = () => (
			<Block layout="fourColumn">
				{[
					{
						content: 'This is the content of my feature',
						image: `${baseUrl}img/undraw_react.svg`,
						imageAlign: 'top',
						title: 'Feature One',
					},
					{
						content: 'The content of my second feature',
						image: `${baseUrl}img/undraw_operating_system.svg`,
						imageAlign: 'top',
						title: 'Feature Two',
					},
				]}
			</Block>
		);

		const Showcase = () => {
			if ((siteConfig.users || []).length === 0) {
				return null;
			}

			const showcase = siteConfig.users
				.filter((user) => user.pinned)
				.map((user) => (
					<a href={user.infoLink} key={user.infoLink}>
						<img src={user.image} alt={user.caption} title={user.caption} />
					</a>
				));

			const pageUrl = (page) =>
				baseUrl + (language ? `${language}/` : '') + page;

			return (
				<div className="productShowcaseSection paddingBottom">
					<h2>Who is Using This?</h2>
					<p>This project is used by all these people</p>
					<div className="logos">{showcase}</div>
					<div className="more-users">
						<a className="button" href={pageUrl('users.html')}>
							More {siteConfig.title} Users
            </a>
					</div>
				</div>
			);
		};

		return (
			<div>
				{/* <HomeSplash siteConfig={siteConfig} language={language} /> */}
				<div className="mainContainer">
					{/* <Features /> */}
					{/* <FeatureCallout /> */}
					{/* <LearnHow /> */}
					{/* <TryOut /> */}
					{/* <Description /> */}
					{/* <Showcase /> */}
					<Content />
				</div>
			</div>
		);
	}
}

module.exports = Index;
