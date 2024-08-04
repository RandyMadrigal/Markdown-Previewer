import { InfoHeader } from "./InfoHeader";
import { Emphasis } from "./Emphasis";
import { List } from "./List";
import { Image } from "./Image";
import { Table } from "./Table";
import { Footer } from "./Footer";
import "./info.css";

export const InfoContainer = () => {
  return (
    <div className="info-container">
      <InfoHeader />
      <Emphasis />
      <List />
      <Image />
      <Table />
      <Footer />
    </div>
  );
};
