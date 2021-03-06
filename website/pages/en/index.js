const React = require('react');

class Content extends React.Component {
    render() {
        return (
            <div className="wrapper homeWrapper" style={{ display: "flex", flexDirection: "col" }}>
                <div style={{ width: "20%" }}>
                    <div className="sidebar-topics-heading">Topics</div>
                    <div className="sidebar-topic-container">
                        <a className="sidebar-topic" href="#how-to-deploy-in-azure">Deploy to Azure</a>
                        <a className="sidebar-topic" href="#how-to-deploy-in-heroku">Deploy to Heroku</a>
                        <a className="sidebar-topic" href="#messages">Messages</a>
                        <a className="sidebar-topic" href="#flow-control">Flow Control</a>
                        <a className="sidebar-topic" href="#error-handling">Error Handling</a>
                        <a className="sidebar-topic" href="#working-with-data-formats">Data Formats</a>
                        <a className="sidebar-topic" href="#http-endpoints">HTTP Endpoints</a>
                        <a className="sidebar-topic" href="#http-requests">HTTP Requests</a>
                        <a className="sidebar-topic" href="#mqtt">MQTT</a>
                        <a className="sidebar-topic" href="#odata">OData</a>
                        <a className="sidebar-topic" href="#sequelize">Sequelize</a>
                        <a className="sidebar-topic" href="#auth">Auth</a>
                        <a className="sidebar-topic" href="#jsonata">JSONata</a>
                        <a className="sidebar-topic" href="#breakpoint">Breakpoint</a>
                        <a className="sidebar-topic" href="#openAPI">Open API</a>
                        <a className="sidebar-topic" href="#designer">Designer</a>
                        <a className="sidebar-topic" href="#monitor">Monitor</a>
                        <a className="sidebar-topic" href="#release-management">Release Management</a>
                    </div>
                </div>
                <div style={{ width: "80%" }}>
                    <div className="docs-content">
                        <div>
                            <h1 style={{ margin: "0px" }}>Ignite Cookbook</h1>
                            <hr style={{ width: "100%", border: "1px solid #F46224" }}></hr>
                            <p>This is a collection of recipes for how to use Ignite to solve many common programming tasks.</p>
                            <p>Each recipe addresses a specific problem and shows by example how it can be solved using the capabilities of the platform.</p>
                            <h2 id="table-of-contents">Table of Contents</h2>
                        </div>
                        <div className="category-container">
                            <h3 id="how-to-deploy-in-azure" className="category-title">Deploy to Azure</h3>
                            <a className="category-element" href="docs/deploy-to-azure/introduction">Introduction</a>
                            <a className="category-element" href="docs/deploy-to-azure/getting-started">Getting Started</a>
                            <a className="category-element" href="docs/deploy-to-azure/how-to-deploy-in-azure">How to Deploy</a>
                            <a className="category-element" href="docs/deploy-to-azure/manage-application">Manage Application</a>
                            <a className="category-element" href="docs/deploy-to-azure/cicd">CI/CD</a>
                        </div>
                        <div className="category-container">
                            <h3 id="how-to-deploy-in-heroku" className="category-title">Deploy to Heroku</h3>
                            <a className="category-element" href="docs/deploy-to-heroku/introduction">Introduction</a>
                            <a className="category-element" href="docs/deploy-to-heroku/getting-started">Getting Started</a>
                            <a className="category-element" href="docs/deploy-to-heroku/how-to-deploy-in-heroku">How to Deploy</a>
                            <a className="category-element" href="docs/deploy-to-heroku/manage-application">Manage Application</a>
                            <a className="category-element" href="docs/deploy-to-heroku/cicd">CI/CD</a>
                        </div>
                        <div className="category-container">
                            <h3 id="messages" className="category-title">Messages</h3>
                            <a className="category-element" href="docs/messages/set-message-property-fixed">Set a message property to a fixed value</a>
                            <a className="category-element" href="docs/messages/set-message-property-fixed">Delete a message property</a>
                            <a className="category-element" href="docs/messages/move-property">Move a message property</a>
                            <a className="category-element" href="docs/messages/map-range">Map a property between different numeric ranges</a>
                        </div>
                        <div className="category-container">
                            <h3 id="flow-control" className="category-title">Flow Control</h3>
                            <a className="category-element" href="docs/flow-control/trigger-on-start">Trigger a flow whenever Ignite starts</a>
                            <a className="category-element" href="docs/flow-control/trigger-at-interval">Trigger a flow at regular intervals</a>
                            <a className="category-element" href="docs/flow-control/trigger-at-time">Trigger a flow at a specific time</a>
                            <a className="category-element" href="docs/flow-control/route-on-property">Route a message based on one of its properties</a>
                            <a className="category-element" href="docs/flow-control/route-on-context">Route a message based on a context value</a>
                            <a className="category-element" href="docs/flow-control/operate-on-array">Perform an operation on each element in an array</a>
                            <a className="category-element" href="docs/flow-control/trigger-timeout">Trigger a flow if a message isn’t received after a defined time</a>
                            <a className="category-element" href="docs/flow-control/trigger-placeholder">Send placeholder messages when a stream stops sending</a>
                            <a className="category-element" href="docs/flow-control/rate-limit-messages">Slow down messages passing through a flow</a>
                            <a className="category-element" href="docs/flow-control/rate-limit-message-stream">Handle messages at a regular rate</a>
                            <a className="category-element" href="docs/flow-control/report-by-exception">Drop messages that have not changed value</a>
                            <a className="category-element" href="docs/flow-control/join-streams">Create a single message from separate streams of messages</a>
                        </div>
                        <div className="category-container">
                            <h3 id="error-handling" className="category-title">Error Handling</h3>
                            <a className="category-element" href="docs/error-handling/retry-on-error">Trigger a flow when a node throws an error</a>
                            <a className="category-element" href="docs/error-handling/trigger-on-error">Automatically retry an action after an error</a>
                        </div>
                        <div className="category-container">
                            <h3 id="working-with-data-formats" className="category-title">Working with Data Dormats</h3>
                            <a className="category-element" href="docs/data-formats/convert-json">Convert to/from JSON</a>
                            <a className="category-element" href="docs/data-formats/convert-xml">Convert to/from XML</a>
                            <a className="category-element" href="docs/data-formats/convert-yaml">Convert to/from YAML</a>
                            <a className="category-element" href="docs/data-formats/generate-csv">Generate CSV output</a>
                            <a className="category-element" href="docs/data-formats/parse-csv">Parse CSV input</a>
                            <a className="category-element" href="docs/data-formats/simple-get-request">Extracting data from an HTML page</a>
                            <a className="category-element" href="docs/data-formats/split-text">Split text into one message per line</a>
                        </div>
                        <div className="category-container">
                            <h3 id="http-endpoints" className="category-title">HTTP Endpoints</h3>
                            <a className="category-element" href="docs/http-endpoints/create-endpoint">Create an HTTP Endpoint</a>
                            <a className="category-element" href="docs/http-endpoints/handle-query-parameters">Handle query parameters passed to an HTTP endpoint</a>
                            <a className="category-element" href="docs/http-endpoints/handle-url-parameters">Handle url parameters in an HTTP endpoint</a>
                            <a className="category-element" href="docs/http-endpoints/access-request-headers">Access HTTP request headers</a>
                            <a className="category-element" href="docs/http-endpoints/serve-json-file">Serve JSON content</a>
                            <a className="category-element" href="docs/http-endpoints/serve-local-file">Serve a local file</a>
                            <a className="category-element" href="docs/http-endpoints/post-raw-data">Post raw data to a flow</a>
                            <a className="category-element" href="docs/http-endpoints/post-form-data">Post form data to a flow</a>
                            <a className="category-element" href="docs/http-endpoints/post-json-data">Post JSON data to a flow</a>
                            <a className="category-element" href="docs/http-endpoints/work-with-cookies">Work with cookies</a>
                        </div>
                        <div className="category-container">
                            <h3 id="http-requests" className="category-title">HTTP Requests</h3>
                            <a className="category-element" href="docs/http-requests/get-request">Simple GET request</a>
                            <a className="category-element" href="docs/http-requests/set-request-url">Set the url of a request</a>
                            <a className="category-element" href="docs/http-requests/set-url-using-template">Set the url of a request using a template</a>
                            <a className="category-element" href="docs/http-requests/set-query-string-params">Set query string parameters</a>
                            <a className="category-element" href="docs/http-requests/get-parsed-JSON">Get a parsed JSON response</a>
                            <a className="category-element" href="docs/http-requests/get-binary-response">Get a binary response</a>
                            <a className="category-element" href="docs/http-requests/set-request-headers">Set a request header</a>
                        </div>
                        <div className="category-container">
                            <h3 id="mqtt" className="category-title">MQTT</h3>
                            <a className="category-element" href="docs/mqtt/connect-to-broker">Connect to an MQTT broker</a>
                            <a className="category-element" href="docs/mqtt/publish-message">Publish messages to a topic</a>
                            <a className="category-element" href="docs/mqtt/set-topic">Set the topic of a published message</a>
                            <a className="category-element" href="docs/mqtt/publish-retained-message">Publish a retained message to a topic</a>
                            <a className="category-element" href="docs/mqtt/subscribe">Subscribe to a topic</a>
                            <a className="category-element" href="docs/mqtt/parsed-json">Receive a parsed JSON message</a>
                        </div>
                        <div className="category-container">
                            <h3 id="odata" className="category-title">OData</h3>
                            <a className="category-element" href="docs/odata/define-metadata-model">Define a Metadata Model</a>
                            <a className="category-element" href="docs/odata/metadata-model-using-edm">Define Metadata Model using EDM</a>
                            <a className="category-element" href="docs/odata/convert-req-to-query">Convert Request to Query</a>
                            <a className="category-element" href="docs/odata/read-only-odata-service">Read Only OData Service</a>
                            <a className="category-element" href="docs/odata/create-an-odata-service">Create an OData Service</a>
                        </div>
                        <div className="category-container">
                            <h3 id="sequelize" className="category-title">Sequelize</h3>
                            <a className="category-element" href="docs/sequelize/execute-a-query">Execute a Query</a>
                        </div>
                        <div className="category-container">
                            <h3 id="auth" className="category-title">Auth</h3>
                            <a className="category-element" href="docs/auth/basic-auth">Basic Authentication</a>
                            <a className="category-element" href="docs/auth/generate-jwt">Generate JWT</a>
                            <a className="category-element" href="docs/auth/verify-jwt">Verify JWT</a>
                        </div>
                        <div className="category-container">
                            <h3 id="jsonata" className="category-title">JSONata</h3>
                            <a className="category-element" href="docs/jsonata/jsonata-node">JSONata Node</a>
                            <a className="category-element" href="docs/jsonata/jsonata-explorer">JSONata Explorer</a>
                        </div>
                        <div className="category-container">
                            <h3 id="breakpoint" className="category-title">Breakpoint</h3>
                            <a className="category-element" href="docs/breakpoint/breakpoint-introduction">Introduction</a>
                            <a className="category-element" href="docs/breakpoint/breakpoint-how-to-use">How to use</a>
                        </div>
                        <div className="category-container">
                            <h3 id="openAPI" className="category-title">Open API</h3>
                            <a className="category-element" href="docs/openAPI/openAPI-introduction">Introduction</a>
                            <a className="category-element" href="docs/openAPI/openAPI-router">OpenAPI Router</a>
                            <a className="category-element" href="docs/openAPI/openAPI-client">OpenAPI Client</a>
                        </div>
                        <div className="category-container">
                            <h3 id="designer" className="category-title">Designer</h3>
                            <a className="category-element" href="docs/designer/designer">Designer</a>
                        </div>
                        <div className="category-container">
                            <h3 id="monitor" className="category-title">Monitor</h3>
                            <a className="category-element" href="docs/monitor/monitor-introduction">Introduction</a>
                            <a className="category-element" href="docs/monitor/monitor-how-to-use">How to use</a>
                        </div>
                        <div className="category-container">
                            <h3 id="release-management" className="category-title">Release Management</h3>
                            <a className="category-element" href="docs/release-management/upload-download-release-management">Upload Download Release Packages</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="mainContainer">
                    <Content />
                </div>
            </div>
        );
    }
}

module.exports = Index;
