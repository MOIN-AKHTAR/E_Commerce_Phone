import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        const {location:{pathname}}=this.props;
        return (
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 mx-auto text-center text-title mt-5">
                        <h1>404</h1>
                        <h2>Error</h2>
                        <h3>Page Not Found</h3>
                        <h4>The Requested URL <span className="text-danger">{pathname}</span> Was Not Found</h4>
                    </div>
                </div>
            </div>
        )
    }
}
