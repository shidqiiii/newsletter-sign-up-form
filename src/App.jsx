import ILDesktop from "./assets/illustration-sign-up-desktop.svg";
import ILMobile from "./assets/illustration-sign-up-mobile.svg";
import IconList from "./assets/icon-list.svg";
import { useEffect, useState } from "react";

const App = () => {
    const listText = [
        { no: 1, text: "Product discovery and building what matters" },
        { no: 2, text: "Measuring to ensure updates are a success" },
        { no: 3, text: "And much more!" },
    ];

    const [windowWidth, setWindowWidth] = useState(0);
    const resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, [windowWidth]);

    return (
        <div className="h-screen md:flex justify-center items-center">
            <div className="card bg-white h-screen md:h-fit shadow-xl">
                <div className="card-body flex flex-row md:flex-nowrap p-0 md:w-full md:p-10 flex-wrap-reverse justify-center items-between md:items-center gap-5">
                    <div className="px-6">
                        <h1 className="card-title text-4xl md:text-5xl font-bold text-grey-dark-slate">
                            Stay updated!{" "}
                        </h1>
                        <p className=" font-medium text-grey-dark-slate py-4">
                            Join 60,000+ product managers receiving monthly {windowWidth >= 768 && <br />}
                            updates on:
                        </p>
                        {listText.map((item) => (
                            <div key={item.no} className="flex flex-row gap-2 py-1">
                                <img src={IconList} alt="Album" />
                                <p className="text-grey-dark-slate font-semibold pl-1"> {item.text}</p>
                            </div>
                        ))}

                        <div className="form-control w-full mt-5">
                            <label className="label">
                                <span className="label-text text-grey-dark-slate font-semibold">Email Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email@company.com"
                                className="input input-bordered w-full bg-white text-grey-dark-slate border-grey focus:border-grey-dark-slate focus:outline-none mb-5"
                            />
                            <button className="btn btn-primary bg-grey-dark-slate border-grey-dark-slate hover:bg-grey-charcoal hover:border-grey-dark-slate  text-white">
                                Subscribe to monthly newsletter
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-fit">
                        <img src={windowWidth <= 768 ? ILMobile : ILDesktop} alt="Album" className="w-full" />
                    </div>
                    {console.log(window.innerWidth)}
                </div>
            </div>
        </div>
    );
};

export default App;
