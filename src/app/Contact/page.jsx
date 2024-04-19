"use client"

// Import the emailjs library
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { SiGmail } from "react-icons/si";


const page = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4z6q1wf', 'template_nms07pv', form.current, 'jXX87AbRhPixMWwIB')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="">

        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-xl ">
          <h2 className="text-4xl  mt-24">Get In Touch</h2>
            <progress className="progress w-56  mt-2"></progress>
            <div className="flex items-center gap-28">

              <form
                ref={form}
                onSubmit={sendEmail}
                className="card-body w-full  mt-6 space-y-2 rounded-xl backdrop-contrast-200
               "
              >
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="input input-bordered bg-black/10 w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="input input-bordered bg-black/10 w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-40 bg-black/10"
                    placeholder="Write your message here.."
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Send Message" className="btn neon-button" />
                </div>
              </form>
              <div className="text-8xl"><SiGmail /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
