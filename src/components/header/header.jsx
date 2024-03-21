import React, { Fragment, useState } from 'react';
import './header.css';
import Modal from '../modal/modal';
import axios from 'axios';
import qs from 'qs';


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    event.preventDefault();
    try {
      console.log('Attempting login...');
      const response = await axios.post('http://localhost:8080/user/login', {
        email: email,
        password: password
      },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      const tokenData =response.data.token
      console.log('Token Data:', tokenData);
      console.log('Login Succesful', response.data);
      document.cookie =`Authorise=${tokenData}; max-age=3600; path=/`;
    } catch (error) {
      console.error('Error during login:', error);
      console.error('Login failed', error.response.data);
    }
  };

  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setUseDob] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [otpkey, setOtpkey] = useState("");
  const [otp, setOtp] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async () => {
    event.preventDefault();
    console.log('username', userName)
    try {
      console.log('Signup..')
      const response = await axios.post('http://localhost:8080/user/signup', {
        username: userName,
        phone: phone,
        email: email,
        dob: dob,
        password: password,
        cpassword: cpassword,
      },

        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      const otpkey = response.data.key;
      setOtpkey(otpkey);
      setShowModal2(false);
      setShowModal3(true);
      console.log('Verify otp', response.data)
      console.log('username', userName)
    } catch (error) {
      console.error('Error during Signup:', error);
      console.error('Signup failed', error.response.data);
    }
  }
  const handleOtp = async () => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/otp', {
        otp: otp,
        key: otpkey,
      },

        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      console.log('Message', response.data)
      setSuccessMessage("Login SuccessFull")
      setShowModal3(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error during Verification', error);
      console.error('Otp validation failed', error.response.error)
    }
  }
  const handleLoginButton = () => {
    setShowModal(true); // Show the login modal
    setShowSuccessModal(false);
    // Hide the success modal
  };
  const handleSignUpButton = () => {
    setShowModal2(true); // Show the login modal
    setShowModal(false);
    // Hide the success modal
  };

  return (
    <Fragment>
      <div>
        <header className="bg-black shadow-lg h-16 flex justify-between items-center fixed top-0 w-full z-50 ">
          <div className="flex items-center">
            <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
              <img className="" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" />
            </a>
            <nav className="header-links contents font-semibold text-base lg:text-lg hidden md:block">
              <ul className="flex items-center ml-4 xl:ml-8 mr-auto text-white">
                <li className="p-3 xl:p-6 active">
                  <a href="/">
                    <span>Live</span>
                  </a>
                </li>
                <li className="p-3 xl:p-6">
                  <a href="/">
                    <span>Videos</span>
                  </a>
                </li>
                <li className="p-3 xl:p-6">
                  <a href="/">
                    <span>Clips</span>
                  </a>
                </li>
                <li className="p-3 xl:p-6">
                  <a href="/">
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center ">
            <input type="text" placeholder="Search..." className="py-2 px-4 w-full border rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 hidden lg:block" />
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </button>
          </div>
          <div className="relative flex">

            <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded mr-5 hidden md:block" onClick={() =>
              setShowModal(true)}>Login</button>
            <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded mr-5 hidden md:block" onClick={() =>
              setShowModal2(true)}
            >SignUp</button>
            <button className="flex items-center justify-center mr-5 md:hidden" onClick={toggleDropdown}>
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-1">
                  <li><a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Live</a></li>
                  <li><a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Videos</a></li>
                  <li><a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Clips</a></li>
                  <li><a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a></li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
      <Modal isVisible={showModal} onClose={() =>
        setShowModal(false)}>
        <div>
          <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
            LOGIN
          </div>
          <div
            className="w-full bg-gray-200 my-3" style={{ height: '1px' }}
          ></div>
          <form>
            <div className="flex flex-col gap-4 px-0 py-4">
              <div>
                <label className="text-gray-700">Email address</label>

                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-700">Password</label>

                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-row gap-2">
                <button
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                  type="submit"
                  onClick={handleLogin}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg> Login
                </button>
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1"
                  onClick={handleSignUpButton}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg> Sign-up
                </button>
              </div>
              <div className="my-2 flex flex-row justify-center">
                <span className="absolute bg-white px-4">or</span>
                <div
                  className="w-full bg-gray-200 mt-3" style={{ height: '1px' }}
                ></div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <button className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                  Sign-in with Google
                </button>

              </div>
              <div className="w-full flex flex-row justify-end">
                <a href="#">Forgot password</a>
              </div>
            </div>
          </form>


        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={() =>
        setShowModal2(false)}>
        <div className="max-w-xs mx-auto p-2">
          <div className="text-center font-bold text-xl text-gray-600">
            SIGN UP
          </div>
          <div className="w-full bg-gray-200 my-2" style={{ height: '1px' }}></div>
          <form>
            <div className="flex flex-col gap-2 px-0 py-2">
              <div>
                <label className="text-gray-600 text-sm">UserName</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm">Date of Birth</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(e) => setUseDob(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm">Email address</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm">Phone</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  placeholder="Phone"
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm">Password</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm">Confirm Password</label>
                <input
                  className="py-1 pl-8 border border-gray-200 w-full text-sm"
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-sm p-1" onClick={handleSignup}>
                  Sign-up
                </button>
              </div>
              {/* <div className="my-1 flex justify-center">
        <span className="bg-white px-2 text-xs">or</span>
        <div className="w-full bg-gray-200 mt-2" style={{ height: '1px' }}></div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <button className="bg-red-500 text-white w-full p-1 flex justify-center items-center gap-1 hover:bg-red-600 duration-100 ease-in-out">
          Sign-in with Google
        </button>
      </div> */}
            </div>
          </form>
        </div>

      </Modal>
      <Modal isVisible={showModal3} onClose={() =>
        setShowModal3(false)}>
        <div>
          <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
            Otp Verification
          </div>
          <div
            className="w-full bg-gray-200 my-3" style={{ height: '1px' }}
          ></div>
          <form>
            <div className="flex flex-col gap-4 px-0 py-4">
              <div>
                <label className="text-gray-700">OTP</label>

                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  placeholder="otp"
                  type="text"
                  onChange={(e) => setOtp(e.target.value)}

                />
              </div>

              <div className="w-full flex flex-row ">

                <button className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1"
                  onClick={handleOtp}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg> Verify
                </button>
              </div>
              <div className="my-2 flex flex-row justify-center">
                <span className="absolute bg-white px-4">or</span>
                <div
                  className="w-full bg-gray-200 mt-3" style={{ height: '1px' }}
                ></div>
              </div>


            </div>
          </form>


        </div>
      </Modal>
      <Modal isVisible={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div>
          <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
            Success
          </div>
          <div className="w-full bg-gray-200 my-3" style={{ height: '1px' }}></div>
          <div className="p-4">{successMessage}</div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoginButton}>
              Login
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default Header;