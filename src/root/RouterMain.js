import React, { useEffect, Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "../index.css";
import Header from "../components/header/header";
// -------------------------------------
import LoadingFor from "../components/Loading/LoadingFor";
import SkeletonHomeIndex from "../components/Home/Main/Skeleton/SkeletonHomeIndex";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";
// import CatalogMain from "../components/Home/Catalog/CatalogFilter";

// -------------------------------------
const HomeIndex = React.lazy(() => import("../components/Home/Main"));
const SingleMainProduct = React.lazy(() =>
  import("../components/Home/Products/SignleMainProducts")
);
const CatalogMain = React.lazy(() =>
  import("../components/Home/Catalog/CatalogFilter")
);
// import CatalogPage from "../components/Home/Catalog";
const YandexMapDressMe = React.lazy(() => import("../components/YandexMap"));
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
const OrderSettings = React.lazy(() => import("../components/Home/MyOrder"));
const CatalogPage = React.lazy(() => import("../components/Home/Catalog"));

const ShoppingStoreOfficial = React.lazy(() =>
  import("../components/Home/Shop/ShoppingStoreOfficial")
);
const Favourites = React.lazy(() => import("../components/Home/Favorite"));
const ShoppingStore = React.lazy(() =>
  import("../components/Home/Shop/ShoppingStore")
);
const CategoryMainType = React.lazy(() =>
  import("../components/Category/CategoryForType")
);
const SignUp = React.lazy(() => import("../components/Authentication/SignUp"));
const SignIn = React.lazy(() => import("../components/Authentication/SignIn"));

// -------------------------------------

const RouterMain = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <Header />
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
              <HomeIndex />
            </Suspense>
          }
        />

        <Route
          path="/delivery-points"
          element={
            <Suspense
              fallback={
                <div>
                  <LoadingFor />
                </div>
              }
            >
              <YandexMapDressMe />
            </Suspense>
          }
        />
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
          path="/catalog"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/catalog/:id"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <CatalogMain />
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
        <Route
          path="/sign_in"
          element={
            <Suspense
              fallback={
                <div>
                  <SignInSkeletonIndex />
                </div>
              }
            >
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign_up"
          element={
            <Suspense
              fallback={
                <div>
                  <SignUpSkeletonIndex />
                </div>
              }
            >
              <SignUp />
            </Suspense>
          }
        />

        <Route
          index
          path="/profile/settings"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <OrderSettings />
            </Suspense>
          }
        />

        <Route
          path="/favourites"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <Favourites />
            </Suspense>
          }
        />
        <Route
          path="/stores"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <ShoppingStore />
            </Suspense>
          }
        />
        <Route
          path="/shopping_store/:id"
          element={
            <Suspense
              fallback={
                <div>
                  <SkeletonHomeIndex />
                </div>
              }
            >
              <ShoppingStoreOfficial />
            </Suspense>
          }
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

      {locationWindow !== "/add_user_private_data" &&
      locationWindow !== "/add_user_body_data" &&
      locationWindow !== "/confirm_password" &&
      locationWindow !== "/set_new_password" &&
      locationWindow !== "/catalog" &&
      locationWindow !== "/enter_password_validate" &&
      locationWindow !== "/forget_password" &&
      locationWindow !== "/sign_up" &&
      locationWindow !== "/sign_in" &&
      locationWindow !== "/profile/settings" &&
      locationWindow !== "/delivery-points" ? (
        <Suspense fallback={<>Loading...</>}>
          <Footer />
        </Suspense>
      ) : null}
    </>
  );
};
export default RouterMain;
