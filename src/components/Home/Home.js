import React from 'react';

const Home = () => {
    return (

        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary mt-12">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>

        // <div>
        //     <div className="carousel w-full">
        //         <div id="item1" className="carousel-item w-full">
        //             <img src="https://i.pinimg.com/originals/cd/62/cb/cd62cbbf6ddafdc1048026cb778c30af.jpg" className="w-full" />
        //         </div>
        //         <div id="item2" className="carousel-item w-full">
        //             <img src="https://i.pinimg.com/originals/39/ea/01/39ea01a743d988f8b970dc9370a54496.jpg" className="w-full" />
        //         </div>
        //         <div id="item3" className="carousel-item w-full">
        //             <img src="https://i.pinimg.com/originals/de/79/b3/de79b3925030a1991e351b4ae73f6d2f.jpg" className="w-full" />
        //         </div>
        //         <div id="item4" className="carousel-item w-full">
        //             <img src="https://cdn.quotesgram.com/img/65/83/2111445645-alhamdullilah-fb-cover-islamic-photo.png" className="w-full" />
        //         </div>
        //     </div>
        //     <div className="flex justify-center w-full py-2 gap-2">
        //         <a href="#item1" className="btn btn-xs">1</a>
        //         <a href="#item2" className="btn btn-xs">2</a>
        //         <a href="#item3" className="btn btn-xs">3</a>
        //         <a href="#item4" className="btn btn-xs">4</a>
        //     </div>
        // </div>
    );
};

export default Home;