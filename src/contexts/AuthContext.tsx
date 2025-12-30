import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "client" | "admin" | null;

interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers = {
  client: {
    id: "client-1",
    email: "john@acmecorp.com",
    name: "John Smith",
    company: "Acme Corp",
    role: "client" as UserRole,
  },
  admin: {
    id: "admin-1",
    email: "admin@stratosphr.com",
    name: "Admin User",
    role: "admin" as UserRole,
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Mock authentication - in production, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (password.length >= 4) {
      const mockUser = role === "admin" ? mockUsers.admin : mockUsers.client;
      setUser({ ...mockUser, email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
