import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App1 = () => {
    return (
        <React.Fragment>
            <h1 className="text-center text-danger text-capitalize my-5">
                Welcome to my WebSite
            </h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <img
                                src="https://picsum.photos/200"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <img
                                src="https://picsum.photos/201"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <img
                                src="https://picsum.photos/202"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default App1;
