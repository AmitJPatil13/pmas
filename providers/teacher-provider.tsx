"use client";
import React, { createContext, useState, useContext } from "react";
import { Teacher as TeacherType } from "@/types";

const TeacherContext = createContext<{
  teacher: TeacherType | null;
  setTeacher: React.Dispatch<React.SetStateAction<TeacherType | null>>;
} | null>(null);

export const TeacherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teacher, setTeacher] = useState<TeacherType | null>(null);

  return (
    <TeacherContext.Provider value={{ teacher, setTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacher = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("useTeacher must be used within a TeacherProvider");
  }
  return context;
};
