import React, { useState, useEffect } from "react";

const Constructor = ({ onUpdate, session }) => {
  console.log(session, 'session cos')

  const [state, setState] = useState({
    ctaButtonText: "Subscribe",
    mainHeadline: "Join our Waitlist!",
    mainDescription: "Our SaaS software is launching soon. Join our waitlist to be the first to know when we launch. Stay tuned!",
    userName: "",
  });

  useEffect(() => {
    if (session?.user?.name) {
      setState(prevState => ({ ...prevState, userName: session.user.name }));
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    onUpdate({ [name]: value });
  };

  return (
    <div className="space-y-4">
      <div className="form-control">
        <label htmlFor="userName" className="label">
          <span className="label-text">User Name</span>
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={state.userName}
          onChange={handleInputChange}
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="ctaButtonText" className="label">
          <span className="label-text">CTA Button Text</span>
        </label>
        <input
          type="text"
          id="ctaButtonText"
          name="ctaButtonText"
          value={state.ctaButtonText}
          onChange={handleInputChange}
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="mainHeadline" className="label">
          <span className="label-text">Main Headline</span>
        </label>
        <input
          type="text"
          id="mainHeadline"
          name="mainHeadline"
          value={state.mainHeadline}
          onChange={handleInputChange}
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="mainDescription" className="label">
          <span className="label-text">Main Description</span>
        </label>
        <textarea
          id="mainDescription"
          name="mainDescription"
          value={state.mainDescription}
          onChange={handleInputChange}
          className="textarea textarea-bordered h-24"
        />
      </div>
    </div>
  );
};

export default Constructor;
