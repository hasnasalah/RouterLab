import type {ReactNode} from "react";

export interface AuthProviderProps {
  children: ReactNode;
}
export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}