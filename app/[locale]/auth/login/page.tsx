"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { setTokens } from "@/lib/auth";
import $api from "@/app/http";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<null | boolean>(null);
  const [isPasswordValid, setIsPasswordValid] = useState<null | boolean>(null);
  const [error, setError] = useState("");
  const tAuth = useTranslations("Auth");
  const tComponents = useTranslations("Components");
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "ru";

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(email ? emailRegex.test(email) : null);
    setIsPasswordValid(password ? password.length >= 8 : null);
  }, [email, password]);

  const getBorderColor = (isValid: boolean | null) => {
    if (isValid === null) return "border-[#8b8b8b]";
    return isValid ? "border-[#7FFF00]" : "border-[#FF0000]";
  };

  const isFormValid = isEmailValid && isPasswordValid;
  const buttonColor = isFormValid
    ? "bg-[#007BFF] cursor-pointer"
    : "bg-[#aaaaab] cursor-not-allowed";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await $api.post("/auth/login", { email, password });
      const { accessToken, refreshToken, role } = response.data;
      setTokens(accessToken, refreshToken);
      // Перенаправляем в зависимости от роли
      if (role === "ADMIN") {
        router.push("/");
      } else {
        router.push("/"); // Главная страница для USER
      }
    } catch (err: any) {
      setError(err.response?.data?.error || tAuth("loginFailed"));
    }
  };

  const handleClickForgotPass = () => {
    router.push(`/${locale}/auth/forgot-password`);
  };

  const handleClickRegister = () => {
    router.push(`/${locale}/auth/register`);
  };

  return (
    <>
      <h2 className="my-5 font-medium text-[36px] text-center text-black">
        {tAuth("login")}
      </h2>

      {/* Поля ввода */}
      <div className="flex gap-2 flex-col mb-2">
        <input
          type="text"
          placeholder={tAuth("placeholders.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border rounded-[12px] p-[8px] w-full h-[40px] bg-[#f3f4f7] transition-all
            placeholder:text-[13px] placeholder:leading-[162%] 
            placeholder:font-light placeholder:text-[#929294] placeholder:lowercase
            ${getBorderColor(isEmailValid)}`}
        />

        <input
          type="password"
          placeholder={tAuth("placeholders.password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`border rounded-[12px] p-[8px] w-full h-[40px] bg-[#f3f4f7] transition-all
            placeholder:text-[13px] placeholder:leading-[162%] 
            placeholder:font-light placeholder:text-[#929294] placeholder:lowercase
            ${getBorderColor(isPasswordValid)}`}
        />
      </div>

      {error && <p className="text-center text-red-500 mb-5">{error}</p>}

      <p
        onClick={handleClickForgotPass}
        className="text-end text-[13px] leading-[162%] mb-5 font-normal text-black capitalize"
      >
        {tAuth("forgotYourPassword.question")}
      </p>

      <button
        onClick={handleLogin}
        className={`border-0 text-white mb-3 rounded-[23px] p-[8px] w-full h-[46px] transition-all ${buttonColor}`}
        disabled={!isFormValid}
      >
        {tComponents("login")}
      </button>

      <p className="text-center text-[13px] mb-5 font-normal text-[#929294] flex flex-col">
        <span>{tAuth("youAgree")}</span>
        <span className="text-black">{tAuth("privacyPolicy")}</span>
      </p>

      <p className="text-center mb-2 text-[13px] leading-[154%] font-normal text-[#929294]">
        {tAuth("signInWith")}
      </p>

      <div className="mb-5 flex gap-3 justify-center">
        <Image src="/Google2.svg" alt="Google" width={70} height={70} />
        <Image src="/Vk2.svg" alt="Vk2" width={70} height={70} />
      </div>

      <p className="text-center text-[13px] mb-7 leading-[154%] font-normal text-[#929294]">
        {tAuth("notAccount")}{" "}
        <span onClick={handleClickRegister} className="text-black">
          {tAuth("signUp")}
        </span>
      </p>
    </>
  );
};

export default Login;
