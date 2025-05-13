import { useForm } from "react-hook-form";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "../../utils/Toast";
import {  BsLinkedin, BsWhatsapp } from "react-icons/bs";
import imageContact from "../../assets/contacto-abogado.webp";
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
      const res = await axios.post(
        "https://evshif-portafolio-backend.onrender.com/api/v1/portfolio",
        data
      );

      if (res.data.success) {
        showSuccessToast("Tu consulta ha sido enviada");
        reset();
      } else {
        showErrorToast(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.error) {
        const msg = error.response.data.error;

        if (msg.includes("name")) {
          setError("name", { type: "manual", message: msg });
        } else if (msg.includes("email")) {
          setError("email", { type: "manual", message: msg });
        } else if (msg.includes("msg")) {
          setError("msg", { type: "manual", message: msg });
        } else {
          showErrorToast(msg);
        }
      } else {
        showErrorToast("An unexpected error occurred");
      }
    }
  };

  const phone = import.meta.env.VITE_PHONE;

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-lg-6">
            <div className="card1">
              <div className="row border-line">
                <img
                  src={imageContact}
                  alt="contact"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 d-flex card border-0 ps-4 ps-lg-0 px-lg-4 ms-2 py-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="row">
                    <h6 className="text-dark fs-5">
                      Contactame
                      <a href="https://ar.linkedin.com/in/evelyn-shifman-a05921276" target="_blank">
                        <BsLinkedin color="blue" size={20} className="ms-2" />
                      </a>
                      <a href={`https://api.whatsapp.com/send?phone=${phone}`} target="_blank">
                        <BsWhatsapp color="green" size={20} className="ms-2" />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="mt-3"
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
                      className="mt-3"
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
                      className="mt-3"
                      {...register("msg")}
                    />
                    {errors.msg && (
                      <span className="text-danger">{errors.msg.message}</span>
                    )}
                  </div>

                  <div className="row px-lg-3 mt-3">
                    <button className="button text-uppercase" type="submit">
                      Enviar mensaje
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
