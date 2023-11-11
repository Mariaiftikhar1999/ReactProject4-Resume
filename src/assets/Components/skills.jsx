import React from "react";
import {data,data2 } from "../../data.jsx"

function Skills() {
  return (
    <>
      <div className="cardd cd-1 w-full mt-4 hover:scale-105 duration-700 rounded-md">
        <div className="p-6 ">
          <h3 className="font-medium text-xl">Professional Skills</h3>
          <div className="flex w-full justify-between">
          <div className="w-full">
           

           {
            data.map((d)=>{
              return(
                <>
                  <div>
              <h2 className="font- light pt-4">{d.skills}</h2>
              <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-3/4">
                  {d.percent}
                </div>
              </div>
            </div>
                </>
              )
               

              
            })

           }
          
          </div>
          <div className="w-full ml-5">
          {
            data2.map((d)=>{
              return(
                <>
                  <div>
              <h2 className="font- light pt-4">{d.skills}</h2>
              <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-3/4">
                  {d.percent}
                </div>
              </div>
            </div>
                </>
              )
               

              
            })

           }
           
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
