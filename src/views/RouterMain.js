import React, { useEffect, Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
import YandexMapDressMe from "../components/YandexMap";
import SignIn from "../components/Authentication/SignIn/SignIn";
import SignUp from "../components/Authentication/SignUp/SignUp";
import CategoryMainType from "../components/Category/CategoryForType";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// -------------------------------------
import SkeletonHomeIndex from "../components/Home/Main/Skeleton/SkeletonHomeIndex";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import ShoppingStore from "../components/Home/Shop/ShoppingStore";
import Favourites from "../components/Home/Favorite";
import ShoppingStoreOfficial from "../components/Home/Shop/ShoppingStoreOfficial";

// -------------------------------------
const HomePage = React.lazy(() => import("../Page/Home/Home"));
const SingleMainProduct = React.lazy(() =>
  import("../components/Home/Products/SignleMainProducts")
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
const Footer = React.lazy(() => import("../components/footer/footer"));
const BasketCheckOut = React.lazy(() =>
  import("../components/Home/Basket/BasketCheckOut/BasketCheckOut")
);
const PaymentForClothes = React.lazy(() =>
  import("../components/Home/Basket/Payment/PaymentForClothes")
);

// -------------------------------------

const RouterMain = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
    console.log(locationWindow, "locationWindow");
  }, [location.pathname]);
  return (
    <>
      <Header />
      {/* Transition group opacity pagedan pagega o'tganda */}
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames={"fade"}
          exit={false}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <HomePage />
                </Suspense>
              }
            />

            <Route path="/delivery-points" element={<YandexMapDressMe />} />
            <Route
              path="/categoriesType"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <CategoryMainType />
                </Suspense>
              }
            />
            <Route
              path="/basket-check-out"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <BasketCheckOut />
                </Suspense>
              }
            />
            <Route
              path="/payment"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <PaymentForClothes />
                </Suspense>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SkeletonHomeIndex />
                    </div>
                  }
                >
                  <SingleMainProduct />
                </Suspense>
              }
            />

            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />

            <Route path="/favourites" element={<Favourites />} />
            <Route path="/stores" element={<ShoppingStore />} />
            <Route
              path="/shopping_store/:id"
              element={<ShoppingStoreOfficial />}
            />

            <Route
              path="/forget_password"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <ForgetPassword />
                </Suspense>
              }
            />
            <Route
              path="/set_new_password"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <SetNewPassword />
                </Suspense>
              }
            />
            <Route
              path="/enter_password_validate"
              element={
                <Suspense
                  fallback={
                    <div>
                      <SignInSkeletonIndex />
                    </div>
                  }
                >
                  <ForgetConfirmPassword />
                </Suspense>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {locationWindow !== "/add_user_private_data" &&
      locationWindow !== "/add_user_body_data" &&
      locationWindow !== "/confirm_password" &&
      locationWindow !== "/set_new_password" &&
      locationWindow !== "/enter_password_validate" &&
      locationWindow !== "/forget_password" &&
      locationWindow !== "/sign_up" &&
      locationWindow !== "/sign_in" &&
      locationWindow !== "/delivery-points" ? (
        <Suspense fallback={<>Loading...</>}>
          <Footer />
        </Suspense>
      ) : // <Footer />
      null}
      {/* {locationWindow !== "/add_user_private_data" 
      locationWindow !== "/add_user_body_data" 
      locationWindow !== "/confirm_password" 
      locationWindow !== "/forget_password" 
      locationWindow !== "/sign_up" 
      locationWindow !== "/sign_in" 
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null} */}
    </>
  );
};
export default RouterMain;
