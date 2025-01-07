import EntryForm from "Components/StructurePage/Forms/Vouchers/Entry/EntryForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import { useNavigate, useParams } from "react-router-dom";

const Entries = () => {
  const name = "entry_main_data";
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <LayoutWrapper
        name={name}
        onClickAdd={() => {
          navigate("entry");
        }}
        FormRender={(props) => {
          console.log(props, "props");
          if (params?.name) {
            props.setOpenForm(true);
          } else return;

          return (
            <EntryForm
              {...props}
              onClose={() => {
                navigate("/entries/");
                props.onClose();
              }}
            />
          );
        }}
        // onClickDelete={}
        // onClickAdd={}
        // onClickPrint={}
        // onClickView={}
        // onSearch={}
      />
    </>
  );
};

export default Entries;
