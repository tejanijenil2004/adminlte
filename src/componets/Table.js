import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Table = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Simple Tables</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Simple Tables</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Bordered Table</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 }}>#</th>
                                                    <th>Task</th>
                                                    <th>Progress</th>
                                                    <th style={{ width: 40 }}>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Update software</td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-danger">55%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Clean database</td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-warning" style={{ width: '70%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-warning">70%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Cron job running</td>
                                                    <td>
                                                        <div className="progress progress-xs progress-striped active">
                                                            <div className="progress-bar bg-primary" style={{ width: '30%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-primary">30%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>4.</td>
                                                    <td>Fix and squish bugs</td>
                                                    <td>
                                                        <div className="progress progress-xs progress-striped active">
                                                            <div className="progress-bar bg-success" style={{ width: '90%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-success">90%</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Table