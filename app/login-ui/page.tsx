import NavigationBar from "@/app/components/navbar";
import SubmitButt from "./submitButton";

const UI = () => {

  return(
    <>
    <NavigationBar page="login-ui"/>
      <div className="py-20 flex justify-center bg-cover bg-no-repeat" style={{backgroundImage:'url("/Scene-24.jpg")'}}>
        <div className="flex flex-col justify-center items-center max-w-sm border-white border rounded-lg backdrop-blur-md ">
          <div className="text-2xl text-white mt-10 mb-5 font-extrabold">
            Login
          </div>
          <div>
            <SubmitButt/>
          </div>
        </div>
      </div>
    </>
  )

}

export default UI;