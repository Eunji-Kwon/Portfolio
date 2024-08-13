import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CustomStyles.css'; // CustomStyles.css 파일 import

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
           <div className="color-palette">
            <div className="color-circle" style={{ backgroundColor: '#208856' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#DEEE4E' }}></div>
                {/* <div className="color-circle" style={{ backgroundColor: '#3357FF' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#F3FF33' }}></div>
                <div className="color-circle" style={{ backgroundColor: '#FF33A6' }}></div> */}
                   <p>&copy; 2024 Eunji Kwon. All rights reserved.</p>

        </div>
           
       
       
        </footer>
    );
}

export default Footer;
