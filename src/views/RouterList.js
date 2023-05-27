import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// -------Without Lazy

// ---------Only Skeleton
import SkeletonHomeIndex from "../components/Home/Main/Skeleton/SkeletonHomeIndex";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import AuthenIndex from "../components/header/AuthenticationNavbar/AuthenIndex";
// import YandexMapsIndex from "../components";
import YandexSkeletonIndex from "../components/YandexMap/YandexMapsSkeleton/YandexSkeletonIndex";
// import ForgetPasswordIndex from "../components/Authentication/SignInDetail";
import ConfirmPassword from "../components/Authentication/ConfirmPassword/ConfirmPassword";

import LoadingOpacity from "../Page/Loading/LoadingOpacity";

// --------With lazy component
const HomePage = React.lazy(() => import("../Page/Home/Home"));

const YandexMapDressMe = React.lazy(() =>
  import("../components/YandexMap/index")
);
const SignIn = React.lazy(() =>
  import("../components/Authentication/SignIn/index")
);
const SignUp = React.lazy(() =>
  import("../components/Authentication/SignUp/index")
);
const ForgetConfirmPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/ForgetConfirmPassword")
);
const SetNewPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/SetNewPassword")
);
const ForgetPassword = React.lazy(() =>
  import("../components/Authentication/SignInDetail/ForgetPassword")
);
const RouterList = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route element={<Header />}>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <HomePage />
              </React.Suspense>
            }
          />
        </Route>

        {/* Yandex Maps */}
        <Route>
          <Route
            path="/delivery-points"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <YandexMapDressMe />
              </React.Suspense>
            }
          />
        </Route>

        {/* Registration page  */}
        <Route element={<AuthenIndex />}>
          <Route
            path="/sign_in"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <SignIn />
              </React.Suspense>
            }
          />
          <Route
            path="/sign_up"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <SignUp />
              </React.Suspense>
            }
          />
          <Route
            path="/forget_password"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <ForgetPassword />
              </React.Suspense>
            }
          />
          <Route
            path="/set_new_password"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <SetNewPassword />
              </React.Suspense>
            }
          />
          <Route
            path="/enter_password_validate"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <ForgetConfirmPassword />
              </React.Suspense>
            }
          />
          <Route
            path="/confirm_password"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <LoadingOpacity />
                  </div>
                }
              >
                <ConfirmPassword />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>

      {locationWindow !== "/add_user_private_data" &&
      locationWindow !== "/add_user_body_data" &&
      locationWindow !== "/confirm_password" &&
      locationWindow !== "/set_new_password" &&
      locationWindow !== "/enter_password_validate" &&
      locationWindow !== "/forget_password" &&
      locationWindow !== "/sign_up" &&
      locationWindow !== "/sign_in" &&
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null}
      {/* {locationWindow !== "/add_user_private_data" ||
      locationWindow !== "/add_user_body_data" ||
      locationWindow !== "/confirm_password" ||
      locationWindow !== "/forget_password" ||
      locationWindow !== "/sign_up" ||
      locationWindow !== "/sign_in" ||
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null} */}
    </>
  );
};
export default RouterList;
