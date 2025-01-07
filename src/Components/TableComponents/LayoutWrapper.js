import BlockLayout from "Components/Global/BlockLayout";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "Hooks/useLocalStorage";
import CustomTable from "./CustomTable";
import useCurd from "Hooks/useCurd";
import { useQuery } from "@tanstack/react-query";
import getTableColumns from "Helpers/columns-structure";
import Modal from "Components/Global/Modal/Modal";
import { ListHeader } from "./ListHeader";
import { PopupLinks } from "Components/Global/Modal/PopupLinks";

const LayoutWrapper = ({
  onClickDelete,
  onClickView,
  onClickPrint,
  FormRender,
  name: defaultName,
  addtionalActions,
  onClickAdd,
}) => {
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
    queryKey: [
      "list",
      columnFilters,
      name,
      pagination?.pageIndex,
      pagination?.pageSize,
    ],
    queryFn: async () => {
      let fn = null;
      if (fn) {
        return await fn(columnFilters);
      }
      const response = await get(name);
      return await response?.result;
    },
  });

  const columns = useMemo(() => {
    const localColumns = getTable(name);
    if (localColumns) return JSON.parse(localColumns);
    else return getTableColumns(name);
  }, [name]);

  return (
    <>
 
      <Modal open={openForm} bodyClassName="!p-0 !overflow-hidden">
        <FormRender
          onClose={() => setOpenForm(false)}
          setOpenForm={setOpenForm}
        />
      </Modal>
      <BlockLayout
        title={name}
        contentTopBar={
          <>
            <ListHeader
              onClickAdd={() => {
                if (!!onClickAdd) onClickAdd();
                setOpenForm(true);
              }}
              // onSearch={onSearch}
              onClickDelete={onClickDelete}
              onClickView={onClickView}
              onClickPrint={onClickPrint}
              addtionalActions={addtionalActions}
            />
            {Object.keys(rowSelection)?.length ? (
              <span className="text-light-green font-medium text-lg capitalize">
                Selected: {Object.keys(rowSelection)?.length}
              </span>
            ) : null}
          </>
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
