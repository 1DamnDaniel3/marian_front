import React, { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../../../../entities";
import { fetchUsers, deleteUser, updateUserRole } from "../model/usersSlice"; // Импортируем Thunks
import s from "./SetUsers.module.css";

export const SetUsers = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    const [editingUserId, setEditingUserId] = useState(null);
    const [selectedRole, setSelectedRole] = useState("user");


    useEffect(() => {
        dispatch(fetchUsers()); // Запускаем загрузку пользователей
    }, [dispatch]);

    const handleDelete = (userId) => {
        if (window.confirm("Удалить пользователя?")) {
            dispatch(deleteUser(userId)); // Удаляем через Thunk
        }
    };

    const handleRoleChange = (userId, newRole) => {
        dispatch(updateUserRole({ userId, newRole }))
          .then((action) => {
            if (updateUserRole.fulfilled.match(action)) {
            } else {
              console.error("Update failed:", action.payload);
            }
          });
        setEditingUserId(null);
      };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className={s.usersList}>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onDelete={handleDelete}
                    onRoleChange={handleRoleChange}
                    isEditingRole={editingUserId === user.id}
                    onStartEdit={() => {
                        setEditingUserId(user.id);
                        setSelectedRole(user.role);
                    }}
                    onCancelEdit={() => setEditingUserId(null)}
                    selectedRole={selectedRole}
                    onRoleSelect={setSelectedRole}
                />
            ))}
        </div>
    );
};