import { ReportResultsTable } from "Components/ReportsComponents/ReportResultsTable";
import React, { useMemo } from "react";
import getTableColumns  from "Helpers/columns-structure";
import BlockPaper from "Components/Global/BlockPaper";
import { useQuery } from "@tanstack/react-query";
import { ApiActions } from "Helpers/Lib/api";
import { FormProvider, useForm } from "react-hook-form";

const Contracts = () => {
  const name = "contracts";
  const methods = useForm();
  const { handleSubmit } = methods;
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["contract"],
    queryFn: async () => {
      const res = await ApiActions.read("contract", {
        joins: [
          {
            type: "leftJoin",
            table: "building",
            conditions: { "building.id": "contract.building_id" },
          },
          {
            type: "leftJoin",
            table: "account",
            conditions: { "account.id": "contract.client_id" },
          },
          {
            type: "leftJoin",
            table: "apartment",
            conditions: { "apartment.id": "contract.apartment_id" },
          },
          {
            type: "leftJoin",
            table: "parking",
            conditions: { "parking.id": "contract.parking_id" },
          },
          {
            type: "leftJoin",
            table: "shop",
            conditions: { "shop.id": "contract.shop_id" },
          },
        ],
        columns: [
          "contract.*",
          "building.name as building_name",
          "account.name as client_name",
          "apartment.apartment_no as unit_name",
          "parking.parking_no as unit_name",
          "shop.shop_no as unit_name",
          "apartment.apartment_kind as unit_type",
          "parking.parking_kind as unit_type",
          "shop.shop_kind as unit_type",
          "apartment.hex as hex",
          "parking.hex as hex",
          "shop.hex as hex",
        ],
      });
      return res?.result;
    },
  });

  // const queryClient = useQuery({
  //   queryKey: ["contract", page],
  //   page: 1,
  // });
  const columns = useMemo(() => getTableColumns(name), []);

  return (
    <BlockPaper
      title={name}
      contentBar={
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            {/* <ContractFilterBar /> */}
          </form>
        </FormProvider>
      }
    >
      {/* <ReportResultsTable columns={columns} data={isLoading ? [] : data} /> */}
    </BlockPaper>
  );
};

export default Contracts;
