import React from "react";
import List from "./List";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-[80%] flex xs:flex-col xs:space-y-8 lg:space-y-0 lg:flex-row py-12 justify-between">
        <div className="space-y-5 w-1/2">
          <h1 className="uppercase text-[#00df9a] text-3xl font-bold">
            React.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            adipisci dolorum deserunt consectetur excepturi omnis sunt ipsum
            architecto assumenda cupiditate! Totam obcaecati cumque iure nostrum
            corrupti ipsa pariatur voluptatem accusamus!
          </p>
          <ul className="space-x-4 flex">
            <a href="">
              <AiFillFacebook size={40}/>
            </a>
            <a href="">
              <FaGithubSquare size={40}/>
            </a>
            <a href="">
              <AiFillTwitterSquare size={40}/>
            </a>
            <a href="">
              <FaInstagramSquare size={40}/>
            </a>
          </ul>
        </div>
        <div className="flex xs:flex-col xs:space-x-0 md:flex-row justify-around md:space-x-24">
          <List
            head="Solutions"
            data={["Analytics", "Marketing", "Commerce", "Insights"]}
          />
          <List
            head="Support"
            data={["Pricing", "Documentation", "Guides", "API Status"]}
          />
          <List
            head="Company"
            data={["About", "Blog", "Jobs", "Press", "Partners"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
