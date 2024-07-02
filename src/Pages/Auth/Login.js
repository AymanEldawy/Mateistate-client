import wallpaper from "Assets/Images/wallpaper.jpg";
import { Button } from "Components/Global/Button";
import { Input } from "Components/StructurePage/CustomFields";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useGlobalOptions from "Hooks/useGlobalOptions";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useGlobalOptions();
  const methods = useForm();
  const {
    formState: { errors, isDirty },
    handleSubmit,
    watch,
  } = methods;

  const onSubmit = async () => {
    if (!isDirty) return;
    const res = await ApiActions.read("admins", {
      conditions: [
        { type: "and", conditions: [["email", "=", watch("email")]] },
        { type: "and", conditions: [["password", "=", watch("password")]] },
      ],
    });

    if (res?.success) {
      let data = res?.result?.at(0);
      Cookies.set("tenant_id", data?.tenant_id, {
        expires: 7,
      });
      setUser(data);
      navigate("/");
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        className=" h-screen w-screen bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="h-full w-full backdrop-blur-sm absolute bg-[#00000099]"></div>
        <div className="h-[60%] w-[50%] bg-blue-600 opacity-70 rounded-b-3xl absolute z-20 top-0 left-1/2 -translate-x-1/2"></div>
        <div className="w-full h-full  flex items-center relative z-20">
          <div className="container">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto shadow bg-white p-8 rounded-md"
            >
              <h1 className="text-2xl text-center font-medium mb-4">Login</h1>
              <Input label="email" name="email" type="email" />
              <div className="mt-4" />
              <Input label="Password" type="password" name="password" />
              <Button
                type="submit"
                classes="mt-8 block w-full text-green-500"
                title="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;
