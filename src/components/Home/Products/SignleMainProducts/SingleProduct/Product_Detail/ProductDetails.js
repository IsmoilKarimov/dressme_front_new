import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";
import { BsCircleFill } from "react-icons/bs";
import {
  CalendarIcons,
  CategoryIcon,
  CategoryUsersIcon,
  ChapterIcon,
  CircleWarningIcons,
  DeliveryIcons,
  DiscountShapeIcons,
  DollorIcons,
  LocationColoursIcons,
  MarketIcons,
  PaymeSystemIcons,
  PhoneIcons,
  ProductArticleIcons,
  ProductSwitchIcons,
  QualityIcon,
  SettingsIcon,
  StarIcons,
  TypeIcon,
} from "../../../../../../assets/icons";
import {
  summerSeason,
  autummSeason,
  winterSeason,
  HeartImg,
  springSeason,
} from "../../../../../../assets";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Modal, Popover, Radio } from "antd";
import AddCopyCheckedIcon from "./AddCopyCheckedIcon/AddCopyCheckedIcon";
import LocationOfYandex from "./LocationOfYandex/LocationOfYandex";
import TableSizesDropUp from "./MobileDropUp/TableSizesDropUp/TableSizesDropUp";
import LocationDropUp from "./MobileDropUp/LocationsDropUp/LocationsDropUp";
import { SliderPhotosColorContext } from "../../../../../../ContextHook/SliderPhotosColor";

const ProductDetails = () => {
  // -- {data} --

  // Mock data -------

  const [data, setData] = useState({
    product: {
      id: 1,
      name_uz: "product_name_1",
      name_ru: "product_name_1",
      gender_id: "1",
      min_age_category: "6",
      max_age_category: "82",
      sku: "585-800",
      description_uz: "non",
      description_ru: "labore",
      quality_uz: "Original",
      quality_ru: "Оригинал",
      composition_uz: "cotton 100%",
      composition_ru: "хлопок 100%",
      status: "approved",
      status_reason: null,
      status_update: null,
      overall_rating: "5.0",
      rated_users_count: "167",
      producer_id: "3",
      category_id: "2",
      type_id: "9",
      brand_id: "30",
      shop_id: "5",
      seller_id: "6",
      created_at: "06-12-2023",
      updated_at: "06-12-2023",
      sizes_sum_amount: "9",
      category: {
        id: 2,
        name_uz: "Ustki kiyimlar",
        name_ru: "Верхняя одежда",
      },
      type: {
        id: 9,
        category_id: "2",
        name_uz: "Futbolka",
        name_ru: "Футболка",
      },
      seller: {
        id: 6,
        name: "Seller_5",
        surname: "Kemmer",
        email: "prohaska.samantha@huel.biz",
        phone: "201.385.3263",
        is_email_verified: "0",
        card_number: "8600572984398155",
        status: "declined",
        status_reason: null,
        seller_type_id: "6",
        region_id: "7",
        sub_region_id: "68",
        email_verified_at: null,
        created_at: "06-12-2023",
        updated_at: "06-12-2023",
      },
      cost: {
        product_id: "1",
        price: "58176",
        discount_price: "5463",
        discount_percent: "17",
      },
      sizes: [
        {
          id: 6,
          category_id: "2",
          product_id: "1",
          shop_location_id: "8",
          amount: "4",
          product_color_id: "11",
          age: "15",
          wear_size: "15",
          one_size: "15",
          min_head_girth: "15",
          max_head_girth: "15",
          letter_size: "XS",
          min_wear_size: "47",
          max_wear_size: "57",
          min_chest_girth: "45",
          max_chest_girth: "69",
          min_waist_girth: "37",
          max_waist_girth: "94",
          min_hip_girth: "40",
          max_hip_girth: "55",
          min_height: "15",
          max_height: "15",
          min_foot_length: "15",
          max_foot_length: "15",
          length: "15",
          width: "15",
          price: "48176",
          discount_price: "15",
          discount_percent: "15",
          measure_unit: "cm",
          currency: "UZS",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 7,
          category_id: "2",
          product_id: "1",
          shop_location_id: "8",
          amount: "7",
          product_color_id: "11",
          age: "15",
          wear_size: "45",
          one_size: "45",
          min_head_girth: "45",
          max_head_girth: "45",
          letter_size: "XS",
          min_wear_size: "47",
          max_wear_size: "57",
          min_chest_girth: "45",
          max_chest_girth: "69",
          min_waist_girth: "37",
          max_waist_girth: "94",
          min_hip_girth: "40",
          max_hip_girth: "55",
          min_height: "45",
          max_height: "45",
          min_foot_length: "45",
          max_foot_length: "45",
          length: "45",
          width: "45",
          price: "88176",
          discount_price: "5445",
          discount_percent: "6",
          measure_unit: "cm",
          currency: "UZS",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 8,
          category_id: "2",
          product_id: "1",
          shop_location_id: "8",
          amount: "2",
          product_color_id: "11",
          age: "15",
          wear_size: "49",
          one_size: "49",
          min_head_girth: "49",
          max_head_girth: "49",
          letter_size: "XL",
          min_wear_size: "47",
          max_wear_size: "57",
          min_chest_girth: "45",
          max_chest_girth: "69",
          min_waist_girth: "37",
          max_waist_girth: "94",
          min_hip_girth: "40",
          max_hip_girth: "55",
          min_height: "49",
          max_height: "49",
          min_foot_length: "49",
          max_foot_length: "49",
          length: "49",
          width: "49",
          price: "958176",
          discount_price: "49",
          discount_percent: "49",
          measure_unit: "cm",
          currency: "UZS",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 9,
          category_id: "2",
          product_id: "1",
          shop_location_id: "8",
          amount: "2",
          product_color_id: "11",
          age: "15",
          wear_size: "58",
          one_size: "58",
          min_head_girth: "58",
          max_head_girth: "58",
          letter_size: "XS",
          min_wear_size: "43",
          max_wear_size: "54",
          min_chest_girth: "49",
          max_chest_girth: "59",
          min_waist_girth: "47",
          max_waist_girth: "34",
          min_hip_girth: "45",
          max_hip_girth: "59",
          min_height: "58",
          max_height: "58",
          min_foot_length: "58",
          max_foot_length: "58",
          length: "58",
          width: "58",
          price: "581765",
          discount_price: "48652",
          discount_percent: "5",
          measure_unit: "cm",
          currency: "UZS",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
      ],
      colors: [
        {
          id: 7,
          name_uz: "Ko`k",
          name_ru: "Синий",
          hex: "#0000FF",
          pivot: {
            product_id: "1",
            color_id: "7",
            id: "1",
          },
        },
        {
          id: 3,
          name_uz: "Pushti",
          name_ru: "Розовый",
          hex: "#ffc0cb",
          pivot: {
            product_id: "1",
            color_id: "3",
            id: "10",
          },
        },
      ],
      photos: [
        {
          id: 1,
          url_photo:
            "https://api.dressme.uz/storage/productPhotos/t-shirt.webp",
          status: "approved",
          status_reason: null,
          status_update: null,
          product_id: "1",
          product_color_id: "1",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 10,
          url_photo:
            "https://api.dressme.uz/storage/productPhotos/costume.jpeg",
          status: "approved",
          status_reason: null,
          status_update: null,
          product_id: "1",
          product_color_id: "10",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 11,
          url_photo: "https://api.dressme.uz/storage/productPhotos/street.jpeg",
          status: "approved",
          status_reason: null,
          status_update: null,
          product_id: "1",
          product_color_id: "1",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 12,
          url_photo: "https://api.dressme.uz/storage/productPhotos/sport.jpeg",
          status: "approved",
          status_reason: null,
          status_update: null,
          product_id: "1",
          product_color_id: "11",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
        {
          id: 13,
          url_photo:
            "https://api.dressme.uz/storage/productPhotos/13/6573f1c6808bf_shoes.jpeg",
          status: "pending",
          status_reason: null,
          status_update: "1",
          product_id: "1",
          product_color_id: "11",
          created_at: "2023-12-07T04:33:11.000000Z",
          updated_at: "2023-12-09T04:49:10.000000Z",
        },
        {
          id: 14,
          url_photo:
            "https://api.dressme.uz/storage/productPhotos/13/65716032c7186_4k4.jpeg",
          status: "pending",
          status_reason: null,
          status_update: null,
          product_id: "1",
          product_color_id: "10",
          created_at: "2023-12-07T06:03:30.000000Z",
          updated_at: "2023-12-07T06:03:30.000000Z",
        },
      ],
      seasons: [
        {
          id: 1,
          name_uz: "Yoz",
          name_ru: "Лето",
          pivot: {
            product_id: "1",
            season_id: "1",
          },
        },
      ],
      sections: [
        {
          id: 11,
          name_uz: "Komikslar",
          name_ru: "Комиксный",
          url_photo: "https://api.dressme.uz/storage/Eos.",
          pivot: {
            product_id: "1",
            section_id: "11",
          },
        },
      ],
      sub_sections: [
        {
          id: 6,
          name_uz: "Politsiya",
          name_ru: "Полиция",
          section_id: "9",
          pivot: {
            product_id: "1",
            sub_section_id: "6",
          },
        },
      ],
      shop: {
        id: 5,
        name: "Miss Kamille Barton PhD",
        url_logo_photo: "https://api.dressme.uz/storage/Aut.",
        url_background_photo: null,
        status: "show",
        gender_id: "1",
        delivery_id: "2",
        overall_rating: null,
        rated_users_count: null,
        seller_id: "9",
        created_at: null,
        updated_at: null,
        delivery: {
          id: 2,
          name_uz: "Taksi",
          name_ru: "Такси",
          created_at: "2023-12-06T13:15:10.000000Z",
          updated_at: "2023-12-06T13:15:10.000000Z",
        },
      },
      locations: [
        {
          id: 1,
          shop_id: "1",
          region_id: "1",
          sub_region_id: "1",
          status: "show",
          address: "25766 Hoeger Groves Apt. 145\nNoemiefurt, NC 97047-4297",
          longitude: "160.009013",
          latitude: "-57.70026",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Gaylord Romaguera",
          assistant_phone: "1-865-903-9288",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: "Name",
          second_assistant_phone: "99895462545",
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Ea.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "1",
          },
          region: {
            id: 1,
            name_uz: "Qoraqalpog`iston Respublikasi",
            name_ru: "Республика Каракалпакстан",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 1,
            name_uz: "Beruniy",
            name_ru: "Беруний",
            region_id: "1",
            created_at: null,
            updated_at: null,
          },
        },
        {
          id: 7,
          shop_id: "7",
          region_id: "2",
          sub_region_id: "5",
          status: "show",
          address: "484 Cloyd Trail\nJastmouth, VA 09045",
          longitude: "-157.611077",
          latitude: "-31.000472",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Brody Hessel",
          assistant_phone: "+1.980.206.5394",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: null,
          second_assistant_phone: null,
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Ab.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "7",
          },
          region: {
            id: 2,
            name_uz: "Toshkent",
            name_ru: "Ташкент",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 5,
            name_uz: "Bektemir",
            name_ru: "Бектемир",
            region_id: "2",
            created_at: null,
            updated_at: null,
          },
        },
        {
          id: 8,
          shop_id: "8",
          region_id: "9",
          sub_region_id: "91",
          status: "show",
          address: "703 Kayla Plaza\nNew Kellimouth, TX 66581-6166",
          longitude: "-111.241653",
          latitude: "-17.436936",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Estrella Lynch",
          assistant_phone: "(908) 709-1566",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: null,
          second_assistant_phone: null,
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Quo.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "8",
          },
          region: {
            id: 9,
            name_uz: "Namangan",
            name_ru: "Наманган",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 91,
            name_uz: "Davlatobod",
            name_ru: "Давлатобод",
            region_id: "9",
            created_at: null,
            updated_at: null,
          },
        },
        {
          id: 9,
          shop_id: "9",
          region_id: "1",
          sub_region_id: "1",
          status: "show",
          address: "1831 Luettgen Ford\nLake Keeganberg, UT 05023-5225",
          longitude: "129.814433",
          latitude: "33.005376",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Wilburn Corkery II",
          assistant_phone: "+1-352-768-2874",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: null,
          second_assistant_phone: null,
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Qui.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "9",
          },
          region: {
            id: 1,
            name_uz: "Qoraqalpog`iston Respublikasi",
            name_ru: "Республика Каракалпакстан",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 1,
            name_uz: "Beruniy",
            name_ru: "Беруний",
            region_id: "1",
            created_at: null,
            updated_at: null,
          },
        },
        {
          id: 10,
          shop_id: "10",
          region_id: "2",
          sub_region_id: "5",
          status: "show",
          address: "387 McClure Ville Apt. 381\nLake Demarco, NH 65951",
          longitude: "59.382925",
          latitude: "15.671856",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Rosie Moore",
          assistant_phone: "+1-480-253-1824",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: null,
          second_assistant_phone: null,
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Quo.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "10",
          },
          region: {
            id: 2,
            name_uz: "Toshkent",
            name_ru: "Ташкент",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 5,
            name_uz: "Bektemir",
            name_ru: "Бектемир",
            region_id: "2",
            created_at: null,
            updated_at: null,
          },
        },
        {
          id: 11,
          shop_id: "11",
          region_id: "2",
          sub_region_id: "5",
          status: "show",
          address: "16964 Kreiger Parks Apt. 315\nEast Frederikmouth, MD 47084",
          longitude: "-3.32526",
          latitude: "-71.458165",
          work_time_from: "09:00",
          work_time_to: "21:00",
          assistant_name: "Imogene Fahey",
          assistant_phone: "+1-240-778-7320",
          assistant_messenger: "@Dishkan_Kh",
          second_assistant_name: null,
          second_assistant_phone: null,
          second_assistant_messenger: null,
          url_image_path_one: "https://api.dressme.uz/storage/Qui.",
          url_image_path_two: null,
          url_image_path_three: null,
          created_at: null,
          updated_at: null,
          pivot: {
            product_id: "1",
            shop_location_id: "11",
          },
          region: {
            id: 2,
            name_uz: "Toshkent",
            name_ru: "Ташкент",
            created_at: null,
            updated_at: null,
          },
          sub_region: {
            id: 5,
            name_uz: "Bektemir",
            name_ru: "Бектемир",
            region_id: "2",
            created_at: null,
            updated_at: null,
          },
        },
      ],
      ratings: [
        {
          id: 1,
          user_id: "1",
          rateable_id: "1",
          rateable_type: "App\\Models\\Product",
          score: "3",
          comment: "Some comment 1",
          reply: null,
          created_at: "06-12-2023",
          updated_at: "06-12-2023",
          user: {
            id: 1,
            name: "Loren Durgan",
            surname: "Anderson",
            phone: "425.272.7888",
            email: "kaylee.zemlak@hotmail.com",
            is_email_verified: "0",
            email_verified_at: null,
            created_at: null,
            updated_at: null,
          },
        },
      ],
    },
  });

  const [dressInfo] = useContext(dressMainData);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [openSizeList, setOpenSizeList] = useState(false);
  const [tableSizes, setTableSizes] = useState(false);
  const [locations, setLocations] = useState(false);

  // color context---
  const [colorId, setcolorId] = useContext(SliderPhotosColorContext);

  const toggleTableSizes = useCallback(() => setTableSizes(false), []);
  const toggleLocations = useCallback(() => setLocations(false), []);

  const slider = useRef(null);

  // For DropUp
  useEffect(() => {
    if (tableSizes || locations || openLocationModal || openSizeList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [tableSizes, locations, openLocationModal, openSizeList]);

  const [openTab, setOpenTab] = useState(1);

  let settings = {
    focusOnSelect: true,
    infinite: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    speed: 500,
  };

  const contentSize = (data) => {
    if (data?.category_id === "1") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_head_girth}{" "}
                {data?.max_head_girth ? "- " + data?.max_head_girth : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "2") {
      return (
        <section className="w-[220px] h-[135px] p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_wear_size}{" "}
                {data?.max_wear_size ? "- " + data?.max_wear_size : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Обхват груди, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_chest_girth}{" "}
                {data?.max_chest_girth ? "- " + data?.max_chest_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват талии, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_waist_girth}{" "}
                {data?.max_waist_girth ? "- " + data?.max_waist_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular">
              Обхват бедер, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_hip_girth}{" "}
                {data?.max_hip_girth ? "- " + data?.max_hip_girth : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "3") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Размер в числах:
              <span className="ml-auto">
                {data?.min_wear_size}{" "}
                {data?.max_wear_size ? "- " + data?.max_wear_size : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват талии, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_waist_girth}{" "}
                {data?.max_waist_girth ? "- " + data?.max_waist_girth : null}
              </span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Обхват бедер, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_hip_girth}{" "}
                {data?.max_hip_girth ? "- " + data?.max_hip_girth : null}
              </span>
            </div>

            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Рост, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_height}{" "}
                {data?.max_height ? "- " + data?.max_height : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "4") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Размер в числах, <span className="text-[#a5a5a5] ml-1">в см</span>
              :<span className="ml-auto">{data?.wear_size}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular">
              Длина стопы, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">
                {data?.min_foot_length}{" "}
                {data?.max_foot_length ? "- " + data?.max_foot_length : null}
              </span>
            </div>
          </article>
        </section>
      );
    } else if (data?.category_id === "5") {
      return (
        <section className="w-[220px] h-fit p-[5px] ">
          <article className="w-full flex flex-col items-center justify-start font-AeonikProMedium text-sm text-center">
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Размер в числах, <span className="text-[#a5a5a5] ml-1">в см</span>
              :<span className="ml-auto">{data?.wear_size}</span>
            </div>
            <div className="w-full flex items-center justify-between text-base font-AeonikProRegular mb-[10px]">
              Длина, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{data?.length}</span>
            </div>
            <div className="w-full flex items-center justify-start text-base font-AeonikProRegular mb-[10px]">
              Ширина, <span className="text-[#a5a5a5] ml-1">в см</span>:
              <span className="ml-auto">{data?.width}</span>
            </div>
          </article>
        </section>
      );
    }
  };

  const [copyText, setCopyText] = useState("");
  const [copyCardNumber, setCopyCardNumber] = useState("");

  const skuRef = useRef();
  const cardRef = useRef();

  const handleCopyText = () => {
    navigator.clipboard.writeText(skuRef.current.innerText);
  };
  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(cardRef.current.innerText);
  };

  // Regions show

  let existRegions = [];
  let existRegionsObj = {};

  data?.product?.locations?.map((item) => {
    existRegions.push(item?.region_id);
    existRegionsObj[item?.region_id] = item?.region?.name_ru;
  });

  const uniqueRegions = new Set(existRegions);

  existRegions = [...uniqueRegions];

  // Location state

  let checkedData = {};

  const [selectedLocation, setSelectedLocation] = useState(
    data?.product?.locations[0]
  );

  let checkTableShow = data?.product?.sizes?.find(
    (item) => item?.shop_location_id == selectedLocation?.id
  );

  checkedData = selectedLocation;

  // Selected color ------------------

  const [selectedColor, setSelectedColor] = useState(data?.product?.colors[0]);

  useEffect(() => {
    setSelectedLocation(data?.product?.locations[0]);
    setSelectedColor(data?.product?.colors[0]);
  }, [data]);

  const filterColorsOnSelect = (id) => {
    setSelectedColor(
      data?.product?.colors?.find((item) => item?.pivot?.id === id)
    );
  };

  // Remove duplicates and select only first -----

  let idMap = new Map();
  let uniqueArray = [];

  data?.product?.photos?.forEach((obj) => {
    if (!idMap.has(obj.product_color_id)) {
      idMap.set(obj.product_color_id, obj);
      uniqueArray.push(obj);
    }
  });

  // Selected size --------

  const [selectedSize, setSelectedSize] = useState(null);
  console.log(selectedSize);

  return (
    <main className="w-full relative h-full mt-3 md:mt-4">
      <div className="tableSizes">
        <section
          onClick={() => setTableSizes(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            tableSizes ? "" : "hidden"
          }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
            tableSizes ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <TableSizesDropUp onClick={toggleTableSizes} />
        </section>
      </div>
      <div className="locations">
        <section
          onClick={() => setLocations(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            locations ? "" : "hidden"
          }`}
        ></section>
        <locations
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300  overflow-hidden ${
            locations ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <LocationDropUp onClick={toggleLocations} />
        </locations>
      </div>

      {/* 1 */}
      <section className="w-full hidden md:block">
        <section className="h-fit flex items-center mb-4">
          <article className="hidden md:flex items-center justify-start ">
            {data?.product?.overall_rating ? (
              <>
                {" "}
                <p className="w-fit flex items-center gap-x-[1px]">
                  <StarIcons />
                </p>
                <article className="mr-[25px] flex items-center w-fit ml-2 text-base md:text-[14px]">
                  <p className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                    {data?.product?.overall_rating}
                  </p>
                  <p className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                    ({data?.product?.rated_users_count} votes)
                  </p>
                </article>
              </>
            ) : null}
            <article>
              <div className="flex items-center justify-start">
                <span className="mr-[6px]">
                  <ProductArticleIcons />
                </span>
                <span className="text-sm font-AeonikProRegular leading-4 tracking-[1%]">
                  Артикул:
                </span>
                <div className="text-sm bg-transparent w-fit font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]" />
                <div
                  ref={skuRef}
                  className="w-fit text-sm font-AeonikProRegular text-[#a1a1a1]"
                >
                  {data?.product?.sku}
                </div>
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </div>
            </article>
          </article>
        </section>
        <section className="w-full mb-8">
          <p className="not-italic font-AeonikProMedium text-xl md:text-[22px] leading-7 text-TextTitle tracking-[1%]">
            {data?.product?.name_ru}
          </p>
        </section>

        {/* Desktop Product Details*/}
        <section className="h-fit hidden md:flex md:flex-col items-center mb-[9px]">
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <MarketIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Магазин:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.shop?.name}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <section className="w-fit flex items-center h-fit text-base md:text-sm mb-10 md:mb-0">
                <div className="not-italic mr-3  font-AeonikProMedium leading-4 text-black tracking-[1%]">
                  Сезон:
                </div>

                {data?.product?.seasons?.map((item) => {
                  return (
                    <>
                      <figure className="flex items-center pr-3 mr-3 last:border-none border-r-[2px] border-searchBgColor">
                        <img
                          src={
                            item?.name_ru === "Весна"
                              ? springSeason
                              : item?.name_ru === "Лето"
                              ? summerSeason
                              : item?.name_ru === "Осень"
                              ? autummSeason
                              : item?.name_ru === "Зима"
                              ? winterSeason
                              : null
                          }
                          alt=""
                        />

                        <figcaption className="not-italic  ml-1 font-AeonikProMedium md:font-AeonikProRegular leading-4 text-black tracking-[1%]">
                          {item?.name_ru}
                        </figcaption>
                      </figure>
                    </>
                  );
                })}
              </section>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <DeliveryIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Доставка:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.shop?.delivery?.name_ru}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <SettingsIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Производитель:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  Узбекистан
                </p>
              </article>
            </div>
          </div>
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <CategoryUsersIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Возрастная категория:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.min_age_category} -{" "}
                  {data?.product?.max_age_category}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex items-center mb-1">
                <article className="w-fit flex items-center">
                  <ChapterIcon colors={"#000"} />
                  <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                    Раздел:
                  </div>
                </article>
                <article className="w-fit ml-2 flex flex-wrap">
                  {data?.product?.sections?.map((item, i) => {
                    if (i < 2) {
                      return (
                        <p className="mr-[5px] not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                          {item?.name_ru}
                        </p>
                      );
                    }
                  })}
                </article>
              </div>
              <div className="flex flex-wrap">
                {data?.product?.sections?.map((item, i) => {
                  if (i > 1) {
                    return (
                      <p className="mr-[5px] not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                        {item?.name_ru}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          {/* ---- */}
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <CategoryIcon />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Категория:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.category?.name_ru}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex items-center mb-1">
                <article className="w-fit flex items-center">
                  <TypeIcon />
                  <div className="not-italic flex items-center  font-AeonikProMedium text-[14px] leading-0 text-black tracking-[1%] ml-2">
                    Тип:
                  </div>
                </article>
                <article className="w-fit ml-2 flex text-[14px] flex-wrap font-AeonikProRegular">
                  {data?.product?.type?.name_ru}
                </article>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="w-full flex items-center mb-4">
            <div className="w-1/2 flex items-center">
              <article className="w-fit flex items-center">
                <QualityIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Качество:
                </div>
              </article>
              <article className="w-fit ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  {data?.product?.quality_ru}
                </p>
              </article>
            </div>
            <div className="w-1/2 flex items-center ">
              <article className="w-fit flex items-center">
                <PaymeSystemIcons colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-2">
                  Номер карты:
                </div>
              </article>
              <article className="w-fit flex items-center ml-2">
                <div className="text-sm w-fit bg-transparent font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]" />
                <div
                  ref={cardRef}
                  className="w-fit text-sm font-AeonikProRegular text-[#a1a1a1]"
                >
                  {data?.product?.seller?.card_number}
                </div>
                <button
                  type="button"
                  onClick={handleCopyCardNumber}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </article>
            </div>
          </div>
        </section>
      </section>

      {/* 2 */}
      <section className="w-full md:border-t md:border-y md:border-searchBgColor md:py-[25px] ">
        <article className="w-full block md:hidden">
          <button
            onClick={() => setTableSizes(true)}
            className="text-[13px] font-AeonikProMedium text-borderWinter border-b border-dashed border-borderWinter mb-5"
          >
            Таблица размеров
          </button>
        </article>
        <article className="w-full flex items-center justify-between bg-[#fdfdfd] md:bg-white border-y md:border-none mb-4 text-sm font-AeonikProMedium">
          <div className="hidden md:flex items-center">
            <ProductSwitchIcons colors={"#757575"} />
            <div className="not-italic ml-2 mr-3 font-AeonikProRegular md:font-AeonikProMedium leading-4 text-[#757575]">
              Цвет:
            </div>
            <p className="mr-1 not-italic leading-4 text-[#757575]">
              {selectedColor?.name_ru}
            </p>
          </div>
          {data?.product?.locations?.length ? (
            <div className="flex items-center py-3 md:py-0">
              <span className="hidden md:block">
                <LocationColoursIcons colors={"#757575"} />
              </span>
              <span className="block md:hidden">
                <LocationColoursIcons colors={"#303030"} />
              </span>
              <p className="text-[#303030] md:text-[#757575] font-AeonikProRegular md:font-AeonikProMedium text-base md:text-sm ml-[3px] md:ml-2">
                {selectedLocation?.region?.name_ru},{" "}
                {selectedLocation?.sub_region?.name_ru}
              </p>
            </div>
          ) : null}

          {data?.product?.locations?.length > 1 ? (
            <button
              type="primary"
              onClick={() => setOpenLocationModal(true)}
              className="hidden md:block text-borderWinter font-AeonikProMedium"
            >
              В других локациях
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="primary"
            onClick={() => setLocations(true)}
            className="block md:hidden text-borderWinter font-AeonikProMedium"
          >
            В других локациях
          </button>
          <Modal
            centered
            width={700}
            open={openLocationModal}
            onOk={() => setOpenLocationModal(false)}
            onCancel={() => setOpenLocationModal(false)}
            footer={null}
            className="w-full p-6"
          >
            <div className="w-full px-[25px] pb-[30px] pt-[20px]">
              <div className="text-2xl font-AeonikProRegular mb-[30px]">
                Выберите локацию
              </div>
              <div className="h-[300px] overflow-y-auto mb-[20px] VerticelScroll pr-2">
                <Radio.Group
                  style={{
                    width: "100%",
                  }}
                  defaultValue={selectedLocation?.id}
                  // onChange={onChange}
                >
                  {existRegions.map((item) => {
                    return (
                      <>
                        <div className="font-AeonikProRegular text-lg border-b border-[#f0f0f0] mb-[15px]">
                          {existRegionsObj[item]}
                        </div>

                        <div className="w-full">
                          {data?.product?.locations.map((data) => {
                            if (data?.sub_region?.region_id === item) {
                              return (
                                <div
                                  onClick={() => {
                                    checkedData = data;
                                  }}
                                  key={data.id}
                                  className="mb-[8px]"
                                >
                                  <Radio
                                    value={data?.id}
                                    name="location"
                                    className="text-lg font-AeonikProRegular"
                                  >
                                    {data?.sub_region?.name_ru} ({data?.address}
                                    )
                                  </Radio>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </>
                    );
                  })}
                </Radio.Group>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpenLocationModal(false);
                  setSelectedLocation(checkedData);
                  setSelectedSize(null);
                }}
                className="w-full flex justify-end text-borderWinter text-lg font-AeonikProMedium"
              >
                Готово
              </button>
            </div>
          </Modal>
        </article>

        <article className="h-fit flex items-center justify-between mb-4 md:mb-0">
          <article className="flex md:hidden items-center justify-start ">
            <p className="w-fit flex items-center gap-x-[1px]">
              <StarIcons />
            </p>
            <article className="flex items-center w-fit ml-2 text-base md:text-[14px]">
              <p className="not-italic font-AeonikProMedium mt-1 leading-4 text-black tracking-[1%]">
                4.7
              </p>
              <p className=" pl-1 not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                (265)
              </p>
              <div className="text-setTexOpacity mx-[10px]">|</div>
              <p className=" not-italic font-AeonikProRegular mt-1 leading-4 text-setTexOpacity tracking-[1%]">
                678 заказов
              </p>
            </article>
          </article>
          <button className="w-10 h-10 flex md:hidden items-center justify-center rounded-xl active:scale-95 border border-searchBgColor bg-btnBgColor">
            <img src={HeartImg} alt="" className="w-5 h-5" />
          </button>
        </article>

        {/* --------------------------- Images Slider ------------------------ */}
        <article className="w-full hidden md:flex items-center">
          <button
            className="button mt-[-5px]"
            onClick={() => slider?.current?.slickPrev()}
          >
            {data?.product?.photos?.length > 7 ? (
              <GrFormPrevious size={30} />
            ) : null}
          </button>
          <Slider
            ref={slider}
            {...settings}
            slidesToShow={uniqueArray?.length}
            className="hidden md:flex md:w-[88%] h-[80px] items-center"
          >
            {selectedSize
              ? uniqueArray?.map((data) => {
                  return (
                    <div
                      className={`${
                        data?.product_color_id ===
                        selectedSize?.product_color_id
                          ? "cursor-pointer"
                          : "opacity-40 cursor-not-allowed"
                      } `}
                    >
                      <div
                        key={data.id}
                        className="!w-[64px] h-[72px] rounded-lg  bg-black"
                        onClick={() => {
                          if (
                            data?.product_color_id ===
                            selectedSize?.product_color_id
                          ) {
                            filterColorsOnSelect(data?.product_color_id);
                            setcolorId(data?.product_color_id);
                          } else {
                            return false;
                          }
                        }}
                        style={{
                          backgroundImage: `url("${data?.url_photo}")`,
                          backgroundColor: "rgba(0,0,0,0.6)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  );
                })
              : uniqueArray?.map((data) => {
                  return (
                    <div>
                      <div
                        key={data.id}
                        className="!w-[64px] h-[72px] rounded-lg cursor-pointer bg-black"
                        onClick={() => {
                          filterColorsOnSelect(data?.product_color_id);
                          setcolorId(data?.product_color_id);
                        }}
                        style={{
                          backgroundImage: `url("${data?.url_photo}")`,
                          backgroundColor: "rgba(0,0,0,0.6)",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  );
                })}
          </Slider>
          <button
            className="button mt-[-5px]"
            onClick={() => slider?.current?.slickNext()}
          >
            {data?.product?.photos?.length > 7 ? (
              <GrFormNext size={30} />
            ) : null}
          </button>
        </article>

        <article className="w-full hidden md:flex items-center text-sm">
          {checkTableShow ? (
            data?.product?.category_id === "1" ? null : (
              <button
                type="primary"
                onClick={() => setOpenSizeList(true)}
                className="not-italic mr-3 font-AeonikProRegular mt-[30px] border-b border-dashed border-borderWinter md:font-AeonikProMedium text-borderWinter"
              >
                Таблица размеров
              </button>
            )
          ) : null}

          <Modal
            centered
            open={openSizeList}
            onOk={() => setOpenSizeList(false)}
            onCancel={() => setOpenSizeList(false)}
            width={1000}
            footer={null}
            className="w-full p-6"
          >
            {data?.product?.category_id === "2" ? (
              <ul className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="flex items-center justify-between bg-[#F4F6FB] px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>Размер в числах</li>
                  <li>Буквенный Размер</li>
                  <li>Обхват груди, в см</li>
                  <li>Обхват талии, в см</li>
                  <li>Обхват бедер, в см</li>
                </div>
                <div className="w-full">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                          <li>
                            {data?.min_wear_size}{" "}
                            {data?.max_wear_size
                              ? "- " + data?.max_wear_size
                              : null}
                          </li>
                          <li>{data?.letter_size}</li>
                          <li>
                            {data?.min_chest_girth}{" "}
                            {data?.max_chest_girth
                              ? "- " + data?.max_chest_girth
                              : null}
                          </li>
                          <li>
                            {data?.min_waist_girth}{" "}
                            {data?.max_waist_girth
                              ? "- " + data?.max_waist_girth
                              : null}
                          </li>
                          <li>
                            {data?.min_hip_girth}{" "}
                            {data?.max_hip_girth
                              ? "- " + data?.max_hip_girth
                              : null}
                          </li>
                        </div>
                      );
                    }
                  })}
                </div>
              </ul>
            ) : null}
            {data?.product?.category_id === "3" ? (
              <ul className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="flex items-center justify-between bg-[#F4F6FB] px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>Размер в числах</li>
                  <li>Буквенный Размер</li>
                  <li>Рост, в см</li>
                  <li>Обхват талии, в см</li>
                  <li>Обхват бедер, в см</li>
                </div>
                <div className="w-full">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                          <li>
                            {data?.min_wear_size}{" "}
                            {data?.max_wear_size
                              ? "- " + data?.max_wear_size
                              : null}
                          </li>
                          <li>{data?.letter_size}</li>
                          <li>
                            {data?.min_height}{" "}
                            {data?.max_height ? "- " + data?.max_height : null}
                          </li>
                          <li>
                            {data?.min_waist_girth}{" "}
                            {data?.max_waist_girth
                              ? "- " + data?.max_waist_girth
                              : null}
                          </li>
                          <li>
                            {data?.min_hip_girth}{" "}
                            {data?.max_hip_girth
                              ? "- " + data?.max_hip_girth
                              : null}
                          </li>
                        </div>
                      );
                    }
                  })}
                </div>
              </ul>
            ) : null}
            {data?.product?.category_id === "4" ? (
              <ul className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="flex items-center justify-between bg-[#F4F6FB] px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>Размер в числах, в см</li>
                  <li>Длина стопы, в см</li>
                </div>
                <div className="w-full">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                          <li>{data?.wear_size}</li>
                          <li>
                            {data?.min_foot_length}{" "}
                            {data?.max_foot_length
                              ? "- " + data?.max_foot_length
                              : null}
                          </li>
                        </div>
                      );
                    }
                  })}
                </div>
              </ul>
            ) : null}
            {data?.product?.category_id === "5" ? (
              <ul className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="flex items-center justify-between bg-[#F4F6FB] px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                  <li>Размер в числах, в см</li>
                  <li>Буквенный Размер</li>
                  <li>Длина, в см</li>
                  <li>Ширина, в см</li>
                </div>
                <div className="w-full">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <div className="flex items-center justify-between px-[25px] py-[15px] rounded-lg text-base font-AeonikProRegular">
                          <li>{data?.wear_size}</li>
                          <li>{data?.letter_size}</li>
                          <li>{data?.length}</li>
                          <li>{data?.width}</li>
                        </div>
                      );
                    }
                  })}
                </div>
              </ul>
            ) : null}
          </Modal>
        </article>

        <article className="w-full hidden md:flex items-center">
          <section className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {data?.product?.category_id === "1"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border  hover:border-fullBlue`}
                      >
                        <Popover
                          key={data?.id}
                          trigger={data?.min_head_girth ? "hover" : "false"}
                          content={() => contentSize(data)}
                          className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg px-4 flex flex-col items-center justify-center"
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                          >
                            {data?.one_size ? "ONE SIZE" : null}
                          </p>
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}

            {data?.product?.category_id === "2"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border   hover:border-fullBlue`}
                      >
                        <Popover
                          key={data.id}
                          trigger="hover"
                          content={() => contentSize(data)}
                          className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg  px-4 flex flex-col items-center justify-center"
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                          >
                            {data?.letter_size}
                          </p>
                          {data?.letter_size ? (
                            <span className="text-[10px] font-AeonikProRegular text-[#757575]">
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </span>
                          ) : (
                            <p
                              className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                            >
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </p>
                          )}
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}

            {data?.product?.category_id === "3"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border   hover:border-fullBlue`}
                      >
                        <Popover
                          key={data.id}
                          trigger="hover"
                          content={() => contentSize(data)}
                          className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg px-4 flex flex-col items-center justify-center"
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                          >
                            {data?.letter_size}
                          </p>
                          {data?.letter_size ? (
                            <span className="text-[10px] font-AeonikProRegular text-[#757575]">
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </span>
                          ) : (
                            <p
                              className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                            >
                              {data?.min_wear_size}{" "}
                              {data?.max_wear_size
                                ? "- " + data?.max_wear_size
                                : null}
                            </p>
                          )}
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}

            {data?.product?.category_id === "4"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border   hover:border-fullBlue`}
                      >
                        <Popover
                          key={data.id}
                          trigger="hover"
                          content={() => contentSize(data)}
                          className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg px-4 flex flex-col items-center justify-center"
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                          >
                            {data?.wear_size}
                          </p>
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}

            {data?.product?.category_id === "5"
              ? data?.product?.sizes?.map((data) => {
                  if (data?.shop_location_id == selectedLocation?.id) {
                    return (
                      <div
                        onClick={() => {
                          setSelectedSize(data);
                        }}
                        className={`${
                          data?.id === selectedSize?.id
                            ? "border-fullBlue"
                            : "border-[#dadada]"
                        }  h-fit w-fit mt-4 rounded-lg border   hover:border-fullBlue`}
                      >
                        <Popover
                          key={data.id}
                          trigger="hover"
                          content={() => contentSize(data)}
                          className="h-11 w-[80px] md:w-auto cursor-pointer rounded-lg px-4 flex flex-col items-center justify-center"
                        >
                          <p
                            className={`font-AeonikProMedium text-sm uppercase text-center text-black`}
                          >
                            {data?.letter_size}
                          </p>
                          <span className="text-[10px] font-AeonikProRegular text-[#757575]">
                            {data?.wear_size}
                          </span>
                        </Popover>
                      </div>
                    );
                  }
                })
              : null}

            <p className="w-[80px] h-11 flex md:hidden items-center justify-center rounded-lg border border-searchBgColor">
              <CircleWarningIcons colors={"#000"} />
            </p>
          </section>
        </article>

        {/* Mobile Product Infos */}
        <article className="w-full flex md:hidden flex-col items-center">
          <div className="w-full text-xl font-AeonikProMedium mb-[18px]">
            Line-Pattern Zipper Sweatshirt (Original High Quality)
          </div>
          <div className="w-full flex flex-col items-center border border-[#f0f0f0] p-[15px] bg-categoryModalBgColor rounded-xl">
            <div className="w-full flex items-center mb-4">
              <div className="flex items-center text-base font-AeonikProRegular">
                <DeliveryIcons />
                <span className="ml-[6px]">Метод доставки:</span>
              </div>
              <div className="text-sm font-AeonikProRegular ml-[6px] text-[#666]">
                Собственная доставка
              </div>
            </div>
            <div className="w-full flex items-center mb-4">
              <section className="w-fit flex items-center h-fit text-base">
                <div className="flex items-center font-AeonikProRegular leading-4 tracking-[1%]">
                  <CalendarIcons colors={"#000"} />
                  <span className="ml-[6px]">Сезон:</span>
                </div>
                <figure className="flex items-center ml-[6px]">
                  <img src={winterSeason} alt="" />
                  <figcaption className="font-AeonikProRegular leading-4 tracking-[1%]">
                    Зима
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={summerSeason} alt="" />
                  <figcaption className="not-italic ml-1 font-AeonikProRegular leading-4 text-black tracking-[1%]">
                    Весна
                  </figcaption>
                </figure>
                <div className="w-[1px] border h-3 border-searchBgColor mx-3"></div>
                <figure className="flex items-center">
                  <img src={autummSeason} alt="" />
                  <figcaption className="ml-1 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                    Осень
                  </figcaption>
                </figure>
              </section>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="flex items-center">
                <MarketIcons colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Магазин:
                </div>
              </article>
              <article className="ml-2">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%]">
                  Nike Store Official Dealer
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <ProductArticleIcons />
              <span className="text-base font-AeonikProRegular leading-4 tracking-[1%] ml-[6px]">
                Артикль:
              </span>
              <input
                type="text"
                readOnly
                value={copyText}
                onChange={(e) => setCopyText(e.target.value)}
                className="text-sm bg-transparent w-[68px] font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]"
              />
              <button
                type="button"
                onClick={handleCopyText}
                className="cursor-pointer ml-[8px]"
              >
                <AddCopyCheckedIcon />
              </button>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <CategoryUsersIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Возрастная категория:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  36-44
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <QualityIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Качество:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Оригинал
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <SettingsIcon colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Производитель:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Узбекистан
                </p>
              </article>
            </div>
            <div className="w-full flex items-center mb-4">
              <article className="w-fit flex items-center">
                <ChapterIcon colors={"#000"} />
                <div className="not-italic flex items-center   font-AeonikProMedium text-[14px] leading-4 text-black tracking-[1%] ml-[6px]">
                  Раздел:
                </div>
              </article>
              <article className="w-fit ml-[6px]">
                <p className="not-italic font-AeonikProRegular text-[14px] leading-4 text-[#666] tracking-[1%]">
                  Спортивный (Тренировка)
                </p>
              </article>
            </div>
            <div className="w-full flex items-center">
              <article className="w-fit flex items-center">
                <PaymeSystemIcons colors={"#000"} />
                <div className="not-italic flex items-center font-AeonikProRegular text-base leading-4 text-black tracking-[1%] ml-[6px]">
                  Номер карты:
                </div>
              </article>
              <article className="w-fit flex items-center ml-[6px]">
                <input
                  className="text-sm bg-transparent w-[138px] font-AeonikProRegular ml-[6px] text-[#a1a1a1] leading-4 tracking-[1%]"
                  value={copyCardNumber}
                  onChange={(e) => setCopyCardNumber(e.target.value)}
                  readOnly
                  type="text"
                />
                <button
                  type="button"
                  onClick={handleCopyCardNumber}
                  className="cursor-pointer ml-[8px]"
                >
                  <AddCopyCheckedIcon />
                </button>
              </article>
            </div>
          </div>
        </article>

        {/* Mobile Price */}
        <article
          className={`w-full h-fit mt-[34px] pb-6 md:pb-0 border-b md:border-none md:hidden`}
        >
          <article className="h-fit w-full flex items-center justify-between mb-2 gap-x-2">
            <address className="max-w-1/2 md:max-w-[70%] w-full">
              <a
                className=" w-full bg-fullBlue active:scale-95  active:opacity-70 text-white rounded-lg h-[44px] flex gap-x-1 ll:gap-x-2 items-center justify-center"
                href="tel:+998 (97) 720-30-40"
              >
                <PhoneIcons colors={"#fff"} />
                <p className="text-base ">Samandar</p>
              </a>
            </address>
            <address className=" max-w-1/2 md:max-w-[35%] w-full">
              <a
                className={` w-full h-[44px] active:scale-95  active:opacity-70 px-5 flex gap-x-1 ll:gap-x-2 items-center justify-center  rounded-lg  text-fullBlue border border-fullBlue`}
                href="https://t.me/itpark_uz"
              >
                <p className="w-7 h-7  bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                  <FaTelegramPlane size={16} />
                </p>{" "}
                <p className="text-base block">@itpark_uz</p>{" "}
              </a>
            </address>
          </article>
        </article>
      </section>

      {/* 3 This Section For Desctop Version*/}
      <section className=" w-full hidden md:block md:pb-[35px] pt-[25px] md:border-b border-searchBgColor mb-12 md:mb-0">
        <article className="w-full flex items-center mb-[14px] md:mb-0">
          {selectedSize ? (
            <section className="w-fit flex items-center">
              <article className="flex md:hidden">
                <DollorIcons colors={"#000"} />
                <p className="text-base font-AeonikProRegular ml-[6px]">
                  Цена:
                </p>
              </article>
              <span className="text-base font-AeonikProMedium mr-3">от</span>
              <p className="hidden md:block font-AeonikProMedium text-[20px] text-black">
                {selectedSize?.discount_price
                  ? parseInt(selectedSize?.discount_price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")
                  : parseInt(selectedSize?.price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")}{" "}
                сум
              </p>
              {selectedSize?.discount_price ? (
                <p className="hidden md:block ml-[10px] font-AeonikProRegular line-through text-[18px] text-setTexOpacity">
                  {parseInt(selectedSize?.price)
                    ?.toLocaleString()
                    ?.split(",")
                    .join(" ")}{" "}
                  сум
                </p>
              ) : null}
            </section>
          ) : (
            <section className="w-fit flex items-center">
              <article className="flex md:hidden">
                <DollorIcons colors={"#000"} />
                <p className="text-base font-AeonikProRegular ml-[6px]">
                  Цена:
                </p>
              </article>
              <span className="text-base font-AeonikProMedium mr-3">от</span>
              <p className="hidden md:block font-AeonikProMedium text-[20px] text-black">
                {data?.product?.cost?.discount_price
                  ? parseInt(data?.product?.cost?.discount_price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")
                  : parseInt(data?.product?.cost?.price)
                      ?.toLocaleString()
                      ?.split(",")
                      .join(" ")}{" "}
                сум
              </p>
              {data?.product?.cost?.discount_price ? (
                <p className="hidden md:block ml-[10px] font-AeonikProRegular line-through text-[18px] text-setTexOpacity">
                  {parseInt(data?.product?.cost?.price)
                    ?.toLocaleString()
                    ?.split(",")
                    .join(" ")}{" "}
                  сум
                </p>
              ) : null}
            </section>
          )}

          {selectedSize ? (
            <section
              className={`${
                selectedSize?.discount_percent ? "flex" : "hidden"
              } w-[84px] h-9 md:w-[100px] md:h-11 cursor-pointer  items-center justify-center border border-searchBgColor rounded-lg ml-8 active:scale-95`}
            >
              <p>
                <DiscountShapeIcons />
              </p>
              <p className="ml-[6px] font-AeonikProMedium text-sm md:text-sm text-red-700">
                -{selectedSize?.discount_percent}%
              </p>
            </section>
          ) : data?.product?.cost?.discount_percent ? (
            <section className="w-[84px] h-9 md:w-[100px] md:h-11 cursor-pointer flex items-center justify-center border border-searchBgColor rounded-lg ml-8 active:scale-95">
              <p>
                <DiscountShapeIcons />
              </p>
              <p className="ml-[6px] font-AeonikProMedium text-sm md:text-sm text-red-700">
                -{data?.product?.cost?.discount_percent}%
              </p>
            </section>
          ) : null}

          <section
            className={`w-fit ${dressInfo?.TextColorSeason} items-center text-sm hidden md:flex ml-8`}
          >
            <p className="font-AeonikProRegular text-right">В наличии:</p>
            <p className="ml-2 font-AeonikProMedium text-right">
              {selectedSize
                ? selectedSize?.amount
                : data?.product?.sizes_sum_amount}
            </p>
          </section>
        </article>

        {/* ------------------------------------------------------------------------------------------- */}

        {/* Social btns 1 */}
        <article className="w-full flex items-center justify-between gap-x-3 md:gap-x-0 md:mt-6">
          <article className="w-full flex items-center">
            {selectedLocation?.assistant_phone ? (
              <address className="w-[65%] md:w-fit">
                <a
                  className="w-[232px] h-12 md:h-[52px] px-5  rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex gap-x-3 items-center justify-center bg-fullBlue"
                  href={`${"tel:" + selectedLocation?.assistant_phone}`}
                >
                  <PhoneIcons colors={"#fff"} />{" "}
                  {selectedLocation?.assistant_name}
                </a>
              </address>
            ) : null}

            {selectedLocation?.assistant_messenger ? (
              <address className="w-[35%] md:w-fit  ml-4">
                <a
                  target="_blank"
                  className={`w-[232px] h-12 md:h-[52px] px-5 rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center flex gap-x-3 items-center justify-center text-fullBlue border border-fullBlue`}
                  href={`https://t.me/${selectedLocation?.assistant_messenger?.slice(
                    1
                  )}`}
                >
                  <span className="w-7 h-7 bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                    <FaTelegramPlane size={16} />
                  </span>{" "}
                  <span>{selectedLocation?.assistant_messenger}</span>{" "}
                </a>
              </address>
            ) : null}
          </article>
          <article className="w-fit md:ml-3 hidden md:block">
            <button className="w-[52px] h-[52px] hidden md:flex items-center justify-center rounded-xl active:scale-95 border border-searchBgColor">
              <img src={HeartImg} alt="" className="w-5 h-5" />
            </button>
          </article>
        </article>
        {/* Social btns 2 */}
        <article className="w-full flex items-center justify-between gap-x-3 md:gap-x-0 md:mt-6">
          <article className="w-full flex items-center">
            {selectedLocation?.second_assistant_phone ? (
              <address className="w-[65%] md:w-fit">
                <a
                  className="w-[232px] h-12 md:h-[52px] px-5  rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center text-white flex gap-x-3 items-center justify-center bg-fullBlue"
                  href={`${"tel:" + selectedLocation?.second_assistant_phone}`}
                >
                  <PhoneIcons colors={"#fff"} />{" "}
                  {selectedLocation?.second_assistant_name}
                </a>
              </address>
            ) : null}

            {selectedLocation?.second_assistant_messenger ? (
              <address className="w-[35%] md:w-fit  ml-4">
                <a
                  target="_blank"
                  className={`w-[232px] h-12 md:h-[52px] px-5 rounded-[12px] not-italic font-AeonikProMedium text-base leading-4 text-center flex gap-x-3 items-center justify-center text-fullBlue border border-fullBlue`}
                  href={`https://t.me/${selectedLocation?.second_assistant_messenger?.slice(
                    1
                  )}`}
                >
                  <span className="w-7 h-7 bg-fullBlue text-white rounded-full flex items-center px-auto justify-center pr-[2px]">
                    <FaTelegramPlane size={16} />
                  </span>{" "}
                  <span>{selectedLocation?.second_assistant_messenger}</span>{" "}
                </a>
              </address>
            ) : null}
          </article>
        </article>
      </section>

      {/* 4  Buttons */}
      <article className="w-full h-11 flex justify-between items-center rounded-lg bg-[#fafafa] border border-solid mt-6 md:mt-[15px] md:h-12 md:w-full">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          className={`w-[28%] md:w-full md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
            openTab === 1
              ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-auto rounded-lg"
              : ""
          } `}
        >
          <p>Локация</p>
        </button>
        {data?.product?.composition_ru ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            className={`w-[44%] md:w-full md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
              openTab === 2
                ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-auto rounded-lg"
                : ""
            } `}
          >
            <p>Описания товара </p>
          </button>
        ) : null}

        {data?.product?.description_ru ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            className={`w-[28%] md:w-full md:h-[42px] flex items-center justify-center text-sm md:text-base text-center px-5 font-AeonikProRegular ${
              openTab === 3
                ? "shadow-modalCategoryShadow bg-white h-[38px] md:h-[42px] my-auto mx-aut rounded-lg"
                : ""
            } `}
          >
            <p>Состав</p>
          </button>
        ) : null}
      </article>

      {/* 5 */}
      <div className="w-full">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <action className=" flex">
            <LocationOfYandex locationText={selectedLocation?.address} />
          </action>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <action className="mt-5 flex-col gap-y-5 flex">
            <action className="not-italic font-AeonikProRegular text-base">
              Кратко о товаре
            </action>
            <article className="font-AeonikProRegular text-base">
              {data?.product?.description_ru}
            </article>
          </action>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <action className="mt-12 md:mt-5 block">
            <ul>
              <li
                className={
                  "flex items-center not-italic font-AeonikProRegular text-base leading-7 text-black tracking-[1%]"
                }
              >
                <BsCircleFill size={5} className="mx-2" />{" "}
                {data?.product?.composition_ru}
              </li>
            </ul>
          </action>
        </div>
      </div>
    </main>
  );
};

export { ProductDetails };
