import React from "react";
import { Link } from "react-router-dom";
import { RiFolderUserLine, RiLogoutBoxLine } from "react-icons/ri";
import logo from "./image.svg";
import { useSelector } from "react-redux";


export default function SideBar() {
  
  const users = useSelector((state) => state.userLogin)
  console.log(users, "aca users")
 
  
  return (
    
      <div>
        <div className="col-span-1 p-8 border-r">
          <div className="text-center p-8">
            <img
              src={users.imagePerfil}
              alt={users.firstName}
              className="w-1/8 rounded-full h-auto"
            />
          </div>
          <div className=" flex flex-col h-[430px] justify-between">
            <nav>
              <ul>
              <li>
                  <Link
                    to={`/profile/${users.id}`}
                    className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <RiFolderUserLine />
                    Mi Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/profilec/${users.id}`}
                    className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <RiFolderUserLine />
                    Mis Ofertas
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <img src={logo} alt="image" />
              <Link
                to="/"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <RiLogoutBoxLine />
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}
