import BlockPaper from "Components/Global/BlockPaper";
import { usePopupForm } from "Hooks/usePopupForm";
import React from "react";
import { useParams } from "react-router-dom";


const levels = [
  "contract",
  "contract_commission",
  "contract_cycle",
  "contract_terms",
  "contract_linked_parking",
  "contract_pictures",
  "contract_termination",
  "contract_receipt_number",
  "contract_other_fees",
  "contract_fixed_assets",
];

const SingleContract = () => {
  const { id } = useParams();
  
  return (
    <BlockPaper title={`contract ${id}`}>
     
      <div className="divide-x-2 my-4" />
      {/* {levels?.map((level) => {
        let levelData = data?.[level];
        return (
          <ul className="flex flex-col gap-2">
            {Object.entries(levelData)?.map(([key, val]) => {
              if (key === "id") return;
              return (
                <li key={key} className="border-b last:border-b-0 py-2 text-black capitalize">
                  {key} <span className="text-black font-medium">{val}</span>
                </li>
              );
            })}
          </ul>
        );
      })} */}
    </BlockPaper>
  );
};

export default SingleContract;
