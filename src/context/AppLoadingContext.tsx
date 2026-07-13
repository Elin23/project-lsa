import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

interface AppLoadingContextValue {
  isAppReady: boolean;
}

const AppLoadingContext = createContext<AppLoadingContextValue>({
  isAppReady: false,
});

interface AppLoadingProviderProps {
  isAppReady: boolean;
  children: ReactNode;
}

export function AppLoadingProvider({
  isAppReady,
  children,
}: AppLoadingProviderProps) {
  return (
    <AppLoadingContext.Provider value={{ isAppReady }}>
      {children}
    </AppLoadingContext.Provider>
  );
}

export function useAppLoading() {
  return useContext(AppLoadingContext);
}