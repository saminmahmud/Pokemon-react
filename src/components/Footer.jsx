import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-3 fixed bottom-0 left-0 w-full">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Samin Mahmud</p>
        </aside>
    </footer>
  )
}

export default Footer
