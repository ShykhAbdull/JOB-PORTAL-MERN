
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout, clearAllUserErrors } from "../store/slices/userSlice";




const Hero = () => {


  const [show, setShow] = useState(false);
  const [componentName, setComponentName] = useState("My Profile");

  const { loading, isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/");
    }

  }, [dispatch, error, loading, isAuthenticated]);


  if (!user) {
    return <div>
        <h1>
          <u style={{ textDecoration: 'underline', fontSize: 'inherit' }}>NO USER DATA AVAILABLE</u>
        </h1>

    </div>;
  }


  return (
    <section className="hero">


<h1>
  Hello! {user.name}
</h1>
      {user.role === "Employer" ? (
        <h1>
          <u style={{ textDecoration: 'underline', fontSize: 'inherit' }}>Post Jobs & review your applications</u>
        </h1>
      ) : user.role === "Job Seeker" ? (
        <h1>
          <u style={{ textDecoration: 'underline', fontSize: 'inherit' }}>Find & apply your Job today </u>
        </h1>
      ) : null}



      <h4>
        Connecting Talent with Opportunities Across the Nation for Every Skill
        Level
      </h4>
      <div className="box">
        Explore a vast array of job listings in diverse industries. Whether
        you're a seasoned professional or just starting out, find the perfect
        role to advance your career. Our platform makes job searching easy and
        efficient, bringing you closer to your next big opportunity.
      </div>
    </section>
  );
};

export default Hero;
