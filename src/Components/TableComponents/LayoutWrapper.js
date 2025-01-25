import BlockLayout from "Components/Global/BlockLayout";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "Hooks/useLocalStorage";
import CustomTable from "./CustomTable";
import useCurd from "Hooks/useCurd";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import getTableColumns from "Helpers/columns-structure";
import Modal from "Components/Global/Modal/Modal";
import { ListHeader } from "./ListHeader";
import { PopupLinks } from "Components/Global/Modal/PopupLinks";
import useCustomMutation from './../../Hooks/useMeutation';

const LayoutWrapper = ({
  onClickDelete,
  onClickView,
  onClickPrint,
  FormRender,
  name: defaultName,
  additionalActions,
  onClickAdd,
  outerData
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const name = defaultName || params?.name;
  const number = params?.number
  const code = params?.code
  const { getTable, setTable } = useLocalStorage({});
  const { get, getDataWithFilter } = useCurd();
  const [columnFilters, setColumnFilters] = useState([]);
  const [openForm, setOpenForm] = useState(!!number);
  const [rowSelection, setRowSelection] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });

  useEffect(() => {
    if ((number || code) && !openForm) setOpenForm(true);
  }, [number, code]);

  const { isError, error, isLoading, isFetching, data, refetch } = useQuery({
    queryKey: [
      "list",
      name,
      columnFilters,
      pagination?.pageIndex,
      pagination?.pageSize,
    ],
    queryFn: async () => {
      let fn = null;
      if (fn) {
        return await fn(columnFilters);
      } else if (outerData) {
        return await outerData(columnFilters)
      }
      const response = await getDataWithFilter(name, columnFilters);
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
          onClose={(link) => {
            setOpenForm(false);
            navigate(link || `/${name}`)
          }}
          setOpenForm={setOpenForm}
          number={number}
          code={code}
        />
      </Modal>
      <BlockLayout
        title={name}
        contentTopBar={
          <>
            <ListHeader
              onClickAdd={() => {
                if (!!onClickAdd) onClickAdd();
                else
                  setOpenForm(true);
              }}
              // onSearch={onSearch}
              onClickDelete={onClickDelete ? () => onClickDelete(rowSelection, refetch) : null}
              onClickView={onClickView}
              onClickPrint={onClickPrint}
              additionalActions={additionalActions}
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
