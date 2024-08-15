     // ArchivePage.js
import React from 'react';
import '../styles/CustomStyles.css';



function ArchivePage() {

    /* Image */
    const card6 = process.env.PUBLIC_URL + '/assets/imgs/ICET_LABCHECK.png';
    const card5 = process.env.PUBLIC_URL + '/assets/imgs/empty.png';
    const card4= process.env.PUBLIC_URL + '/assets/imgs/Pizza-Order-system-img.png';
    const card3 = process.env.PUBLIC_URL + '/assets/imgs/CtrlZ.png';
    const card2 = process.env.PUBLIC_URL + '/assets/imgs/Snow-Particle.jpg';
    const card1 = process.env.PUBLIC_URL + '/assets/imgs/Zealot.jpg';

    /* Video */
    const demo6 = process.env.PUBLIC_URL + '/assets/video/v_labcehck.mp4';
    const demo5 = process.env.PUBLIC_URL + '/assets/video/v_restaurant.mp4';
    const demo4 = process.env.PUBLIC_URL + '/assets/video/v_pizza.mp4';
    const demo3 = process.env.PUBLIC_URL + '/assets/video/v_pizza.mp4';
    const demo2 = process.env.PUBLIC_URL + '/assets/video/v_snow.mp4';
    const demo1 = process.env.PUBLIC_URL + '/assets/video/v_zealot.mp4';

    return (

    
        <main id="ArchivePage" className="container p-5">

    <div id="a_title" class="jumbotron">
        <h1 class="display-4">Eunji's Archive</h1>
        <p>This is a list of the projects I've worked on so far</p>
    </div>

    <div class="row">

        {/* <!-- Sidebar --> */}
        <div class="col-3" >
            <div class="flex-shrink-0 p-3" >
               
                <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Developer
                        </button>
                        <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">C#.Net</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Java</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">HTML/CSS</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Game
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Unity</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Unreal</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Film
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Houdini</a></li>
                                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">After Effect</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

      {/* <!-- Main Content --> */}
<div class="col-9">

        {/* <!-- Card 6 --> */}
        <div class="card mb-4">
        <img src={card6} class="card-img-top" alt="ICET LAB CHECKSHEET" />
        <div class="card-body">
            <h5 class="card-title">ICET Lab CheckSheet</h5>
            <p class="card-text">I built this system in C#.NET. It can take in order information and store the information.</p>
            <a href="/video/Pizza-Order-System-video.mp4" class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>

        {/* <!-- Card 5 --> */}
        <div class="card mb-4">
        <img src={card5} class="card-img-top" alt="Pizza Order system" />
        <div class="card-body">
            <h5 class="card-title">Restuarnat Website</h5>
            <p class="card-text">I built this system in C#.NET. It can take in order information and store the information.</p>
            <a href={demo5} class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>
    {/* <!-- Card 4 --> */}
    <div class="card mb-4">
        <img src={card4} class="card-img-top" alt="Pizza Order system" />
        <div class="card-body">
            <h5 class="card-title">Pizza Order System</h5>
            <p class="card-text">I built this system in C#.NET. It can take in order information and store the information.</p>
            <a href={demo4} class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="card mb-4">
        <img src={card3} class="card-img-top" alt="Ctrl Z (3D Escape-room)" />
        <div class="card-body">
            <h5 class="card-title">Ctrl Z (3D Escape-room Game)</h5>
            <p class="card-text">This is a 3D room escape made by a group project with Unity. I was in charge of planning and 3D modeling.</p>
            <a href={demo3} class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="card mb-4">
        <img src={card2} class="card-img-top" alt="Snow Particle" />
        <div class="card-body">
            <h5 class="card-title">Snow Particle</h5>
            <p class="card-text">With Houdini program, I produced and synthesized snow in the reference video.</p>
            <a href={demo2} class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>

    {/* <!-- Card 1 --> */}
    <div class="card mb-4">
        <img src={card1} class="card-img-top" alt="Zealot Advection" />
        <div class="card-body">
            <h5 class="card-title">Zealot Advection</h5>
            <p class="card-text">With Houdini program, I implemented the particle so that the reference Zealot evaporates.</p>
            <a href={demo1} class="btn btn-primary" target="_blank">Show</a>
        </div>
    </div>

</div>

    </div>

</main>

    );
}

export default ArchivePage;

