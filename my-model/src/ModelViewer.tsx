import React, { useState, useEffect } from 'react';
import './App.css';

const ModelViewerComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const modelSrc = new URL('./assets/model/Full_ready.glb', import.meta.url).href;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className='navbar'>
                <div className='navbar-content'>
                    <h1>Product Showcase</h1>
                    <ul className='navbar-links'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className='products'>
                    <div className='model-card'>
                        <model-viewer
                            src={modelSrc}
                            alt="A 3D model"
                            auto-rotate
                            camera-controls
                            onClick={openModal}
                        ></model-viewer>
                        <div className='product-card'>
                            <h1>Hooka</h1>
                            <p>Description</p>
                            <h2>Price: $100</h2>
                            <button className='button' onClick={() => alert('Buy Now')}>Buy Now</button>
                        </div>
                    </div>
                    <div className='model-card'>
                        <model-viewer
                            src={modelSrc}
                            alt="A 3D model"
                            auto-rotate
                            camera-controls
                            onClick={openModal}
                        ></model-viewer>
                        <div className='product-card'>
                            <h1>Hooka</h1>
                            <p>Description</p>
                            <h2>Price: $100</h2>
                            <button className='button' onClick={() => alert('Buy Now')}>Buy Now</button>
                        </div>
                    </div>
                    <div className='model-card'>
                        <model-viewer
                            src={modelSrc}
                            alt="A 3D model"
                            auto-rotate
                            camera-controls
                            onClick={openModal}
                        ></model-viewer>
                        <div className='product-card'>
                            <h1>Hooka</h1>
                            <p>Description</p>
                            <h2>Price: $100</h2>
                            <button className='button' onClick={() => alert('Buy Now')}>Buy Now</button>
                        </div>
                    </div>
                    <div className='model-card'>
                        <model-viewer
                            src={modelSrc}
                            alt="A 3D model"
                            auto-rotate
                            camera-controls
                            onClick={openModal}
                        ></model-viewer>
                        <div className='product-card'>
                            <h1>Hooka</h1>
                            <p>Description</p>
                            <h2>Price: $100</h2>
                            <button className='button' onClick={() => alert('Buy Now')}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <model-viewer
                            src={modelSrc}
                            alt="A 3D model"
                            auto-rotate
                            camera-controls
                        ></model-viewer>
                        <button className='modal-close' onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModelViewerComponent;
