import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_PUBLIC_BASE_API_URL}/portfolio/sendEmail`, data);

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        const msg = error.response.data.error;

        if (msg.includes("name")) {
          setError("name", { type: "manual", message: msg });
        } else if (msg.includes("email")) {
          setError("email", { type: "manual", message: msg });
        } else if (msg.includes("msg")) {
          setError("msg", { type: "manual", message: msg });
        } else {
          toast.error(msg);
        }
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="mb-1"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="mb-1"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="row px-3">
                    <textarea
                      placeholder="Write your message"
                      className="mb-1"
                      {...register("msg")}
                    />
                    {errors.msg && (
                      <span className="text-danger">{errors.msg.message}</span>
                    )}
                  </div>

                  <div className="row px-3">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
