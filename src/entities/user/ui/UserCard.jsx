import React from "react";
import s from "./UserCard.module.css";

export const UserCard = ({ 
    user, 
    onDelete, 
    onRoleChange, 
    isEditingRole, 
    onStartEdit, 
    onCancelEdit, 
    selectedRole, 
    onRoleSelect 
}) => {
    return (
        <div className={s.card}>
            <div className={s.userInfo}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Текущая роль: {user.role}</p>
            </div>

            <div className={s.actions}>
                {/* Кнопка удаления */}
                <button onClick={() => onDelete(user.id)} className={s.deleteBtn}>
                    Удалить
                </button>

                {/* Редактирование роли */}
                {isEditingRole ? (
                    <div className={s.roleEditor}>
                        <select
                            value={selectedRole}
                            onChange={(e) => onRoleSelect(e.target.value)}
                        >
                            <option value="user">Пользователь</option>
                            <option value="moderator">Модератор</option>
                            <option value="admin">Администратор</option>
                        </select>
                        <button onClick={() => onRoleChange(user.id, selectedRole)}>
                            Сохранить
                        </button>
                        <button onClick={onCancelEdit}>Отмена</button>
                    </div>
                ) : (
                    <button onClick={onStartEdit} className={s.editBtn}>
                        Изменить роль
                    </button>
                )}
            </div>
        </div>
    );
};