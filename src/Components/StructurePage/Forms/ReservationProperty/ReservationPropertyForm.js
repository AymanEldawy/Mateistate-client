import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useListView from "Hooks/useListView";
import { removeNullValues } from "Helpers/functions";
import { CREATED_FROM_CONTRACT_RESERVATION_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { ReservationPropertyFields } from "./ReservationPropertyFields";
import {
  deleteEntry,
  generateEntryFromReservation,
} from "Helpers/Lib/vouchers-insert";
import { SELECT_LISTS } from "Helpers/constants";

const CACHE_PROPERTY = {};

const getPropertyList = async (type, building_id, setList) => {
  if (!type || !building_id) return;

  const property = SELECT_LISTS("contact_pattern_assets_type")?.find(
    (c) => c?.id === +type
  );

  let name = property?.name?.toLowerCase();

  if (!name) return;

  if (CACHE_PROPERTY?.[`${name}${building_id}`]) {
    setList(CACHE_PROPERTY?.[`${name}${building_id}`]);
  }

  const response = await ApiActions.read(name, {
    conditions: [
      { type: "and", conditions: [["building_id", "=", building_id]] },
    ],
  });

  if (response?.result?.length) {
    let list = {
      list: response?.result,
      name: `${name}_no`,
    };
    setList(list);
    CACHE_PROPERTY[`${name}${building_id}`] = list;
  } else {
    setList({});
  }
};

const ReservationPropertyForm = ({ onClose, popupView }) => {
  const name = "reservation_property";
  const params = useParams();
  const viewList = useListView({ name, defaultNumber: params?.number });
  // const { appendNewRecord } = usePopupForm();
  const methods = useForm();
  const {
    isLayoutUpdate,
    listOfNumbers,
    number,
    setMaxLength,
    setListOfNumbers,
    maxLength,
  } = viewList;
  const {
    reset,
    watch,
    setValue,
    formState: { isDirty, errors },
    setError,
    clearErrors,
  } = methods;

  const { CACHE_LIST, fields } = useRefTable(name);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState([]);
console.log(fields,'-f');
  const reservationQueryClient = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const res = await ApiActions.read(name, {
        conditions: [
          {
            type: "and",
            conditions: [["number", "=", listOfNumbers[number - 1]]],
          },
        ],
      });

      let reservationProperty = res?.result?.at(0);
      if (reservationProperty) {
        reset(reservationProperty);
        getPropertyList(
          reservationProperty?.property_type,
          reservationProperty?.building_id,
          setSelectedProperty
        );

        return reservationProperty;
      }
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "property_type" || name === "building_id") {
        getPropertyList(watch(name), watch("building_id"), setSelectedProperty);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty()) return;
    setIsLoading(true);
    let values = removeNullValues(value);
    let res = null;

    if (isLayoutUpdate) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert(name, {
        data: values,
      });
    }

    if (res?.success) {
      toast.success(
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
        reservationQueryClient?.refetch();
        setListOfNumbers((prev) => [...prev, res?.record?.number]);
      }

      if (watch("has_payment")) {
        generateEntryFromReservation({
          created_from_id: watch("id") || res?.record?.id,
          created_from: CREATED_FROM_CONTRACT_RESERVATION_CODE,
          values: watch(),
        });
      } else deleteEntry(watch("id") || res?.record?.id);
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={onSubmit}
      popupView={popupView}
      methods={methods}
      itemId={watch("id")}
      itemNumber={watch("number")}
    >
      <ReservationPropertyFields
        key={number}
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        errors={errors}
        watch={watch}
        selectedProperty={selectedProperty}
      />
    </FormWrapperLayout>
  );
};

export default ReservationPropertyForm;
