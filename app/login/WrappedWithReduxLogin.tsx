import { Button } from "@/components/ui/button";
import { darkTheme } from "@/hooks/useTheme";
import ReduxProvider from "@/store/provider";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

const WrappedWithReduxLogin = ({
    handleLoginThroughGoogle,
  }: {
    handleLoginThroughGoogle: () => void;
  }) => {
    return (
      <ReduxProvider>
        <div className="flex items-center justify-center h-screen select-none">
          <ToastContainer
            stacked
            autoClose={4000}
            style={{ cursor: "grab" }}
            draggable
            theme="dark"
          />
          <div>
            <div
              className="px-4 pt-4 pb-4 border-2 rounded-xl flex flex-col items-center w-fit"
              style={{
                borderColor: darkTheme.border,
                color: darkTheme.textLight,
              }}
            >
              <div
                className="text-center border-b w-[90%] flex-semibold mb-2"
                style={{ borderColor: darkTheme.border }}
              >
                Securely login using Google!
              </div>
  
              {/* <form
              onSubmit={(e) => handleLogin(e)}
              className="flex flex-col gap-4"
            >
              <div>
                <Input
                  placeholder="email..."
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="password..."
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-2 top-[28%] cursor-pointer"
                  onClick={() => setIsPasswordVisible((p) => !p)}
                >
                  {isPasswordVisible ? (
                    <Eye size={14} />
                  ) : (
                    <EyeClosed size={14} />
                  )}
                </span>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form> */}
  
              {/* <div className="text-center text-sm font-bold">•</div> */}
  
              <Button className="w-[180px]" onClick={handleLoginThroughGoogle}>
                Login with
                <Image
                  src={"/google-icon.png"}
                  alt="Google"
                  width={20}
                  height={20}
                />
              </Button>
              {/* <div className="text-center text-sm font-bold">•</div>
            <Button className="w-full" onClick={handleLoginThroughGithub}>
              Login with
              <Image src={"/github.png"} alt="Google" width={20} height={20} />
            </Button> */}
            </div>
          </div>
        </div>
      </ReduxProvider>
    );
  };
  export default WrappedWithReduxLogin