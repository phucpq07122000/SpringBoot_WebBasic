import React from 'react';
import "./Footer.css"
import { GoLink } from 'react-icons/go';
import { AiFillSmile, AiFillPhone } from 'react-icons/ai';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <section className='footer'>

      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>

              <div className="setContent">
                <h5 className='text-uppercase'><AiFillSmile className='icon2' />Footer text</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                  Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                  est atque cumque eum delectus sint!
                </p>
              </div>


            </MDBCol>

            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <div className='setContent'>
                <div className="socicalDiv grid">
                  <h5>contactDiv</h5>
                  <li className='footerList flex' >
                    <GoLink className='icon2' /> :
                    <a id='Link'>jdkljsadlkjdlksajlkdjlk</a>
                  </li>
                  <li className='footerList flex'>
                    <BsFillPersonBadgeFill className='icon2' />:
                    <a id='Person'>dkljsadlkjdlksajlkdjlk</a>
                  </li>
                  <li className='footerList flex'>
                    <AiFillPhone className='icon2' />:
                    <a id>jdkljsadlkjdlksajlkdjlk</a>
                  </li>
                </div>
              </div>


            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>

    </section>
  );
};

export default Footer;
<GoLink className="icon" />


{/* <div className="setContent flex">
                <div className="contactDiv flex">
                    <div className="logoDiv ">

                        <a href="#" className='logo flex'>
                            <AiFillSmile className='icon2' /> some my words
                        </a>
                        <div className="footerParagaph">
                            <p>helofdskjflkdjflkjlkdsfjdlksjflkdsjflkdsfjlkdsfjlkfjalkjlf</p>
                        </div>
                    </div>
                    <div className="socicalDiv grid">
                        <li className='footerList flex' >
                            <GoLink className='icon2' /> :
                            <a id='Link'>jdkljsadlkjdlksajlkdjlk</a>
                        </li>
                        <li className='footerList flex'>
                            <BsFillPersonBadgeFill className='icon2' />:
                            <a id='Person'>dkljsadlkjdlksajlkdjlk</a>
                        </li>
                        <li className='footerList flex'>
                            <AiFillPhone className='icon2' />:
                            <a id>jdkljsadlkjdlksajlkdjlk</a>
                        </li>
                    </div>
                </div>
            </div> */}