import React from 'react'

export default function Homepage() {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' , marginLeft: '70vh' , marginTop: '20vh' }}>
      <div className="container my">
        <h3>Welcome to Homepage</h3>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' , marginLeft: '70vh' }}>
      <div className="container my">
        <h3>Use NavBar to Navigate</h3>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' , marginLeft: '71vh' }}>
      <div className="container my">
        <h3>Select WishList for Q-1</h3>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' , marginLeft: '71vh' }}>
      <div className="container my">
        <h3>Select Github for Q-2</h3>
      </div>
    </div>
    </>
  )
}
