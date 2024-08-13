import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import CompanyLogo from './assets/company-logo-1.png';
import '../CustomStyles.css'; // CustomStyles.css 파일 import


function Career() {

    const companyLogo1 = process.env.PUBLIC_URL + '/assets/company-logo-1.png';
   
    return (
        <section id="career" className="p-5 bg-light">
            <div className="container">
                <h2 className="mb-5">Career</h2>
                <div className="career-row mb-5">
                    <div className="career-col text-center">
                        <div className="circle">
                            <img src={companyLogo1} alt="Company Logo 1" className="img-fluid rounded-circle" />
                 

                        </div>
                        <p className="text-muted">2024.04 - PRESENT</p>
                    </div>
                    <div className="career-col">
                        <h3>ICET Lab Assistant - Software(Co-op)</h3>
                        <p className="text-muted">Centennial College(SETA), Scaborough, CA</p>
                        <p>
                            Description of responsibilities and achievements in this role. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit.
                        </p>
                        <span class="badge text-bg-primary">JavaScript</span>
                        <span class="badge text-bg-primary">React</span>
                        <span class="badge text-bg-primary">HTML/CSS</span>
                        <span class="badge text-bg-primary">Bootstrap</span>
                        <span class="badge text-bg-success">Node.js</span>
                        <span class="badge text-bg-success">MongoDB</span>
                        <span class="badge text-bg-warning">Nginx</span>
                        <span class="badge text-bg-warning">AWS EC2</span>
                    </div>
                </div>
                <div className="career-row mb-5">
                    <div className="career-col text-center">
                        <div className="circle">
                            <img src={companyLogo1} alt="Company Logo 2" className="img-fluid rounded-circle" />
                        </div>
                    </div>
                    <div className="career-col">
                        <h3>Company Name 2</h3>
                        <p className="text-muted">Dates of Employment</p>
                        <p>
                            Description of responsibilities and achievements in this role. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Career;