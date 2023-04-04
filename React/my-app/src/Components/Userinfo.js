import React, { Component } from 'react'

export default class Userinfo extends Component {



  render() {
    let {name,link,imglink} = this.props;
    
    return (
        <>
        <div className="container">
            <div className="card" style={{width: "18"}}>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <a href={link}>Profile Link</a>
                  <img src={imglink} className="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
        </>
    )
  }
}
