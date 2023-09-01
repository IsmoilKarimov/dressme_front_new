import React from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { useNavigate } from "react-router-dom";

const WearType = ({ onClick, title }) => {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };
  const imgList = [
    {
      id: 1,
      img:
        "https://cdn.dsmcdn.com/ty870/product/media/images/20230508/15/342852334/930970825/1/1_org_zoom.jpg",
    },
    {
      id: 2,
      img:
        "https://cdn.dsmcdn.com/ty822/product/media/images/20230412/16/323217804/909240412/1/1_org_zoom.jpg",
    },
    {
      id: 3,
      img:
        "https://cdn.dsmcdn.com/ty960/product/media/images/20230703/22/390725689/942607474/1/1_org_zoom.jpg",
    },
    {
      id: 4,
      img:
        "https://cdn.dsmcdn.com/ty898/product/media/images/20230522/14/355328599/944803730/1/1_org_zoom.jpg",
    },
  ];
  return (
    <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
      <section className="h-[52px] w-full bg-btnBgColor border-b border-searchBgColor flex items-center  justify-between px-4">
        <p>Футболка женская однотонная</p>
        <button onClick={onClick}>
          <MenuCloseIcons />
        </button>
      </section>
      <section className="h-[142px] w-full px-4 flex items-center">
        <figure className="w-full h-[110px] gap-x-2 flex items-center">
          {imgList.map((data) => {
            return (
              <div
                key={data?.id}
                className="h-full w-[74px] rounded-[12px]  border border-searchBgColor overflow-hidden"
              >
                <img
                  onClick={() => goDetail(data?.id)}
                  className="w-full h-full"
                  key={data?.id}
                  src={data?.img}
                  alt=""
                />
              </div>
            );
          })}
        </figure>
      </section>
    </div>
  );
};

export default React.memo(WearType);
