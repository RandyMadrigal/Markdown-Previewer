import { InfoHeader } from "./InfoHeader";
import { Emphasis } from "./Emphasis";
import { List } from "./List";
import { Image } from "./Image";
import { Table } from "./Table";
import { Footer } from "./Footer";

export const InfoContainer = () => {
  return (
    <div className="container bg-slate-100 mx-auto w-6/12 flex flex-col border-t-2 text-wrap text-center p-5">
      <InfoHeader />
      <Emphasis />
      <List />
      <Image />
      <Table />
      <Footer />
    </div>
  );
};
