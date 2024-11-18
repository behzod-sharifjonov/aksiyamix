import React from "react";
import "./Category.css";
import catalogData from "./Category.json"; // JSON faylni default import qilish.

import { SlEarphones } from "react-icons/sl";
import { IoConstructOutline, IoFastFoodOutline, IoHomeOutline, IoShirtOutline } from "react-icons/io5";
import { RiShirtLine, RiSofaLine } from "react-icons/ri";
import { MdOutlineBlender, MdOutlineCastForEducation } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { TbHorseToy } from "react-icons/tb";
import { FiBook } from "react-icons/fi";
import { TfiPaintRoller } from "react-icons/tfi";
import { GiBroccoli } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";

const CatalogName = [
  { id: "0", name: "Elektronika", icon: <SlEarphones /> },
  { id: "1", name: "Erkaklar kiyimlari", icon: <IoShirtOutline /> },
  { id: "2", name: "Ayollar kiyimlari", icon: <RiShirtLine /> },
  { id: "3", name: "Xizmatlar", icon: <IoConstructOutline /> },
  { id: "4", name: "Taʼlim", icon: <MdOutlineCastForEducation /> },
  { id: "5", name: "Transport", icon: <BsTruck /> },
  { id: "6", name: "Mebellar", icon: <RiSofaLine /> },
  { id: "7", name: "Koʼchmas mulk", icon: <IoHomeOutline /> },
  { id: "8", name: "Maishiy texnika", icon: <MdOutlineBlender /> },
  { id: "9", name: "Bolalar uchun", icon: <TbHorseToy /> },
  { id: "10", name: "Kitoblar", icon: <FiBook /> },
  { id: "11", name: "Taomlar", icon: <IoFastFoodOutline /> },
  { id: "12", name: "Qurilish va taʼmirlash", icon: <TfiPaintRoller /> },
  { id: "13", name: "Oziq-ovqat mahsulotlari", icon: <GiBroccoli /> },
];

export const Category = ({ category }) => {
  return (
    <>

      <div className="category">

        <div className="CatalogName">
          {CatalogName.map((item) => (
            <h2 key={item.id}>
             <span className="productIcons">{item.icon}</span> {item.name} <FaAngleRight className="arrowIcons" />
            </h2>
          ))}
        </div>

        {/* JSONdan kelayotgan subkategoriya ma'lumotlari. */}
        <div className="categoryItem">
          <h2>{category.name}</h2>
          <div className="subcategories">
            {category.subcategories.map((subcategory, index) => (
              <div key={index} className="subcategory">
                <h3>{subcategory.name}</h3>
                <ul>
                  {subcategory.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Catalog = () => {
  return (
    <div className="catalog">
      {/* JSON ma'lumotlarini Category komponentiga yuborish */}
      <Category category={catalogData} />
    </div>
  );
};

export default Catalog;
