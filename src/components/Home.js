import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 mt-5">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">个人信息</p>

              <Link className="btn btn-primary" to="/info">个人信息</Link>
            </div>
          </div>

        </div>
        <div className="col-sm-6 col-md-6 mt-5">

        <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">预约查询</p>
              <Link href="#" className="btn btn-primary" to="/">预约查询</Link>
            </div>
          </div>

    </div>
        <div className="col-sm-6 col-md-6 mt-5">

        <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">班车预约</p>
              <Link href="#" className="btn btn-primary" to="/">班车预约</Link>
            </div>
          </div>
    </div>
        <div className="col-sm-6 col-md-6 mt-5">

        <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">培训预约</p>
              <Link href="#" className="btn btn-primary" to="/">培训预约</Link>
            </div>
          </div>

    </div>
      </div>
    </div>
  )
}
