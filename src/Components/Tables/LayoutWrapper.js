import BlockLayout from "Components/Global/BlockLayout";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListHeader } from "./ListHeader";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "Hooks/useLocalStorage";
import CustomTable from "../TableComponents/CustomTable";
import useCurd from "Hooks/useCurd";
import { useQuery } from "@tanstack/react-query";
import { SERVICE } from "Helpers/Lib/service";
import getTableColumns from "Helpers/columns-structure";
import Modal from "Components/Global/Modal/Modal";

const LayoutWrapper = ({
  onClickDelete,
  onClickView,
  onClickPrint,
  FormRender,
  name: defaultName,
}) => {
  console.log("🚀 ~ onClickAdd:", defaultName);
  const params = useParams();
  const name = defaultName || params?.name;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getTable, setTable } = useLocalStorage({});
  const { get } = useCurd();
  const [columnFilters, setColumnFilters] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [rowSelection, setRowSelection] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });

  const { isError, error, isLoading, isFetching, data } = useQuery({
    queryKey: ["list", columnFilters, name],
    queryFn: async () => {
      let fn = SERVICE?.[name];
      if (fn) {
        return await fn(columnFilters);
      }
      const response = await get(name);
      return await response?.result;
      // console.log("🚀 ~ queryFn: ~ fn:", fn)
    },
  });

  const columns = useMemo(() => {
    const localColumns = getTable(name);
    if (localColumns) return JSON.parse(localColumns);
    else return getTableColumns(name);
  }, [name]);

  console.log("called here render parent", columnFilters);
  return (
    <>
      <Modal open={openForm} onClose={() => setOpenForm(false)}>
        <FormRender memo={"test"} />
      </Modal>
      <BlockLayout
        title={name}
        contentTopBar={
          <ListHeader
            onClickAdd={() => setOpenForm(true)}
            // onSearch={onSearch}
            onClickDelete={onClickDelete}
            onClickView={onClickView}
            onClickPrint={onClickPrint}
          />
        }
      >
        <CustomTable
          name={name}
          data={!isLoading && data?.length ? data : []}
          columns={columns}
          setColumnFilters={setColumnFilters}
          columnFilters={columnFilters}
          pagination={pagination}
          setPagination={setPagination}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
        />
      </BlockLayout>
    </>
  );
};

export default LayoutWrapper;
