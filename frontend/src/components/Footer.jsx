import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='banner'>
        <div className='title'>
          <h1>KING'S</h1>
          <p>Events and Weddings</p>
        </div>
        <div className='tag'>
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='E-mail' />
            <button>Subscribe</button>
          </div>
          <p>Sign up with Your email Address to receive news and updats!</p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
