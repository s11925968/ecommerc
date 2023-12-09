import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='mt-5'>
      <footer className="footers" id="hire-me">
        <div className="py-4">
          <div className="row align-items-center pb-4">
            <div className="col-md-4">
              <div className='text-center'>
                <p className="m-0 p-0 text-black">
                  Contact Us<br />
                  Sameh <span className='text-danger'>+972 59-559-763</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {/* Add content for the middle column if needed */}
            </div>
            <div className="col-md-4">
              <p className="m-0 p-0 text-end text-center">
                Made By <br />
                <span className="text-white">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010760257745"
                    alt="link facebook"
                    target="_blank"
                    rel="noopener noreferrer" // Add rel attribute for security
                  >
                    Sameh Sameer Issa
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
