"use client"
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { AppDispatch } from '../../../redux/store';
import { register, login } from "@/app/redux/auth/auth-operations";
import loadAvatar from "@/app/helpers/load-avatar";
import TextField from "../text-field/text-field";
import { fields } from "../text-field/fields";
import Button from "../button/button";
import { IAuthUserData } from "@/app/types/auth/auth";

import s from "./auth-input-form.module.scss";

interface AuthInputFormProps {
    typeOperation: "register" | "login"; 
}

const AuthInputForm = ({ typeOperation }: AuthInputFormProps) => {
    const dispatch: AppDispatch = useDispatch();
    const pathname = usePathname();

    const btnText = pathname === "/login"
        ? "Login"
        : "Register";

    const { control, handleSubmit, reset } = useForm<IAuthUserData>({
    defaultValues: {
        username: "",
        email: "",
        password: "",
    },
    });

    const onSubmit = async (data: IAuthUserData) => {
        if (typeOperation === "register") {
            const userAvatar = await loadAvatar(); 
            const userData = { ...data, userAvatar }; 
            dispatch(register(userData));
        } else {
            dispatch(login(data));
        }
        reset();
    };
  
    return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {typeOperation === "register" && (<Controller
            control={control}
            name="username"
            rules={{
                required: "User name is required",
                minLength: {
                    value: 2,
                    message: "Name must have at least 2 characters",
                },
                maxLength: {
                    value: 15,
                    message: "Name must have no more than 15 characters",
                },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.username}
                />
            )}
            />
        )}
        <Controller
            control={control}
            name="email"
            rules={{
                required: "Email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    {...fields.email}
                />
            )}
        />
        <Controller
            control={control}
            name="password"
            rules={{
                required: "Password is required",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                },
                maxLength: {
                    value: 20,
                    message: "Password must have no more than 20 characters",
                },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                    value={value}
                    control={control}
                    handleChange={onChange}
                    error={fieldState.error}
                    autoComplete="current-password"
                    {...fields.password}
                />
            )}
        />
        <div className={s.wrapper}>
            <Button text={btnText} btnClass="btnDark" />
        </div>
    </form>
    )
};

export default AuthInputForm;