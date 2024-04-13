import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/body/NavBar";
import SideBar from "../components/sidebar/SideBar";
import { Link, Outlet } from "react-router-dom";
import getList from "../Api/list";
import { Image, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const ContentApi = () => {
  const [listData, setListData] = useState([]);

  const getAllData = async () => {
    const response = await getList.getAll();
    setListData(response.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <div className=" h-[100vh] flex flex-col text-white bg-black">
        <div className=" flex min-h-[85vh] p-2 gap-2 md:flex-row flex-col">
          <SideBar />
          <div className="flex flex-col bg-[#121212] rounded-lg p-2 md:w-[65vw] lg:w-[75vw] overflow-hidden">
            <NavBar />
            <Outlet />
            <div className="content-music">
              {listData.map((item) => (
                <section className="box">
                  <Card hoverable style={{ width: 240 }} className="items-card">
                    <div key={item.id} className="list-music">
                      <Image
                        width={150}
                        height={150}
                        className="img-detail-content"
                        src={item.img}
                      />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>playlist</p>
                    </div>
                    <Link
                      to={`/detailContentMusic/${item.id}`}
                      className="icon-right"
                    >
                      <ArrowRightOutlined />
                    </Link>
                  </Card>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentApi;
