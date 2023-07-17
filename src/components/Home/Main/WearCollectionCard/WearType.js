import React from "react";
import { MenuCloseIcons } from "../../../../AssetsMain/icons";
import { useNavigate } from "react-router-dom";

const WearType = ({ onClick, title }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/product/:${title}`);
  };
  const imgList = [
    {
      id: 1,
      img:
        "https://cdn.dsmcdn.com/mnresize/100/-/ty960/product/media/images/20230706/11/391612072/975799954/1/1_org_zoom.jpg",
    },
    {
      id: 2,
      img:
        "https://cdn.dsmcdn.com/mnresize/100/-/ty820/product/media/images/20230411/14/322264783/908055415/1/1_org_zoom.jpg",
    },
    {
      id: 3,
      img:
        "https://cdn.dsmcdn.com/mnresize/100/-/ty820/product/media/images/20230411/14/322260443/908053545/1/1_org_zoom.jpg",
    },
    {
      id: 4,
      img:
        "https://cdn.dsmcdn.com/mnresize/100/-/ty821/product/media/images/20230411/13/322243750/908034838/1/1_org_zoom.jpg",
    },
  ];
  return (
    <div className="max-w-[440px] w-[100%] mx-auto bg-white overflow-hidden h-fit rounded-t-[12px]">
      <section className="h-[52px] w-full bg-btnBgColor border-b border-searchBgColor flex items-center justify-between px-4">
        <p>Футболка женская однотонная</p>
        <button onClick={onClick}>
          <MenuCloseIcons />
        </button>
      </section>
      <section className="h-[142px] w-full px-4 flex items-center">
        <figure className="w-full h-[110px] gap-x-2 flex items-center">
          {imgList.map((data) => {
            return (
              <img
                onClick={() => goDetail()}
                className="h-full w-[74px]"
                key={data?.id}
                src={data?.img}
                alt=""
              />
            );
          })}
        </figure>
      </section>
    </div>
  );
};

export default React.memo(WearType);
