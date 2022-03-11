import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Headers from "../../Shared/Navbar/Headers";
const MakeAdmin = () => {
  //   const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const { email } = data;
    const user = { email };
    fetch("https://guarded-lowlands-64841.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("made admin successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <Headers />
      <div>
        <div>
          <h2 className="text-center mt-5">Make Admin</h2>
        </div>
        <Container className="d-flex justify-content-center align-items-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <input
              placeholder="Type the email"
              {...register("email")}
              className="mt-5 form-control"
            />
            <br />
            <input
              type="submit"
              className="btn-regular navbar-book-btn  ms-0"
            />
          </form>
        </Container>
      </div>
    </>
  );
};

export default MakeAdmin;
