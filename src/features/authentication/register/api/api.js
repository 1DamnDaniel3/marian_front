import { APIs } from "../../../../shared/api";

export const registerApi = async (formData) => {
    try {
        const response = await APIs.user.registration(formData);
        console.log("Успешная регистрация:", response);
    } catch (error) {
        console.error("Ошибка регистрации:", error);
    }
};